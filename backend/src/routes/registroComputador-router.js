'use strict'

const express = require('express')
const router = express.Router();
const controller = require('../controllers/registroComputador-controllers');


router.get('/',controller.get);
router.get('/:ipComputador',controller.getByIpComputador);
router.post('/',controller.post);
router.put('/:ipComputador',controller.put);
router.delete('/:ipComputador',controller.delete);

module.exports = router;