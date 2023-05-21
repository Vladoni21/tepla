const DataTypes = require('sequelize').DataTypes;

module.exports = function addCourseTable(sequelize) {
    sequelize.define('Course', {
        title: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        }
    }, {
        tableName: 'courses',
        createdAt: true,
        timestamps: true,
        updatedAt: 'updateTimestamp'
    });
};
