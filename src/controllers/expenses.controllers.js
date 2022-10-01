const pool = require('./../database');

const getExpenses = async (req, res) => {
    const user = await req.user;
    const totalExpense = await pool.query('SELECT category, SUM(amount) FROM expenses WHERE u_id = $1 GROUP BY category', [user.u_id]);
    res.render('expenses', { username: user.username, totalExpense: totalExpense.rows });
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
    const user = await req.user;
    const { listcategory } = req.params;
    const expenseList = await pool.query('SELECT * FROM expenses WHERE u_id = $1 and category = $2', [user.u_id, listcategory]);
    res.render('list', {username: user.username, listName: listcategory, list: expenseList.rows});
}

module.exports = { getExpenses, getExpenseList, getAdd, postAdd };