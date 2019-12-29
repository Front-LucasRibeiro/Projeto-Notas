const db = require('./db');

// definindo um módulo no mysql, campos na tabela
const Post = db.sequelize.define('postagens', {
  titulo: {
    type: db.Sequelize.STRING
  },
   conteudo: {
    type: db.Sequelize.TEXT
  }
})

module.exports = Post 