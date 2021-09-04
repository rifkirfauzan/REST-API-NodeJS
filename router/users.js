//panggil terlebih dahulu module express
const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/user')

//app route berfungsi sebagai route group
router.route('/users')
.get(usercontroller.index)
.post(usercontroller.store)

router.put('/users/:id', usercontroller.update )
router.delete('/users/:userId', usercontroller.delete)

module.exports = router
//