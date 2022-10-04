const express = require('express');
const path = require('path');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const pool = require('./database');
const { initialize } = require('./passport-config');

// Initializations
const app = express();
const PORT = process.env.PORT || 3000;
initialize(passport, 
    async (email) => {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return user.rows[0];
    },
    async (id) => {
        const user = await pool.query('SELECT * FROM users WHERE u_id = $1', [id]);
        return user.rows[0];
    }
);

// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use(require('./routes/expenses'));
app.use(require('./routes/api'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})