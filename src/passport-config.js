const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')



const initialize = (passport, getUserByEmail, getUserById) => {
    const authenticateUser = async (email, password, done) => {
        const user = await getUserByEmail(email);
        if (!user) {
            return done(null, false, { message: 'No user with that email'});
        }
        try {
            if (await bcrypt.compare(password, user.password)){
                return done(null, user)
            } else {
                return done(null, false, { message: 'incorrect password' });
            }
        } catch(e) {
            return done(e);
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'email'}, authenticateUser));

    passport.serializeUser((user, done) => {
        done(null, user.u_id);
    })

    passport.deserializeUser((id, done) => {
        done(null, getUserById(id));
    })
}

module.exports = { initialize };