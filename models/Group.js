const { DataTypes, Model } = require('sequelize');
const db = require('../db/connection.js');
const Student = require('./Student');

// Create our Group Model and extend the model constructor
class Group extends Model {}

// Initialize our table using the init() method
Group.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Group name is already in use'
        },
        validate: {
            min: 2
        }
    },
}, {
    sequelize: db,
    modelName: 'group'
});

// 'Has many' situation so creating the link between them
Group.hasMany(Student);
Student.belongsTo(Group);

module.exports = Group;