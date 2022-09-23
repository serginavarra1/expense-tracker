const { Router } = require('express');
const { renderExpenses } = require('./../controllers/expenses.controllers.js');
const router = Router();

router.get('/expenses', renderExpenses);

router.get('/expenses/:name', (req, res) => {
    const { name } = req.params;
    res.render('list', {name: name});
})

module.exports = router;