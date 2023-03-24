const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const string_decoder = require("string_decoder");

// Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:', {
    define: {
        freezeTableName: true
    },
    async Normalize(model) {
        await model.sync({ alter: true }) // This checks what is the current state of the table in the database
        console.log("All models were synchronized successfully.");
        console.log(model === sequelize.models.model);
    }
    // This behavior be defined globally for the sequelize instance
}) // for sqlite3

// Valid Extending Model

export class Course extends Model {}

Course.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    autor_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title_name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    subject: {
        type: DataTypes.CHAR(2),
        allowNull: false
    },
    order: {
        type: DataTypes.CHAR(600),
        allowNull: true
    },
    lvl: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        default: 0
    }
}, {
    sequelize,
    modelName: 'Courses',

    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp'
});

