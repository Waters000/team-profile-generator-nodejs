const Employee = require("../lib/Employee");

const Engineer = require("../lib/Engineer");

escribe('isGithub', () => {
    it('should return true if equals text', () => {
      const str = 'waters000';
  
      const result = Engineer().isGithub(str);
  
      expect(result).toEqual(true);
    });
  });