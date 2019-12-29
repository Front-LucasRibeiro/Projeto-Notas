const Sequelize = require('sequelize');

// Conexao com mysql 
const sequelize = new Sequelize('postapp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}