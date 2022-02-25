
// requires Employee since intern is type of employee


const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, employeeId, email, position, school) {
        super (name, employeeId, email, position,)
        this.school = school;

    }
}


///export module
module.exports = Intern;