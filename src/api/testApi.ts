import { backend_api_url } from "../secrets";

export async function FetchData(token:string) {

  console.log('TOKEN:')
  console.log(token) // TO REMOVE...

  return fetch(backend_api_url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
      'Accept': '*/*',
    },
    mode: 'cors',
  }).then(async function(response) {
    let apiResponse: string = '';
    
    if(response.status!==200) {
      console.log(`response.status!==200`);
      return response.statusText;
    }
    const responseJson = await response.json();

    if (responseJson === undefined) {
      console.log(responseJson);
      return 'responseJson is undifined...';
    }

    apiResponse = responseJson.data;
    
    return apiResponse;
  })
  .catch(function(error:any) {
    console.log('error:')
    console.log(error)
    return 'error fetching data...';
  });
}
