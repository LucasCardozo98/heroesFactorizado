const express = require('express')
const router = express.Router()
const mainController = require("../controllers/mainController");


// Ruta Raíz / ➝ Home
router.get('/', mainController.index);

module.exports = router