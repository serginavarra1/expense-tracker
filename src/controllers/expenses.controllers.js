const pool = require('./../database');

const getExpenses = async (req, res) => {
    const user = await req.user;
    res.render('expenses', { username: user.username });
}

const getAdd = async (req, res) => {
    const user = await req.user;
    res.render('add', { username: user.username });
}

const postAdd = async (req, res) => {
    const { category, comment, amount } = req.body;
    const user = await req.user;
    const newDate = new Date().toDateString();
    await pool.query('INSERT INTO expenses (u_id, date, category, comment, amount) VALUES ($1, $2, $3, $4, $5)', 
        [user.u_id, newDate, category, comment, amount]);
    res.redirect('/expenses');
}

const getExpenseList = async (req, res) => {
    const { name } = req.params;
    const user = await req.user;
    res.render('list', { name: name, username: user.username });
}

module.exports = { getExpenses, getExpenseList, getAdd, postAdd };