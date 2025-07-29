const express= require('express');
const router = express.Router();

const routeController = require('../controller/routeController');

router.post('/', routeController.processData);

module.exports = router;