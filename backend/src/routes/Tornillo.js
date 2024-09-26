const express = require('express');
const routerTornillo = express.Router();
const {getTornillos} = require('../controllers/getTornillo');
const {getTornilloById} = require('../controllers/getTornilloById');

routerTornillo.get('/', getTornillos);
routerTornillo.get('/:id', getTornilloById);

module.exports = routerTornillo;