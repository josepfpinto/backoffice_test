export async function FetchData() {
  const url = `https://2pazqo9n48.execute-api.eu-west-1.amazonaws.com/dev`;
  const response = await fetch(url);

  let apiResponse: string = '';

  if (response.status == 404 || response.statusText === `Not Found`) {
    console.log(`Failed response...`);
    return apiResponse;
  }

  const responseJson = await response.json();
  console.log(responseJson);

  if (responseJson === undefined) {
    console.log(`responseJson is undifined...`);
    console.log(responseJson);
    return apiResponse;
  }

  apiResponse = responseJson.data;
  
  return apiResponse;
}
