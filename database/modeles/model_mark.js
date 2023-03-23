const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const string_decoder = require("string_decoder");

// Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:', {
    define: {
        freezeTableName: true
    },
    async Normalize() {
        await Mark.sync({ alter: true }) // This checks what is the current state of the table in the database
        console.log("All modeles were synchronized successfully.");
        console.log(Mark === sequelize.models.Mark);
    }
    // This behavior be defined globally for the sequelize instance
}) // for sqlite3

// Valid Extending Model

class Mark extends Model {}

Mark.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    estimation: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    autor_id: {
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
    sequelize,
    modelName: 'Marks',

    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp'
});

