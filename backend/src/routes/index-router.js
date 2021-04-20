//Criar a primeira rota
const express = require('express');
const router = express.Router();
const index = require('../controllers/index-controller');

router.get('/', index.get);

module.exports = router;