
const getExpenses = async (req, res) => {
    const user = await req.user;
    res.render('expenses', { username: user.username });
}
const getExpenseList = async (req, res) => {
    const { name } = req.params;
    const user = await req.user;
    res.render('list', {name: name, user: username.name});
}

module.exports = { getExpenses, getExpenseList };