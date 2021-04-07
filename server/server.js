const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', require('./routes/apiRoute'));

// app.get('/', function (req, res) {
//     // res.send(__dirname + '/views/layouts/searchGit')
// });

app.listen(3001, () => {
    console.log("servidor rodando na porta http://localhost:3001");
})



