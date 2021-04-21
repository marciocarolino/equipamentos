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
const computador = require('./src/models/computador-model');
const redes = require('./src/models/rede-model'); 

//Chamando rotas cadastroComputador.
const cadComputador = require('./src/routes/registroComputador-router');
app.use('/computador',cadComputador);

//chamando rotas cadRedes
const cadRedes = require('./src/routes/registroRedes-router');
app.use('/redes',cadRedes);

app.listen(port, ()=>{
  console.log(`Servidor rodando ${port} `);
});