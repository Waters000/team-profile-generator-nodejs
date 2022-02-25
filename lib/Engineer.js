

// Engineer is a type of Employee so it extends the employee Class

const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, employeeId, email, position, github){
        super (name, employeeId, email, position)
        this.github = github;
    }
}



/// exports
module.exports = Engineer;