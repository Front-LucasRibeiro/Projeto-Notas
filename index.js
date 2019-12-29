const express = require('express'),
app = express(),
handlebars = require('express-handlebars'),
bodyParser = require('body-parser'),
Post = require('./models/Post');

// Template engine 
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Rotas - exibindo arquivo formulario da pasta views
app.get('/', function (req,res) {
  Post.findAll().then(function(posts){
    // Passando dados para o handlebars 
    res.render('home', {posts: posts}) 
  })
})

app.get('/cad', function (req,res) {
  res.render('formulario')
})

// bodyparser - para captura de formularios
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/add', function (req,res) {
  //pegado dados enviados pelo form
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function(){
    res.redirect('/');
  }).catch(function(erro){
    res.send("Houve um erro: " + erro)
  })
})

app.get('/deletar/:id', function (req,res) {
  // pegando o parametro id da url e deletando registro 
  Post.destroy({where: {'id': req.params.id}}).then(function(){
    res.send('Postagem deletada com sucesso!')
  }).catch(function(erro){
    res.send("Esta postagem não existe!")
  })
})

app.listen(3000, () => {
  console.log('Servidor Rodando na porta 3000');
})