const pool = require('./../database');

const getUsers = async (req, res) => {
    const users = await pool.query('SELECT * FROM users');
    res.json(users.rows);
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await pool.query('SELECT * FROM users WHERE u_id = $1', [id]);
    res.json(user.rows);
}

const getExpenses = async (req, res) => {
    const expenses = await pool.query('SELECT * FROM expenses');
    res.json(expenses.rows);
}

const getExpensesByCategory = async (req, res) => {
    const { category } = req.params;
    const expenses = await pool.query('SELECT * FROM expenses WHERE category = $1', [category]);
    res.json(expenses.rows);
}

module.exports = { getUsers, getUserById, getExpenses, getExpensesByCategory }