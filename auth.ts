'use strict';
import { Context, APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import { ClientId, frontend_api_url } from "./src/secrets";

const axios = require('axios');

module.exports.auth = async (event: APIGatewayEvent, _context: Context) => {
    var token = {access_token:String, id_token:String};
    if (!event.body) {
        throw new Error("event empty...");
    }
    console.log(JSON.parse(event.body));
    console.log("Auth code is above");
    const acode = JSON.parse(event.body);
    const keys = ["grant_type", "code", "client_id", "redirect_uri"] as const;
    const details = {
        grant_type: "authorization_code",
        code: acode,
        client_id: ClientId,
        redirect_uri: frontend_api_url
    };

    const formBody = keys.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(details[key])}`).join("&");
    
    console.log(formBody);

    await axios.post('https://backofficetest001.auth.eu-west-1.amazoncognito.com/oauth2/token',formBody,{
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
            
        }
    }).then((res: { data: { access_token: any; id_token: any; }; })=>{
        token.access_token = res.data.access_token;
        token.id_token = res.data.id_token;
        console.log(res);
    }).catch((err: any)=>{
        console.log(err);
    });
    
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            result: token
        }),
    };
};