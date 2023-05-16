const {DataTypes, Model, Op} = require('sequelize');

import sequelize from "../sequelize.js"

export default sequelize.define({
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

    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
});
