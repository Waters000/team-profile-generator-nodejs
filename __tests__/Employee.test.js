
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

//name,email,id,role validation


describe('Employee', () => {
    it('employee returns the info on the Employee oop constructor', () => {
        const employee = new Employee("Chris", "55", "Floridarealty001@gmail.com", "Manager")
        expect(employee.name).toEqual(expect.any(String))
        expect(employee.employeeid).toEqual(3)
        expect(employee.email).toEqual("Floridarealty001@gmail.com")
        expect(employee.position).toEqual("Manager")
    })

   
   

})