'use strict'

const mongoose = require('mongoose');
const cadRedes = mongoose.model('redes');

exports.get = (request, response, next) =>{
  cadRedes.find({}).then(data =>{
    response.status(200).send(data);
  }).catch(error =>{
    response.status(400).send({
      message:'Falha ao buscas equipamentos de rede',
      data: error
    });
  });
}

exports.post = ( request, response, next) =>{
  let cadastro = new cadRedes();

  //============================================
  cadastro.nomeEquipamento = request.body.nomeEquipamento;
  cadastro.modeloEquipamento = request.body.modeloEquipamento;
  cadastro.localEquipamento = request.body.localEquipamento;
  cadastro.dataCompra = request.body.dataCompra;
  cadastro.responsavelEquipamento = request.body.responsavelEquipamento;
  cadastro.ramalResponsavel = request.body.ramalResponsavel;
  //============================================
  cadastro.save().then(val => {
    response.status(201).send({
      message:'Equipamento de redes salvo com sucesso!'
    });
  }).catch(error => {
    response.status(400).send({
      message:'Falha ao salvar equipamento de rede',
      data: error
    });
  });
}