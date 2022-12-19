console.log('app.js reporting for duty..');

async function fetchToken() {
    await fetch('http://localhost:3000/token', {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
};

fetchToken();

