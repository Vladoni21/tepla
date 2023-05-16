const {DataTypes, Model, Op} = require('sequelize');

import sequelize from "../sequelize"

export default sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mode: {
        type: DataTypes.CHAR(1),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Users',

    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
});
