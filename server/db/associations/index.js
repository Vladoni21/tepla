module.exports = function addAssociations(sequelize) {
    const {User, Course, Completion, Comment} = sequelize.models;

    // Определяем автора курса (Человек может быть автором нескольки курсов)
    User.hasMany(Course, {
        as: 'courses',
        foreignKey: 'userId'
    });
    Course.belongsTo(User, {
        as: 'author',
        foreignKey: 'userId'
    });

    // Создаём промежуточную таблицу для записей прохождений курсов
    // Потом я расширю подгрузку прохождений
    Course.belongsToMany(User, {
        through: {
            model: Completion,
            as: 'student',
            unique: true
        },
        foreignKey: 'courseId'
    });
    User.belongsToMany(Course, {
        through: {
            model: Completion,
            as: 'course',
            unique: true
        },
        foreignKey: 'userId'
    });

    // У каждого курса есть коментарии, а каждый коментарий относится
    // к одному курсу
    Course.hasMany(Comment, {
        as: 'comments',
        foreignKey: 'courseId'
    });
    Comment.belongsTo(Course, {
        as: 'course',
        foreignKey: 'courseId'
    });
    User.hasMany(Comment, {
        as: 'comments',
        foreignKey: 'userId'
    });
    Comment.belongsTo(User, {
        as: 'author',
        foreignKey: 'userId'
    });
};

// function addCommentBelongsToUserAssociation(sequelize) {
//     const { User, Comment } = sequelize.models;
//     Comment.belongsTo(User);
// }
//
// function addCourseHasOneUserAssociation(sequelize) {
//     const { User, Course } = sequelize.models;
//     Course.hasOne(User);
// }
//
// function addUserBelongsToCourseAssociation(sequelize) {
//     const { User, Course } = sequelize.models;
//     User.belongsTo(Course);
// }
//
// function addCourseBelongsToManyUserAssociation(sequelize) {
//     const { User, Course, Completion } = sequelize.models;
//     Course.belongsToMany(User, {through: Completion});
// }
//
// function addUserBelongsToManyCourseAssociation(sequelize) {
//     const { User, Course, Completion } = sequelize.models;
//     User.belongsToMany(Course, {through: Completion});
// }
//
// function addCourseHasManyCommentAssociation(sequelize) {
//     const { Course, Comment } = sequelize.models;
//     Course.hasMany(Comment);
// }
//
// function addCommentBelongsToCourseAssociation(sequelize) {
//     const { Course, Comment } = sequelize.models;
//     Comment.belongsTo(Course);
// }
//
// function addCourseHasManyMarkAssociation(sequelize) {
//     const { Course, Mark } = sequelize.models;
//     Course.hasMany(Mark);
// }
//
// function addMarkBelongsToCourseAssociation(sequelize) {
//     const { Course, Mark } = sequelize.models;
//     Mark.belongsTo(Course);
// }
