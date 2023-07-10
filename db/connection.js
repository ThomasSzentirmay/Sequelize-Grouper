const {Sequelize} = require('sequelize');

// Connecting to DB with Sequelize (Sequelize docs explains everything)
const sequelize = new Sequelize('student_app_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = Sequelize;