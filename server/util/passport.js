/*
    config passport local
    
*/
//load all the things we need
const passport = require('passport');
const sequelizeStrategy = require('passport-local-sequelize').Strategy;
const localStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy; // 이 부분 추가
module.exports = () => {
    passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
        done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
    });

    passport.deserializeUser((user, done) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
        done(null, user); // 여기의 user가 req.user가 됨
    });

    passport.use(new LocalStrategy({ // local 전략을 세움
        usernameField: 'id',
        passwordField: 'pw',
        session: true, // 세션에 저장 여부
        passReqToCallback: false,
    }, (id, password, done) => {
        Users.findOne({ id: id }, (findError, user) => {
            if (findError) return done(findError); // 서버 에러 처리
            if (!user) return done(null, false, { message: '존재하지 않는 아이디입니다' }); // 임의 에러 처리
            return user.comparePassword(password, (passError, isMatch) => {
                if (isMatch) {
                    return done(null, user); // 검증 성공
                }
                return done(null, false, { message: '비밀번호가 틀렸습니다' }); // 임의 에러 처리
            });
        });
    }));
    passport.use(new FacebookStrategy({
        clientID: '페이스북 클라이언트 아이디',
        clientSecret: '페이스북 클라이언트 시크릿',
        callbackURL: '홈페이지주소/auth/facebook/callback',
        passReqToCallback: true,
    }, (req, accessToken, refreshToken, profile, done) => {
        User.findOne({ id: profile.id }, (err, user) => {
            if (user) {
                return done(err, user);
            } // 회원 정보가 있으면 로그인
            const newUser = new User({ // 없으면 회원 생성
                id: profile.id
            });
            newUser.save((user) => {
                return done(null, user); // 새로운 회원 생성 후 로그인
            });
        });
    }));
};