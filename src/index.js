const express = require('express');
const path = require('path');
const passport = require('passport');

require('./helpers/passport-config');

// Initializations
const app = express();
const PORT = process.env.PORT || 3000;

// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use(require('./routes/expenses'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})