'use strict'
const bodyParser = require('body-parser');
const app = require('./src/config/custom-express');
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


//Conectando ao banco de dados
const mongoose = require('./src/config/connectionDB');
app.connect(mongoose);

//Chamando minha primeira rota..
const index = require('./src/routes/index-router');
app.use('/', index);


//Carregando os models.
const Equipamentos = require('./src/models/computador-model');


//Chamando rotas cadastroComputador.
const cadComputador = require('./src/routes/registroComputador-router');
app.use('/computador',cadComputador);


app.listen(port, ()=>{
  console.log(`Servidor rodando ${port} `);
  
});