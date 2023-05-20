const DataTypes = require('sequelize').DataTypes;

module.exports = function addUserTable(sequelize) {
    sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'users',
        createdAt: true,
        timestamps: true,
        updatedAt: 'updateTimestamp'
    });
};
