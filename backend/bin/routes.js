const express = require('express');
const app = express();
const {controller} = require('./Controller');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

/* -------------------------webmaster petitions------------------------- */
//create webmaster
app.post("/webmasters", function(req, res) {
    let { webmaster } = req.body;
    controller.setWebmaster(webmaster, res);
})

//show webmasters
app.get("/webmasters", (req, res) => {
    controller.getWebmasters(res);
})

//show webmasters for id
app.get("/webmasters/:id", (req, res) => {
    let { id } = req.params;
    controller.getWebmaster(id, res);
})


//update webmaster
app.put("/webmasters/:id", (req, res) => {
    let webmaster = req.body.webmaster;
    webmaster.id = req.params.id;
    controller.updateWebmaster(webmaster, res);
});

//delete webmaster
app.delete("/webmasters/:id", (req, res) => {
    let { id } = req.params;
    controller.deleteWebmaster(id, res);
})

/* /-------------------------webmaster petitions------------------------- */

/* -------------------------people petitions------------------------- */
//create people
app.post("/peoples", function(req, res) {
    let { people } = req.body;
    controller.setPeople(people, res);
})

//show people
app.get("/peoples", (req, res) => {
    controller.getPeoples(res);
})

//show people for id
app.get("/peoples/:id", (req, res) => {
    let { id } = req.params;
    controller.getPeople(id, res);
})

//update people
app.put("/peoples/:id", (req, res) => {
    let people = req.body.people;
    people.id = req.params.id;
    controller.updatePeople(people, res);
});

//delete people
app.delete("/peoples/:id", (req, res) => {
    let { id } = req.params;
    controller.deletePeople(id, res);
})

/* /-------------------------people petitions------------------------- */

/* -------------------------period petitions------------------------- */
//create period
app.post("/periods", function(req, res) {
    let { period } = req.body;
    controller.setPeriod(period, res);
})

//show periods
app.get("/periods", (req, res) => {
    controller.getPeriods(res);
})

//show period for id
app.get("/periods/:id", (req, res) => {
    let { id } = req.params;
    controller.getPeriod(id, res);
})

//update period
app.put("/periods/:id", (req, res) => {
    let period = req.body.period;
    period.id = req.params.id;
    controller.updatePeriod(period, res);
});

//delete period
app.delete("/periods/:id", (req, res) => {
    let { id } = req.params;
    controller.deletePeriod(id, res);
})

/* /-------------------------period petitions------------------------- */

/* -------------------------course petitions------------------------- */
//create 
app.post("/courses", function(req, res) {
    let { course } = req.body;
    controller.setCourse(course, res);
})


//show 
app.get("/courses", (req, res) => {
    controller.getCourses(res);
})

//show for id
app.get("/courses/:id", (req, res) => {
    let { id } = req.params;
    controller.getCourse(id, res);
})

//update 
app.put("/courses/:id", (req, res) => {
    let course = req.body.course;
    course.id = req.params.id;
    controller.updateCourse(course, res);
});

//delete 
app.delete("/courses/:id", (req, res) => {
    let { id } = req.params;
    controller.deleteCourse(id, res);
})

/* /-------------------------course petitions------------------------- */

/* -------------------------topic petitions------------------------- */
//create 
app.post("/topics", function(req, res) {
    let { topic } = req.body;
    controller.setTopic(topic, res);
})


//show 
app.get("/topics", (req, res) => {
    controller.getTopics(res);
})

//show for id
app.get("/topics/:id", (req, res) => {
    let { id } = req.params;
    controller.getTopic(id, res);
})

//update 
app.put("/topics/:id", (req, res) => {
    let topic = req.body.topic;
    topic.id = req.params.id;
    controller.updateTopic(topic, res);
});

//delete 
app.delete("/topics/:id", (req, res) => {
    let { id } = req.params;
    controller.deleteTopic(id, res);
})

/* /-------------------------topic petitions------------------------- */

/* -------------------------grade petitions------------------------- */
//create 
app.post("/grades", function(req, res) {
    let { grade } = req.body;
    controller.setGrade(grade, res);
})


//show 
app.get("/grades", (req, res) => {
    controller.getGrades(res);
})

//show for id
app.get("/grades/:id", (req, res) => {
    let { id } = req.params;
    controller.getGrade(id, res);
})

//update 
app.put("/grades/:id", (req, res) => {
    let grade = req.body.grade;
    grade.id = req.params.id;
    controller.updateGrade(grade, res);
});

//delete 
app.delete("/grades/:id", (req, res) => {
    let { id } = req.params;
    controller.deleteGrade(id, res);
})

/* /-------------------------grade petitions------------------------- */

/* -------------------------subtopic petitions------------------------- */
//create
app.post("/subtopics", function(req, res) {
    let { subtopic } = req.body;
    controller.setSubtopic(subtopic, res);
})


//show
app.get("/subtopics", (req, res) => {
    controller.getSubtopics(res);
})

//show for id
app.get("/subtopics/:id", (req, res) => {
    let { id } = req.params;
    controller.getSubtopic(id, res);
})

//update
app.put("/subtopics/:id", (req, res) => {
    let subtopic = req.body.subtopic;
    subtopic.id = req.params.id;
    controller.updateSubtopic(subtopic, res);
});

//delete
app.delete("/subtopics/:id", (req, res) => {
    let { id } = req.params;
    controller.deleteSubtopic(id, res);
})

/* /-------------------------subtopic petitions------------------------- */

/* -------------------------exercise petitions------------------------- */
//create
app.post("/exercises", function(req, res) {
    let { exercise } = req.body;
    controller.setExercise(exercise, res);
})


//show
app.get("/exercises", (req, res) => {
    controller.getExercises(res);
})

//show for id
app.get("/exercises/:id", (req, res) => {
    let { id } = req.params;
    controller.getExercise(id, res);
})

//update
app.put("/exercises/:id", (req, res) => {
    let exercise = req.body.exercise;
    exercise.id = req.params.id;
    controller.updateExercise(exercise, res);
});

//delete
app.delete("/exercises/:id", (req, res) => {
    let { id } = req.params;
    controller.deleteExercise(id, res);
})

/* /-------------------------exercise petitions------------------------- */

/* -------------------------directive petitions------------------------- */
//create
app.post("/directives", function(req, res) {
    let { directive } = req.body;
    controller.setDirective(directive, res);
})


//show
app.get("/directives", (req, res) => {
    controller.getDirectives(res);
})

//show for id
app.get("/directives/:id", (req, res) => {
    let { id } = req.params;
    controller.getDirective(id, res);
})

//update
app.put("/directives/:id", (req, res) => {
    let directive = req.body.directive;
    directive.id = req.params.id;
    controller.updateDirective(directive, res);
});

//delete
app.delete("/directives/:id", (req, res) => {
    let { id } = req.params;
    controller.deleteDirective(id, res);
})

/* /-------------------------directive petitions------------------------- */

/* -------------------------student petitions------------------------- */
//create
app.post("/students", function(req, res) {
    let { student } = req.body;
    controller.setStudent(student, res);
})


//show
app.get("/students", (req, res) => {
    controller.getStudents(res);
})

//show for id
app.get("/students/:id", (req, res) => {
    let { id } = req.params;
    controller.getStudent(id, res);
})

//update
app.put("/students/:id", (req, res) => {
    let student = req.body.student;
    student.id = req.params.id;
    controller.updateStudent(student, res);
});

//delete
app.delete("/students/:id", (req, res) => {
    let { id } = req.params;
    controller.deleteStudent(id, res);
})

/* /-------------------------student petitions------------------------- */

/* -------------------------teacher petitions------------------------- */
//create
app.post("/teachers", function(req, res) {
    let { teacher } = req.body;
    controller.setTeacher(teacher, res);
})


//show
app.get("/teachers", (req, res) => {
    controller.getTeachers(res);
})

//show for id
app.get("/teachers/:id", (req, res) => {
    let { id } = req.params;
    controller.getTeacher(id, res);
})

//update
app.put("/teachers/:id", (req, res) => {
    let teacher = req.body.teacher;
    teacher.id = req.params.id;
    controller.updateTeacher(teacher, res);
});

//delete
app.delete("/teachers/:id", (req, res) => {
    let { id } = req.params;
    controller.deleteTeacher(id, res);
})

/* /-------------------------teacher petitions------------------------- */
exports.app = app;