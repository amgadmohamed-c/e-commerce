let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let fs = require('fs');
let path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


server = app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
