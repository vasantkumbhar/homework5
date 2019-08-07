var appInstance = require("../app");
var {app,db, jwt} = appInstance.appConst;
console.log('auth js');

var dummyAuthReq = {
    "username": "user_1",
    "password": "pwd_1"
};

app.post("/api/auth", (req, res) => {
    let loginReq = req.body;

    db.usersCredential.find(user => user.username)
    db.usersCredential.some(user => {
        if(user.username === loginReq.username && user.password === loginReq.password){
            // customResponse('User is exist!', user, res);
            const users = db.users.find(masterUser => masterUser.id === user.id);
            console.log('User is exist!: ', users);
            var token = jwt.sign({username: user.id}, 'secret', { expiresIn: '1h' })
            return res.status(200).send({
                message: 'User is exist!',
                data: users,
                toekn: token
            });
        }
        else if(user.username !== loginReq.username && user.password !== loginReq.password){
            // customResponse('User does not exist!', {}, res);
            console.log('User does not exist!');
            return res.status(404).send({
                message: 'User does not exist!',
                data: {}
            });
        }
        else{
            // customResponse('Please check credentials!', {}, res);
            console.log('Please check credentials!')
            return res.status(404).send({
                message: 'Please check credentials!',
                data: {}
            });
         }
    })
});