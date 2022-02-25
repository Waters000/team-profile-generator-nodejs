

// create an Employee Class that holds all the employee basic info
// such as name, email, ID, role

class Employee {
    constructor (name, employeeId, email, position) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.position = position;
    }
}


module.exports = Employee