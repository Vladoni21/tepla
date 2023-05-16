const {DataTypes, Model, Op} = require('sequelize');

import sequelize from "../sequelize.js"

export default sequelize.define('Mark', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    estimation: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    author_id: {
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
    createdAt: true,
    timestamps: true,
    updatedAt: 'updateTimestamp'
});
