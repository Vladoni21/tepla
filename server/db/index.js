const Sequelize = require('sequelize').Sequelize;
const pg = require('pg');

const config = require('./config');
const modelAdders = require('./models');
const addAssociations = require('./associations');

const db = new Sequelize(
    config.database, config.username, config.password, {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        dialectModule: pg,
        logging: console.log,
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            freezeTableName: true
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
            acquire: 5000,
            evict: 1000
        },
        timezone: '+03:00',
    },
);

// db.authenticate().then(() => {
//     console.log('Connection successful.');
// }, () => {
//     console.log('Connection failed.');
// });

for (const modelAdder of Object.values(modelAdders)) {
    modelAdder(db);
}
addAssociations(db);

module.exports = db;
