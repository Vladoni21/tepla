import {Sequelize} from 'sequelize';

import config from './config';
import * as modelAdders from './models';
import addAssociations from './associations';

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
    },
);

for (const modelAdder of Object.values(modelAdders)) {
    modelAdder(db);
}
addAssociations(db);

export default db;
