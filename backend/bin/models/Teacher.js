const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    courses: Array,
    people_id: {
    type: Schema.Types.ObjectId,
    ref: "Teacher"
  }
});

var Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
