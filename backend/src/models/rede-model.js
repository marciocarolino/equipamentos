'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
* Nome do equipamento 'nome do servidor na rede ex: jupiter,marte'
* Modelo do equipamento 'ex.: swicth MDS09-090'
* Local que está o equipamento
* data da compra
* Responsável
* Ramal Rensponsável

*/

const schema = new Schema({
nomeEquipamento:{
  type:String,
  required:[true, 'necessário informa o nome do equipamento'],
},
modeloEquipamento:{
  type: String,
  required: true
},
localEquipamento:{
  type: String,
  required: true
},
dataCompra:{
  //Depois alterar para type: Date
  type: String,
  required: false
},
responsavelEquipamento:{
  type: String,
  required: true
},
ramalResponsavel:{
  type: Number,
  required: true
}

});


module.exports = mongoose.model('redes', schema);