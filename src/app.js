const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


const cadastroRouter = require('./routes/cadastroRouter');  
const carrinhoRouter = require('./routes/carrinhoRouter');  
const homeRouter = require('./routes/homeRouter');  
const listagemRouter = require('./routes/listagemRouter');  
const loginRouter = require('./routes/loginRouter');  
const painelRouter = require('./routes/painelRouter');  
const produtoRouter = require('./routes/produtoRouter');  

app.use('/cadastro', cadastroRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/', homeRouter);
app.use('/listagem', listagemRouter);
app.use('/login', loginRouter);
app.use('/painel', painelRouter);
app.use('/produto', produtoRouter);

module.exports = app;
