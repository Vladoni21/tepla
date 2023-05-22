const {DataTypes, Model} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = function addUserTable(sequelize) {
    class User extends Model {
        async authenticate(password) {
            return await bcrypt.compare(password, this.password);
        }
    }

    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                this.setDataValue('password', bcrypt.hashSync(value, 10));
            }
        }
    }, {
        sequelize,
        tableName: 'users',
        createdAt: true,
        timestamps: true,
        updatedAt: 'updateTimestamp'
    });
};
