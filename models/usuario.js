const sequelize = require('../server/service/sequelize')

const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: sequelize.Sequelize.String
    },
    email: {
        type: sequelize.Sequelize.String
    },
    localizacao: {
        type: sequelize.Sequelize.String
    },
    avatar: {
        type: sequelize.Sequelize.String
    },
    username: {
        type: sequelize.Sequelize.String
    },
    bio: {
        type: sequelize.Sequelize.String
    }
})
Usuarios.sync({force: true})