const db = require('./models');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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
