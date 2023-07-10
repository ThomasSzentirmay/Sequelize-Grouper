const { DataTypes, Model } = require('sequelize');
const db = require('../db/connection.js');

// Create our Student Model and extend the model constructor
class Student extends Model {}

// Initialize our table using the init() method
Student.init({
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    }
}, {
    sequelize: db,
    modelName: 'student'
});