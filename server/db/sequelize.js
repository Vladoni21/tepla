const {Sequelize} = require('sequelize');

// Passing a connection URI
export const sequelize = new Sequelize('sqlite::memory:', {
    define: {
        freezeTableName: true
    },
    async Normalize(model) {
        await model.sync({alter: true}) // This checks what is the current state of the table in the database
        console.log("All models were synchronized successfully.");
        console.log(model === sequelize.models.model);
    }
    // This behavior be defined globally for the sequelize instance
})