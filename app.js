const db = require('./models');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const errorhandle = require('./middlewares/errorhandle.middleware');
const jwtmiddleware = require('./middlewares/auth.middleware');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const authroute = require('./routes/auth.route');
const userroute = require('./routes/user.route');
const productroute = require('./routes/product.route');
const categoryroute = require('./routes/category.route');
const cartroute = require('./routes/cart.route');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/api/auth', authroute);


app.use(jwtmiddleware.verifyToken);
app.use('/api/cart' , cartroute);
app.use('/api/users' , userroute);
app.use('/api/products', productroute);
app.use('/api/category' , categoryroute);








app.use(errorhandle);
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});


db.sequelize.sync({ alter: true })
    .then(() => {
        console.log("DB Synced!");
    })
    .catch((err) => {
        console.log(err);
    });
