const {Router} = require('express');
const router = Router();
const routerTornillo = require('./Tornillo');

router.use('/tornillo', routerTornillo);

module.exports = router;