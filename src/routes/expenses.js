const { Router } = require('express');
const { getExpenses, getExpenseList } = require('./../controllers/expenses.controllers.js');
const router = Router();

router.get('/expenses', getExpenses);

router.get('/expenses/:name', getExpenseList)

module.exports = router;