// create an Employee Class that holds all the employee basic info
// such as name, email, ID, role
const inquirer = require('inquirer');
const Manager = require("./Manager")
//const Intern = require("./Intern")
//const Engineer = require("./Engineer")
class Employee {
    constructor(name, employeeid, email, position) {
        this.name = name;
        this.employeeid = employeeid;
        this.email = email;
        this.position = position;
    }
   
}

Employee.prototype.isName = function(str) {
  return (str)
}
  
Employee.prototype.isEmployeeid = function(str) {
  return (str.isInteger())
}

Employee.prototype.isEmail = function(str) {
  return (str.contains("@"))
}

Employee.prototype.isPostion = function(str) {
  if (str === "Manager" || str === "Intern" || str === "Engineer")
  return true;
}

module.exports = Employee;

//module.exports = emailValidator;