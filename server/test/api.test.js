const axios = require('axios');

test('obter response api', async function () {
    const response = await axios({
        url: 'http://localhost:3001/felipeesc',
        method: 'get'
    });
    console.log(response);
});