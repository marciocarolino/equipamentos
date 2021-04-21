'use strict'
const mongoose = require('mongoose');
const cadComputer = mongoose.model('cadastroComputador');

//Mostrar todos os idens cadastrados
exports.get = ( request, response, next) =>{
    cadComputer.find({}).then(data => {
      response.status(200).send(data);
    }).catch(error =>{
      response.status(201).send({
        message:'Falha ao buscar os computadores',
        data: error
      });
    });
}

//Listar por IP e mostrar outras informações.
exports.getByIpComputador = ( request, response, next) =>{
  cadComputer.findOne({
      ipComputador: request.params.ipComputador,
      active: true
  },'nomeUsuario nomeComputador ipComputador').then(data =>{
    response.status(200).send(data);
  }).catch(error =>{
      response.status(400).send(error);
  });
}

//Cadastrar novo computador
exports.post = ( request, response, next) =>{
  //let cadastro = new cadComputer(request.body);
  let cadastro = new cadComputer();
  //======================================
  cadastro.nomeUsuario = request.body.nomeUsuario;
  cadastro.nomeComputador = request.body.nomeComputador;
  cadastro.ipComputador = request.body.ipComputador;
  cadastro.setorFuncionario = request.body.setorFuncionario;
  cadastro.ramalFuncionario = request.body.ramalFuncionario;
  cadastro.emailFuncionario = request.body.emailFuncionario;
  cadastro.active = request.body.active;
  //=======================================
  cadastro.save().then(val => {
    response.status(201).send({
      message:'Computador Registrado com sucesso!'
    });
  }).catch(error =>{
    response.status(400).send({
      message:"Falha ao cadastrar o computador",
      data: error
    });
  });
}

//Atualizando um computador
exports.put = ( request, response, next) =>{
    cadComputer.findOneAndUpdate(request.params.ipComputador, {
      $set:{
        nomeUsuario:request.body.nomeUsuario,
        nomeComputador: request.body.nomeComputador,
        ipComputador: request.body.ipComputador,
        setorFuncionario: request.body.setorFuncionario,
        ramalFuncionario: request.body.ramalFuncionario,
        emailFuncionario: request.body.emailFuncionario,
        active: request.body.active
      }
    }).then( x => {
      response.status(200).send({
        message:"Computador atualizado com sucesso!"
      });
    }).catch(error =>{
      response.status(400).send({
        message: "Falha ao atualizar o computador",
        data: error
      });
    });
}

//Excluindo computador.
exports.delete = (request, response, next) => {
  cadComputer.findOneAndRemove(request.body.ipComputador).then(x =>{
    response.status(200).send({
      message:"Computador excluido com sucesso!"
    });
  }).catch(error =>{
    response.status(400).send({
      message: "Falha ao excluir o computador",
      data: error
    });
  });
}