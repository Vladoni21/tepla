import Course from "./Course";

const {DataTypes, Model, Op} = require('sequelize');


import {sequelize} from "/server/db/sequelize.js"

// Valid Extending Model

export default class Completion extends Model {}

Completion.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    // потом будет что-то новое
}, {
    sequelize,
    modelName: 'Completions',

    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp'
});
