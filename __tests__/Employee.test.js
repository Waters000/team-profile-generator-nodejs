
const { expect } = require('jest');
const Employee = require('../lib/Employee.js');

jest.mock('..')


test("creates an employee name", () => {
    const employeeName = new Employee("chris");
    expect(employeeName.name).toEqual("chris")
})