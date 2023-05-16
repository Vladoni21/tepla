const {DataTypes, Model, Op} = require('sequelize');

import sequelize from "../sequelize"

export default sequelize.define('Completion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    // потом будет что-то новое
}, {
    createdAt: true,
    timestamps: true,
    updatedAt: 'updateTimestamp'
});
