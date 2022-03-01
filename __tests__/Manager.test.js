const Employee = require("../lib/Employee");

const Manager = require("../lib/Manager");

describe('isOfficeNumber', () => {
    it('should return true if equals integer', () => {
      const str = '502';
  
      const result = Manager().isOfficeNumber(str);
  
      expect(result).toEqual(true);
    });
  });