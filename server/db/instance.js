import { Comment } from '/server/db/models/Comment'
import { Course } from '/server/db/models/Course'
import { Mark }from '/server/db/models/Mark'
import { User } from '/server/db/models/User'
import { Completion } from '/server/db/models/Completion'
// Как это автоматизировать like COGS в python?

// Определяем автора курса (Человек может быть автором нескольки курсов)
Course.hasOne(User)
User.belongsTo(Course)

// Создаём промежуточную таблицу для записей прохождений курсов
// Потом я расширю подгрузку прохождений
Course.belongsToMany(User, {through: Completion})
User.belongsToMany(Course, {through: Completion})

// У каждого курса есть коментарии, а каждый коментарий относится
// к одному курсу
Course.hasMany(Comment)
Comment.belongsTo(Course)

// У каждого курса есть отметки по пятибальной(шести xD) шкале,
//  а каждая отметка относится к одному курсу
Course.hasMany(Mark)
Mark.belongsTo(Course)