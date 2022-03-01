

// requires employee Class

const Employee = require("./Employee")

class Manager extends Employee {
  constructor (name, employeeId, email, position, officeNumber) {
    super(name, employeeId, email, position)
    this.officeNumber = officeNumber;
  }
}


Manager.prototype.isOfficeNumber = function(str) {
  return (str)
}


///export to program
module.exports = Manager;