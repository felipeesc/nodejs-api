const Sequelize = require('sequelize')
const sequelize = new Sequelize('github', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function (){
    console.log("conectado com sucesso!")
}).catch(function (erro){
    console.log("falha ao se conectar " +erro)
});

module.exports = sequelize;
