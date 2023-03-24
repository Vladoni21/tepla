const {DataTypes, Model, Op} = require('sequelize');


import {sequelize} from "/server/db/sequelize.js"

// Valid Extending Model

export class Course extends Model {}

Course.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    autor_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title_name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    subject: {
        type: DataTypes.CHAR(2),
        allowNull: false
    },
    order: {
        type: DataTypes.CHAR(600),
        allowNull: true
    },
    lvl: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        default: 0
    }
}, {
    sequelize,
    modelName: 'Courses',

    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp'
});

module.exports = Course