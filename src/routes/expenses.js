const { Router } = require('express');
const { renderExpenses } = require('./../controllers/expenses.controllers.js');
const router = Router();

router.get('/expenses', renderExpenses);

module.exports = router;