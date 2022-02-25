

// requires employee Class

const Employee = require("./Employee")

class Manager extends Employee {
  constructor (name, employeeId, email, position, officeNumber) {
    super(name, employeeId, email, position)
    this.officeNumber = officeNumber;
  }
}


///export to program
module.exports = Manager;