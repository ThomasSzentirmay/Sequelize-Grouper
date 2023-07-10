const { DataTypes, Model } = require('sequelize');
const db = require('../db/connection.js');

// Create our Group Model and extend the model constructor
class Group extends Model {}

// Initialize our table using the init() method
Group.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2
        }
    },
}, {
    sequelize: db,
    modelName: 'group'
});

module.exports = Group;