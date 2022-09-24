const { Router } = require('express');
const { getLogin, getRegister, postLogin, postRegister } = require('./../controllers/authentication.controllers')
const router = Router();

router.get('/login', getLogin);

router.post('/login', postLogin);

router.get('/register', getRegister);

router.post('/register', postRegister);

module.exports = router;