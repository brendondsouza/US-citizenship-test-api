const express = require('express')
const router = express.Router()
const questionsController = require('../controllers/questions')

router.get('/', questionsController.getApi)

router.get('/random', questionsController.getApiRandom)

router.get('/government', questionsController.getGovernment)

router.get('/government/random', questionsController.getGovernmentRandom)

router.get('/history', questionsController.getHistory)

router.get('/history/random', questionsController.getHistoryRandom)

router.get('/civics', questionsController.getCivics)

router.get('/civics/random', questionsController.getCivicsRandom)

module.exports = router