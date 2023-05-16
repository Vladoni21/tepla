import {Sequelize} from "sequelize";
import config from "./config";

export default new Sequelize(
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
