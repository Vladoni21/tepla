const Sequelize = require('sequelize').Sequelize;

const config = require('./config');
const modelAdders = require('./models');
const addAssociations = require('./associations');

const db = new Sequelize(
    config.host, config.username, config.password, {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        logging: true,
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

for (const modelAdder of Object.values(modelAdders)) {
    modelAdder(db);
}
addAssociations(db);

module.exports = db;
