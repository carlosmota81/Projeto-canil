const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('toughts3','root','1260',{
    host: 'localhost',
    dialect: 'mysql',
})

try{
    sequelize.authenticate()
    console.log('Conectado ao banco!');
}catch(erro) {
    console.log(`Não foi possivel estabelecer conecxão ao banco: ${erro}`);
}

module.exports = sequelize