'use strict'

const mongoose = require('mongoose');
const cadRedes = mongoose.model('redes');

//Mostrar todos os equipamentos de rede cadastrados
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

//Listar por nome do equipamento
exports.getByNomeEquipamento = (request, response,next)=>{
  cadRedes.findOne({
    nomeEquipamento: request.params.nomeEquipamento
  },'nomeEquipamento modeloEquipamento localEquipamento responsavelEquipamento ramalResponsavel ')
  .then(data => {
    response.status(200).send(data);
  }).catch(error => {
    response.status(400).send(error);
  });
}


//Cadastrar novo equipamento de redes
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


//Atualizando equipamento de rede
exports.put =(request, response,  next) =>{
  cadRedes.findOneAndUpdate(request.params.nomeEquipamento,{
    $set:{
      nomeEquipamento: request.body.nomeEquipamento,
      modeloEquipamento: request.body.modeloEquipamento,
      localEquipamento: request.body.localEquipamento,
      dataCompra: request.body.dataCompra,
      responsavelEquipamento: request.body.responsavelEquipamento,
      ramalResponsavel: request.body.ramalResponsavel
    }
  }).then( x => {
    response.status(200).send({
      message:"Equipamento de rede atualizado com sucesso!"
    });
  }).catch(error =>{
    response.status(400).send({
      message:"Falha ao atualizar equipamento de rede!"
    });
  });
}

//Excluir Equipamento de redes
exports.delete = (request, response,next)=>{
  cadRedes.findOneAndDelete(request.body.nomeEquipamento).then(x=>{
    response.status(200).send({
      message:"Equipamento excluido com sucesso!"
    });
  }).catch(error =>{
    response.status(400).send({
      message: "Error ao excluir equipamento!",
      data: error
    });
  });
}
