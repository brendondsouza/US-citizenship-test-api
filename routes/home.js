const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) 

router.get('/all', homeController.getApi)

router.get('/all/random', homeController.getApiRandom)

router.get('/government', homeController.getGovernment)

router.get('/government/random', homeController.getGovernmentRandom)

router.get('/history', homeController.getHistory)

router.get('/history/random', homeController.getHistoryRandom)

router.get('/civics', homeController.getCivics)

router.get('/civics/random', homeController.getCivicsRandom)

module.exports = router