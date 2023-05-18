import DataTypes from 'sequelize';

export default function addCompletionTable(sequelize) {
    sequelize.define('Completion', {
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
