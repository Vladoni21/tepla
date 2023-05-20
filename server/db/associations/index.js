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