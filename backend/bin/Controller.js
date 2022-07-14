const mongoose = require("mongoose");
const Webmaster = require("./models/Webmaster");
const People = require("./models/People");
const Period = require("./models/Period");
const Course = require("./models/Course");
const Grade = require("./models/Grade");
const Topic = require("./models/Topic");
const Subtopic = require("./models/Subtopic");
const Exercise = require("./models/Exercise");
const Directive = require("./models/Directive");


class Controller{

    constructor(){

        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect(
                /* "mongodb+srv://acorderofalco58:TEACHdev2021.@cluster0.3okjxa2.mongodb.net/trackapp?retryWrites=true&w=majority" */
                "mongodb://acorderofalco58:TEACHdev2021.@ac-wq3ku25-shard-00-00.3okjxa2.mongodb.net:27017,ac-wq3ku25-shard-00-01.3okjxa2.mongodb.net:27017,ac-wq3ku25-shard-00-02.3okjxa2.mongodb.net:27017/trackapp?ssl=true&replicaSet=atlas-twthjd-shard-0&authSource=admin&retryWrites=true&w=majority",
                {useNewUrlParser:true}
            );
            console.log('connected database');
        }catch(e){
            console.error(e);
        }
    }

/*------------------------------------CRUD WEBMASTER/*------------------------------------*/
    //CREATE
    setWebmaster(webmaster, res) {
        Webmaster.create(webmaster, function(err, newWebmaster) {
            if (err) throw err;

            res.send({status: 200, nU: newWebmaster});
        });
    }

    //READ
    getWebmasters(res){
        Webmaster.find({}, (err, webmasters)=>{

            if(err) throw err;

            res.send( webmasters );
        })
    }

    getWebmaster(id, res){

        Webmaster.find({_id : id}, (err, webmaster)=>{

            if(err) throw err;

            res.send( {Webmaster : webmaster} );
        })
    }
    //UPDATE
    updateWebmaster(webmaster, res) {
        let { id, user, password } = webmaster;
        Webmaster.updateOne(
            {_id: id},
            {$set: {user: user, password: password}}
            )
            .then(rawResponse => {
                res.send({ message: "Webmaster updated", raw: rawResponse })
            })
            .catch(err => {
                if(err) throw err;
            });
            ;
    }
    //DELETE
    deleteWebmaster(id, res){
        Webmaster.deleteOne({_id : id}, (err)=>{
            if(err) throw err;
            res.send( {message : "User has been deleted"} );
        })
    }
/*/------------------------------------CRUD WEBMASTER/*------------------------------------*/

/*------------------------------------CRUD PEOPLE------------------------------------*/
    //CREATE
    setPeople(people, res) {
        People.create(people, function(err, newPeople) {
            if (err) throw err;

            res.send({status: 200, nU: newPeople});
        });
    }

    //READ
    getPeoples(res){
        People.find({}, (err, peoples)=>{

            if(err) throw err;

            res.send( peoples );
        })
    }

    getPeople(id, res){

        People.find({_id : id}, (err, people)=>{

            if(err) throw err;

            res.send( {People : people} );
        })
    }

    //UPDATE
    updatePeople(people, res) {
        let { id, name, last_name, gender } = people;
        People.updateOne(
            {_id: id},
            {$set: {name: name, last_name: last_name, gender:gender}}
            )
            .then(rawResponse => {
                res.send({ message: "People updated", raw: rawResponse })
            })
            .catch(err => {
                if(err) throw err;
            });
            ;
    }

    //DELETE
    deletePeople(id, res){
        People.deleteOne({_id : id}, (err)=>{
            if(err) throw err;
            res.send( {message : "People has been deleted"} );
        })
    }
/*/------------------------------------CRUD PEOPLE------------------------------------*/

/*------------------------------------CRUD PERIOD------------------------------------*/
    //CREATE
    setPeriod(period, res) {
        Period.create(period, function(err, newPeriod) {
            if (err) throw err;

            res.send({status: 200, nU: newPeriod});
        });
    }

    //READ
    getPeriods(res){
        Period.find({}, (err, periods)=>{

            if(err) throw err;

            res.send( periods );
        })
    }

    getPeriod(id, res){

        Period.find({_id : id}, (err, period)=>{

            if(err) throw err;

            res.send( {Period : period} );
        })
    }

    //UPDATE
    updatePeriod(period, res) {
        let { id, number } = period;
        Period.updateOne(
            {_id: id},
            {$set: {number: number}}
            )
            .then(rawResponse => {
                res.send({ message: "Period updated", raw: rawResponse })
            })
            .catch(err => {
                if(err) throw err;
            });
            ;
    }

    //DELETE
    deletePeriod(id, res){
        Period.deleteOne({_id : id}, (err)=>{
            if(err) throw err;
            res.send( {message : "Period has been deleted"} );
        })
    }
/*/------------------------------------CRUD PERIOD/*------------------------------------*/

/*------------------------------------CRUD COURSE------------------------------------*/
    //CREATE
    setCourse(course, res) {
        Course.create(course, function(err, newCourse) {
            if (err) throw err;

            res.send({status: 200, nU: newCourse});
        });
    }


    //READ
    getCourses(res){
        Course.find({}, (err, courses)=>{

            if(err) throw err;

            res.send( courses );
        })
    }

    getCourse(id, res){

        Course.find({_id : id}, (err, course)=>{

            if(err) throw err;

            res.send( {Course : course} );
        })
    }

    //UPDATE
    updateCourse(course, res) {
        let { id, name } = course;
        Period.updateOne(
            {_id: id},
            {$set: {name: name}}
            )
            .then(rawResponse => {
                res.send({ message: "Course updated", raw: rawResponse })
            })
            .catch(err => {
                if(err) throw err;
            });
            ;
    }

    //DELETE
    deleteCourse(id, res){
        Course.deleteOne({_id : id}, (err)=>{
            if(err) throw err;
            res.send( {message : "Course has been deleted"} );
        })
    }
/*/------------------------------------CRUD COURSE/*------------------------------------*/

/*------------------------------------CRUD TOPIC------------------------------------*/
    //CREATE
    setTopic(topic, res) {
        Topic.create(topic, function(err, newTopic) {
            if (err) throw err;

            res.send({status: 200, nU: newTopic});
        });
    }


    //READ
    getTopics(res){
        Topic.find({}, (err, topics)=>{

            if(err) throw err;

            res.send( topics );
        })
    }

    getTopic(id, res){

        Topic.find({_id : id}, (err, topic)=>{

            if(err) throw err;

            res.send( {Topic : topic} );
        })
    }

    //UPDATE
    updateTopic(topic, res) {
        let { id, course_id } = topic;
        Topic.updateOne(
            {_id: id},
            {$set: {course_id: course_id}}
            )
            .then(rawResponse => {
                res.send({ message: "Topic updated", raw: rawResponse })
            })
            .catch(err => {
                if(err) throw err;
            });
            ;
    }

    //DELETE
    deleteTopic(id, res){
        Topic.deleteOne({_id : id}, (err)=>{
            if(err) throw err;
            res.send( {message : "Topic has been deleted"} );
        })
    }
/*/------------------------------------CRUD TOPIC/*------------------------------------*/

/*------------------------------------CRUD GRADE------------------------------------*/
    //CREATE
    setGrade(grade, res) {
        Grade.create(grade, function(err, newGrade) {
            if (err) throw err;

            res.send({status: 200, nU: newGrade});
        });
    }


    //READ
    getGrades(res){
        Grade.find({}, (err, grades)=>{

            if(err) throw err;

            res.send( grades );
        })
    }

    getGrade(id, res){

        Grade.find({_id : id}, (err, grade)=>{

            if(err) throw err;

            res.send( {Grade : grade} );
        })
    }

    //UPDATE
    updateGrade(grade, res) {
        let { id, nomenclature } = grade;
        Grade.updateOne(
            {_id: id},
            {$set: {nomenclature: nomenclature}}
            )
            .then(rawResponse => {
                res.send({ message: "Grade updated", raw: rawResponse })
            })
            .catch(err => {
                if(err) throw err;
            });
            ;
    }

    //DELETE
    deleteGrade(id, res){
        Grade.deleteOne({_id : id}, (err)=>{
            if(err) throw err;
            res.send( {message : "Grade has been deleted"} );
        })
    }
/*/------------------------------------CRUD GRADE/*------------------------------------*/

/*------------------------------------CRUD SUBTOPIC------------------------------------*/
    //CREATE
    setSubtopic(subtopic, res) {
        Subtopic.create(subtopic, function(err, newGrade) {
            if (err) throw err;

            res.send({status: 200, nU: newGrade});
        });
    }


    //READ
    getSubtopics(res){
        Subtopic.find({}, (err, subtopics)=>{

            if(err) throw err;

            res.send( subtopics );
        })
    }

    getSubtopic(id, res){

        Subtopic.find({_id : id}, (err, subtopic)=>{

            if(err) throw err;

            res.send( {Subtopic : subtopic} );
        })
    }

    //UPDATE
    updateSubtopic(subtopic, res) {
        let { id, title } = subtopic;
        Subtopic.updateOne(
            {_id: id},
            {$set: {title: title}}
            )
            .then(rawResponse => {
                res.send({ message: "Subtopic updated", raw: rawResponse })
            })
            .catch(err => {
                if(err) throw err;
            });
            ;
    }
    

    //DELETE
    deleteSubtopic(id, res){
        Subtopic.deleteOne({_id : id}, (err)=>{
            if(err) throw err;
            res.send( {message : "Subtopic has been deleted"} );
        })
    }
/*/------------------------------------CRUD SUBTOPIC/*------------------------------------*/

/*------------------------------------CRUD EXERCISE------------------------------------*/
    //CREATE
    setExercise(exercise, res) {
        Exercise.create(exercise, function(err, newGrade) {
            if (err) throw err;

            res.send({status: 200, nU: newGrade});
        });
    }


    //READ
    getExercises(res){
        Exercise.find({}, (err, exercises)=>{

            if(err) throw err;

            res.send( exercises );
        })
    }

    getExercise(id, res){

        Exercise.find({_id : id}, (err, exercise)=>{

            if(err) throw err;

            res.send( {Exercise : exercise} );
        })
    }

    //UPDATE
    updateExercise(exercise, res) {
        let { id, title } = exercise;
        Exercise.updateOne(
            {_id: id},
            {$set: {title: title}}
            )
            .then(rawResponse => {
                res.send({ message: "Exercise updated", raw: rawResponse })
            })
            .catch(err => {
                if(err) throw err;
            });
            ;
    }
    

    //DELETE
    deleteExercise(id, res){
        Exercise.deleteOne({_id : id}, (err)=>{
            if(err) throw err;
            res.send( {message : "Exercise has been deleted"} );
        })
    }
/*/------------------------------------CRUD EXERCISE/*------------------------------------*/

/*------------------------------------CRUD DIRECTIVE------------------------------------*/
    //CREATE
    setDirective(directive, res) {
        Directive.create(directive, function(err, newDirective) {
            if (err) throw err;

            res.send({status: 200, nU: newDirective});
        });
    }


    //READ
    getDirectives(res){
        Directive.find({}, (err, directives)=>{

            if(err) throw err;

            res.send( directives );
        })
    }

    getDirective(id, res){

        Directive.find({_id : id}, (err, directive)=>{

            if(err) throw err;

            res.send( {Directive : directive} );
        })
    }

    //UPDATE
    updateDirective(directive, res) {
        let { id, people_id } = directive;
        Directive.updateOne(
            {_id: id},
            {$set: {people_id: people_id}}
            )
            .then(rawResponse => {
                res.send({ message: "Directive updated", raw: rawResponse })
            })
            .catch(err => {
                if(err) throw err;
            });
            ;
    }
    

    //DELETE
    deleteDirective(id, res){
        Directive.deleteOne({_id : id}, (err)=>{
            if(err) throw err;
            res.send( {message : "Directive has been deleted"} );
        })
    }
/*/------------------------------------CRUD DIRECTIVE/*------------------------------------*/
}

exports.controller = new Controller;