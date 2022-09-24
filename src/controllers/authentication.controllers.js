const bcrypt = require('bcrypt');
const pool = require('./../database');

const getLogin = (req, res) => {
    res.render('login');
}

const postLogin = (req, res) => {
    console.log('');
}

const getRegister = (req, res) => {
    res.render('register');
}

const postRegister = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await pool.query('INSERT INTO users (email, username, password) VALUES ($1, $2, $3)', [email, username, hashedPassword]);
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
    
}

module.exports = { getLogin, getRegister, postLogin, postRegister };