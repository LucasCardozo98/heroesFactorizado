const express = require('express')
const router = express.Router()
const heroesController = require('../controllers/heroesControllers')

router.get('/', heroesController.heroes)
router.get('/detalle/:id',heroesController.idHeroes)
module.exports = router