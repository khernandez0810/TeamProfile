const Employee = require("./Employee");



class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
 getSchool(){
    return this.github
 }

 getRole(){
    return "Intern"
 }

};

module.exports = Intern