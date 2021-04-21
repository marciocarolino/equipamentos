'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/registroRedes-controller');


router.get('/',controller.get);
router.get('/:nomeEquipamento',controller.getByNomeEquipamento);
router.post('/',controller.post);
router.put('/:nomeEquipamento',controller.put);
router.delete('/:nomeEquipamento',controller.delete);

module.exports = router;