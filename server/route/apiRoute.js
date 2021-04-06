const express = require('express')
const router = express.Router()
const apiService = require('../service/apiService')
const path = require('path');

// router.get('/', async function (req, res){
//     const posts = await apiService.getApi();
//     res.json(posts);
// });

router.get('/', async function (req, res){
   res.sendFile(path.resolve("server/index.html"));
});
router.post('/search/:nick', async function (req, res){
    const {nick} = req.params;
    const posts = await apiService.getApi(nick);
});

router.post('/posts', async function (req, res){

});
router.put('/posts/id', async function (req, res){

});
router.delete('/posts/id', async function (req, res){

});

module.exports = router;


