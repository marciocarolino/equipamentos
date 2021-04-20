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
  },
  nomeComputador:{
    type: String,
    required: true
  },
  ipComputador:{
    type: String,
    required: [true, 'informe o ip do computador']
  },
  setorFuncionario:{
    type: String,
    required: false
  },
  ramalFuncionario:{
    type: Number,
    required: false,
    trim: true
  },
  emailFuncionario:{
    type: String,
    required: true,
    trim: true
  },
  active:{
    type: Boolean,
    required: true,
    default: true,
    trim: true
  }
});

//model , Schema
module.exports = mongoose.model('cadastroComputador',schema);