console.log('app.js reporting for duty..');

const useCredentials = () => {
    fetch('http://localhost:3007/token', {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data) => getToken(data))
        .catch((error) => console.log(error));
};

const getToken = (resData) => {
    // console.log(resData.Client_Id)
    fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${resData.Client_Id}&client_secret=${resData.Client_Secret}`
    })
        .then((response) => response.json())
        .then((data) => console.log(data.access_token))
        .catch((error) => console.log(error));
};

useCredentials();

