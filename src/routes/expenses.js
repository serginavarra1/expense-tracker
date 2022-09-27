const { Router } = require('express');
const { getExpenses, getExpenseList, getAdd } = require('./../controllers/expenses.controllers.js');
const router = Router();

router.get('/expenses', getExpenses);

router.get('/expenses/add', getAdd);

router.get('/expenses/:name', getExpenseList);

module.exports = router;