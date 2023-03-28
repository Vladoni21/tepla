const {Sequelize} = require('sequelize');

// Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
export const sequelize = new Sequelize(
    'database', 'username', 'password', {
        host: 'localhost',
        dialect: 'postgres',
        define: {
            freezeTableName: true
        },
    },
); // This behavior be defined globally for the sequelize instance