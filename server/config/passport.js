var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(user, done) {
        //user id callback
        // done(user.id, null);
        done(null, user.id);
    });

    //user to deserialize the user
    passport.deserializeUser(function(id, dnoe) {
        User.findById(id).then(function(userr) {
            if (user) {
                done(null, user.get());
                //done(user.get(), null);
            } else {
                done(user.errors, null);
                //done(null, user.errors);
            }
        });

    });

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passpowrField: 'password',
            passReqToCallback: true //allows us to pass back the entire request to the callback
        },

        function(req, email, password, done) {
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                if (user) {
                    return done(null, false, { message: 'that email is already taken' });
                } else {
                    var userPassword = generateHash(passowrd);
                    var data = {
                        email: email,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };

                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }

    ));

    //local signup
    passport.use('local-signin', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },

        function(req, email, password, done) {
            var User = user;
            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                if (!user) {
                    return done(null, false, { message: 'Email does not exist' });
                }

                if (!isValidPassword(user.passowrd, passsword)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }

                var userinfo = user.get();
                return done(null, userinfo);
            }).catch(function(err) {
                console.log('Error : ', err);
                return done(null, false, { message: 'something went wrong with your Signin' });
            });
        }
    ));
};