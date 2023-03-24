import * as models from '/server/db/models/index'


// Определяем автора курса (Человек может быть автором нескольки курсов)
models.Course.hasOne(models.User)
models.User.belongsTo(models.Course)

// Создаём промежуточную таблицу для записей прохождений курсов
// Потом я расширю подгрузку прохождений
models.Course.belongsToMany(models.User, {through: models.Completion})
models.User.belongsToMany(models.Course, {through: models.Completion})

// У каждого курса есть коментарии, а каждый коментарий относится
// к одному курсу
models.Course.hasMany(models.Comment)
models.Comment.belongsTo(models.Course)

// У каждого курса есть отметки по пятибальной(шести xD) шкале,
//  а каждая отметка относится к одному курсу
models.Course.hasMany(models.Mark)
models.Mark.belongsTo(models.Course)