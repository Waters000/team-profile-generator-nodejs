const Employee = require("../lib/Employee");

const Intern = require("../lib/Intern");


describe('isSchool', () => {
    it('should return true if equals text', () => {
      const str = 'FSU';
  
      const result = Intern().isSchool(str);
  
      expect(result).toEqual(true);
    });
  });