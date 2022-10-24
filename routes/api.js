const express = require('express')
const router = express.Router()
const apiController = require('../controllers/api')

router.get('/', apiController.getApi)

router.get('/random', apiController.getApiRandom)

router.get('/government', apiController.getGovernment)

router.get('/government/random', apiController.getGovernmentRandom)

router.get('/history', apiController.getHistory)

router.get('/history/random', apiController.getHistoryRandom)

router.get('/civics', apiController.getCivics)

router.get('/civics/random', apiController.getCivicsRandom)

module.exports = router