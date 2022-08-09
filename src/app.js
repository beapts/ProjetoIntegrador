const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


const cadastroRouter = require('./routes/cadastroRouter');  
const carrinhoRouter = require('./routes/carrinhoRouter');  
//const mainRouter = require('./routes/mainRouter');  
const listagemRouter = require('./routes/listagemRouter');  
const loginRouter = require('./routes/loginRouter');  
const painelRouter = require('./routes/painelRouter');  
const produtoRouter = require('./routes/produtoRouter');
const homeController = require('./controllers/homeController');
const footerRouter = require('./routes/footerRouter');

app.use('/cadastro', cadastroRouter);
app.use('/carrinho', carrinhoRouter);
app.get('/', homeController.home); ;
app.use('/listagem', listagemRouter);
app.use('/login', loginRouter);
app.use('/painel', painelRouter);
app.use('/produto', produtoRouter);
app.use('/institucional', footerRouter)
app.use('/ajuda', footerRouter)
app.use('/minhaconta', footerRouter)



module.exports = app;
