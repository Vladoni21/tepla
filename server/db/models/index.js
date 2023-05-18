exports.addCommentTable = require('./comment.model');
exports.addCourse = require('./course.model');
exports.addMarkTable = require('./marks.model');
exports.addUserTable = require('./user.model');
exports.addCompletionTable = require('./completion.model');


/*
import { Comment } from '/server/db/models/Comment'
import { Course } from '/server/db/models/Course'
import { Mark }from '/server/db/models/Mark'
import { User } from '/server/db/models/User'
import { Completion } from '/server/db/models/Completion'


module.exports = {
  Comment, Course, Mark, User, Completion
}
*/
//
// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require('../config/index.js');
// const db = {};
//
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
//
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });
//
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
//
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
//
// module.exports = db;