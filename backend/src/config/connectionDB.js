'use strict'

//Conexao com o servidor mongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Equipamentos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false,
  useCreateIndex:true
});

mongoose.set('bufferCommands', true);

mongoose.connection.once('open',function(){
  console.log('Banco de dados conectado com sucesso!!!!!')
}).on('error',function(err){
  console.log('Error', err);
});


module.exports = mongoose;
