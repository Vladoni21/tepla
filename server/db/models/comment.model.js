const DataTypes = require('sequelize').DataTypes;

module.exports = function addCommentTable(sequelize) {
    sequelize.define('Comment', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'comments',
        createdAt: true,
        timestamps: true,
        updatedAt: 'updateTimestamp'
    });
};
