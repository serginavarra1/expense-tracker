const { Router } = require('express');
const { getExpenses, getExpenseList, getAdd, postAdd } = require('./../controllers/expenses.controllers.js');
const router = Router();

router.get('/expenses', getExpenses);

router.get('/expenses/add', getAdd);

router.post('/expenses/add', postAdd);

router.get('/expenses/:name', getExpenseList);

module.exports = router;