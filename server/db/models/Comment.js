import Course from "./Course";

const {DataTypes, Model, Op} = require('sequelize');


import sequelize from "../sequelize.js"

// Valid Extending Model

export default class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    filling: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    autor_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    course_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
}, {
    sequelize,
    modelName: 'Comments',

    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp'
});
