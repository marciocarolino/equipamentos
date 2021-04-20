'use strict'

exports.get = (request, response) => {
  response.json({
    messagem: 'Primeira rota só para funcionar'
  });
};
