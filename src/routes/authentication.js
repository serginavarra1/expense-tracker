const { Router } = require('express');
const passport = require('passport');
const { getLogin, getRegister, postRegister } = require('./../controllers/authentication.controllers')
const router = Router();

router.get('/login', getLogin);

router.post('/login', passport.authenticate('local', {
    successRedirect: '/expenses',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/register', getRegister);

router.post('/register', postRegister);

module.exports = router;