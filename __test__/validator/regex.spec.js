import regex from '../../src/validator/regex';

describe('regex', () => {
  describe('initializer', () => {
    it('should throw a TypeError if expression parameter is undefined', () => {
      expect(() => regex()).toThrowError(TypeError);
    });

    it('should throw a TypeError if expression parameter is null', () => {
      expect(() => regex(null)).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if expression parameter is not an object
    `, () => {
      expect(() => regex([])).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if expression does not contain
      the property expression
    `, () => {
      expect(() => regex({})).toThrowError(TypeError);
    });
  });

  describe('value', () => {
    let validate;

    beforeAll(() => {
      validate = regex(/[a-z]/);
    });

    it('should return false for undefined', () => {
      expect(validate()).toBe(false);
    });

    it('should return false for null', () => {
      expect(validate(null)).toBe(false);
    });

    it('should return false for "1"', () => {
      expect(validate('1')).toBe(false);
    });

    it('should return true for "a"', () => {
      expect(validate('a')).toBe(true);
    });

    it('should return true for true', () => {
      expect(validate(true)).toBe(true);
    });
  });
});
