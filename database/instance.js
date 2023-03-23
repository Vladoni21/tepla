import * as Model_comment from '/database/modeles/model_comment'
import * as Model_course from '/database/modeles/model_course'
import * as Model_mark from '/database/modeles/model_mark'
import * as Model_user from '/database/modeles/model_user'

new Model_comment.Comment()


// Courses.hasOne(Users)

// Courses.hasMany(Comments)
// Comments.belongsTo(Courses)

// Courses.hasMany(Marks)
// Marks.belongsTo(Courses)