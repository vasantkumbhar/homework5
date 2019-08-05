var appInstance = require("../app");
var {app,db} = appInstance.appConst;

// get all users
app.get('/api/users', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Users retrieved successfully',
        data: db.users
    })
});