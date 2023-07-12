const { Model, DataTypes } = require('sequelize');
const db = require('../db/connection');

class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            is: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
        }
    }
}, {
    sequelize: db,
    modelName: 'user'
});

module.exports = User;