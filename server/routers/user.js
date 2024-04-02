const router = require('express').Router()
const { checkCode } = require('../controllers/user')




router.post('/login', checkCode)


module.exports = router