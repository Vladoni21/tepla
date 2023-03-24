import { Comment } from '/server/db/modeles/Comment'
import { Course } from '/server/db/modeles/Course'
import { Mark }from '/server/db/modeles/Mark'
import { User } from '/server/db/modeles/User'
import { Completion } from '/server/db/modeles/Completion'
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