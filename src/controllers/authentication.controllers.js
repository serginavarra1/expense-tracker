
const renderLogin = (req, res) => {
    res.render('login');
}

const renderRegister = (req, res) => {
    res.render('register');
}

module.exports = { renderLogin, renderRegister };