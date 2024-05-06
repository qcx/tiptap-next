export class API {
  public static uploadImage = async file => {
    const requestURL = await fetch('/api/images', { method: 'POST' });

    const responseURL = await requestURL.json();

    const url = b.result.result.uploadURL;

    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer Far4n-ZDIKz2XADoC6-Drzp3qAm_3dgl_EedzGI4');

    const formdata = new FormData();
    formdata.append('file', file, file.name);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
    };

    const request = await fetch(url, requestOptions);

    const response = await request.json();

    return response.result.variants[0];
  };
}

export default API;
