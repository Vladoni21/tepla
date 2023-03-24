import {Course} from "./Course";

const {DataTypes, Model, Op} = require('sequelize');


import {sequelize} from "/server/db/sequelize.js"

// Valid Extending Model

export class User extends Model {
    // id  - this field will shadow sequelize's getter & setter. It should be removed.
    // declare id: number; - just not working right
    // created_at  - This way, the current date/time will be used to populate this column (at the moment of insertion)
    getFullInfo() {
        return [this.username, this.email, this.mode].join(' ');
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mode: {
        type: DataTypes.CHAR(1),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Users',

    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp'
});

module.exports = User