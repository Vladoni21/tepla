const DataTypes = require('sequelize').DataTypes;

module.exports = function addCompletionTable(sequelize) {
    sequelize.define('Completion', {
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        courseId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            references: {
                model: 'courses',
                key: 'id'
            }
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        tableName: 'completions',
        createdAt: true,
        timestamps: true,
        updatedAt: 'updateTimestamp'
    });
};
