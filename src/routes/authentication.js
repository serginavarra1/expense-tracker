const { Router } = require('express');
const { renderLogin, renderRegister } = require('./../controllers/authentication.controllers')
const router = Router();

router.get('/login', renderLogin);

router.get('/register', renderRegister);

module.exports = router;