'use strict'
const mongoose = require('mongoose');
const cadComputer = mongoose.model('cadastroComputador');

exports.get = ( request, response, next) =>{
    cadComputer.find({}).then(data => {
      response.status(200).send(data);
    }).catch(error =>{
      response.status(201).send({
        message:'Falha ao buscar os computadores',
        data: error
      })
    });
}


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
