
const getExpenses = (req, res) => {
    res.render('expenses');
}
const getExpenseList = (req, res) => {
    const { name } = req.params;
    res.render('list', {name: name});
}

module.exports = { getExpenses, getExpenseList };