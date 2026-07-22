const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('postgres://amgad:amgad@localhost:5432/tccd' );
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});
module.exports = sequelize;
;
