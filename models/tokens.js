const sequeliza = ('./')

const Tokens = sequeliza.define('tokens', {
    idUsuario: {
        type: sequelize.Sequelize.String
    }
})
Tokens.sync({force: true})