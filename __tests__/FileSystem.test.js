const fs = require('fs').promises;
const { mkdirp } = require('../lib/FileSystem');

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve()),
  }
}));

describe('FileSystem functions', () => {

  describe('mkdirp function', () => {
    it('makes a directory and all parent directories', () => {
      expect(fs.mkdir).toHaveBeenCalledWith('/this/is/my/cool/path.js', 'utf8');
    });
     
  });
});


/*
describe('required fields', () => {
    beforeAll(() => {
      validator = new Validator('age', {
        type: Number,
        required: true
      });
    });

    it('returns the field', () => {
      const dog = {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      };

      expect(validator.validate(dog)).toEqual(5);
    });

    it('returns the field cast to type', () => {
      const dog = {
        name: 'spot',
        age: '5',
        weight: '20 lbs'
      };

      expect(validator.validate(dog)).toEqual(5);
    });

    it('returns the field', () => {
      const dog = {
        name: 'spot',
        weight: '20 lbs'
      };

      expect(() => validator.validate(dog)).toThrowErrorMatchingSnapshot();
    });
  });

  describe('optional fields', () => {
    beforeAll(() => {
      validator = new Validator('age', {
        type: Number
      });
    });

    it('returns the field', () => {
      const dog = {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      };

      expect(validator.validate(dog)).toEqual(5);
    });

    it('returns the field cast to type', () => {
      const dog = {
        name: 'spot',
        age: '5',
        weight: '20 lbs'
      };

      expect(validator.validate(dog)).toEqual(5);
    });

    it('returns the field', () => {
      const dog = {
        name: 'spot',
        weight: '20 lbs'
      };

      expect(validator.validate(dog)).toBeNull();
    });
  });*/
