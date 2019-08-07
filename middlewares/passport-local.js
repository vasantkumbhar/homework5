var appInstance = require("../app");
var {app,db, jwt} = appInstance.appConst;

const passport    = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    username: 'username',
    password: 'password'
},
function (username, password, done) {
    console.log('username: ', username);
    let user = db.usersCredential.find(masterUser => masterUser.username === username);
    console.log('user: ', user);
    if(user === undefined || user.password !== password){
        done(null, false, 'Bad username/password combination')
    }
    else{
        done(null, user);
    }
}
));

app.post("/api/authenticate", passport.authenticate("local", {session: false}), function(req, res){
var token = jwt.sign({username: req.user.id}, 'secret', { expiresIn: '1h' })
        return res.status(200).send({
            message: 'User is exist!',
            data: req.user,
            toekn: token
        });
});
