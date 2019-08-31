var app = require('./app');
require('./controllers/product');
require('./controllers/user');
require('./middlewares/auth');
require('./middlewares/passport-local');
// require('./middlewares/passport-facebook');
const Sequelize = require('sequelize');

const port = process.env.PORT || 8000;

app.appConst.app.listen(port, ()=> {
    console.log('App Listening on port 8000 !');
})


// const sequelize = new Sequelize('codeforgeek', 'postgres', 'shahid', {
//   host: 'localhost',
//   dialect: 'postgres',
//   pool: {
//     max: 9,
//     min: 0,
//     idle: 10000
//   }
// });

// sequelize.authenticate().then(() => {
//   console.log("Success!");
// }).catch((err) => {
//   console.log(err);
// });