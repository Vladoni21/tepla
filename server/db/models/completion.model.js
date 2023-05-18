const DataTypes = require('sequelize').DataTypes;

module.exports = function addCompletionTable(sequelize) {
    sequelize.define('completion', {
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
};
