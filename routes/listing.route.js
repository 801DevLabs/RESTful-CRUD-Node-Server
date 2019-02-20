const express = require('express')
const router = express.Router()

const listing_controller = require('../controllers/listing.controller')

router.get('/test', listing_controller.test)
router.get('/', listing_controller.view_all)
router.get('/city/:city', listing_controller.listing_city)
router.get('/state/:state', listing_controller.listing_state)

router.post('/create', listing_controller.listing_create)
router.put('/:id/update', listing_controller.listing_update)
router.delete('/:id/delete', listing_controller.listing_delete)

module.exports = router