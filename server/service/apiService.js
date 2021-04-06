const apiData = require('../data/apiData');

exports.getApi = function () {
    return apiData.get(":nick", async (req, res) => {
        const {nick} = req.params;
        try {
            const {data} = await apiData.get(`${nick}`);

            return res.send({obj: data});
        } catch (error) {
            res.send({error: error.message});
        }
    })
};