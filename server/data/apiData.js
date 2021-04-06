const axios = require("axios");

const apiData = axios.create({
    baseURL: 'https://api.github.com/users/'
});

module.exports = apiData;

