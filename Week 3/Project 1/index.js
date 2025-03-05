const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log("Fetched Data: ", response.data);
    })
    .catch(error => {
        console.error("Error", error.message);
    });
