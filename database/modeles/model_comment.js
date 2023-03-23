const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const string_decoder = require("string_decoder");

// Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:', {
    define: {
        freezeTableName: true
    },
    async Normalize() {
        await Comment.sync({ alter: true }) // This checks what is the current state of the table in the database
        console.log("All modeles were synchronized successfully.");
        console.log(Comment === sequelize.models.Comment);
    }
    // This behavior be defined globally for the sequelize instance
}) // for sqlite3

// Valid Extending Model

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    filling: {
        type: DataTypes.TEXT,
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
    modelName: 'Comments',

    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp'
});

