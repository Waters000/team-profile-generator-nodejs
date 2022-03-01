
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

//name,email,id,role validation


describe('isName', () => {
  it('should return true if a string', () => {
    const str = 'racecar';

    const result = Employee().isName(str);

    expect(result).toEqual(true);
  });
});

describe('isEmployeeid', () => {
  it('should return true if an integer', () => {
    const str = '80';

    const result = Employee().isEmployeeid(str);

    expect(result).toEqual(true);
  });
});

describe('isEmail', () => {
  it('should return true if an email', () => {
    const str = 'floridarealty001@gmail.com';

    const result = Employee().isEmail(str);

    expect(result).toEqual(true);
  });
});

describe('isPosition', () => {
  it('should return true if equals Manager, Intern or Engineer', () => {
    const str = 'Manager';

    const result = Employee().isPosition(str);

    expect(result).toEqual(true);
  });
});
