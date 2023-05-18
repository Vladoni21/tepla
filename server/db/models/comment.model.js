const DataTypes = require('sequelize').DataTypes;

module.exports = function addCommentTable(sequelize) {
    sequelize.define('comment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        filling: {
            type: DataTypes.TEXT,
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
};
