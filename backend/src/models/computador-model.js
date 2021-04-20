'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
* -> nome usuário
* -> nome computador
* -> IP computador
* -> Setor ( onde o computador encontra-se)
* -> ramal
* -> e-mail usuario
*/

const schema = new Schema({
  nomeUsuario:{
    type: String,
    required: [true, 'Valor obrigatório'],
    trim: true
  },
  nomeComputador:{
    type: String,
    required: true
  },
  ipComputador:{
    type: Number,
    required: true
  },
  setorFuncionario:{
    type: String,
    required: false
  },
  ramalFuncionario:{
    type: Number,
    required: false
  },
  emailFuncionario:{
    type: String,
    required: true
  },
  active:{
    type: Boolean,
    required: true,
    default: true
  }
});

//model , Schema
module.exports = mongoose.model('cadastroComputador',schema);