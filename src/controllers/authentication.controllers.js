
const getLogin = (req, res) => {
    res.render('login');
}

const getRegister = (req, res) => {
    res.render('register');
}

module.exports = { getLogin, getRegister };