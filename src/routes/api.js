const { Router } = require('express');
const { getUsers, getUserById, getExpenses, getExpensesByCategory } = require('./../controllers/api.controllers');
const router = Router();

router.get('/api/users', getUsers);

router.get('/api/users/:id', getUserById);

router.get('/api/expenses', getExpenses);

router.get('/api/expenses/:category', getExpensesByCategory);

module.exports = router;