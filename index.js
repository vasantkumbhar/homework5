var app = require('./app');
require('./controllers/product');
require('./controllers/user');
require('./middlewares/auth');

const port = process.env.PORT || 8000;

app.appConst.app.listen(port, ()=> {
    console.log('App Listening on port 8000 !');
})