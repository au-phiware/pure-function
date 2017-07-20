import initializer from '../../src/validator/regex';

describe('regex', () => {
  describe('config parameter', () => {
    it('should throw a TypeError if config parameter is undefined', () => {
      expect(() => initializer()).toThrowError(TypeError);
    });

    it('should throw a TypeError if config parameter is null', () => {
      expect(() => initializer(null)).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if config parameter is not an object
    `, () => {
      expect(() => initializer([])).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if config parameter does not contain a expression
    `, () => {
      expect(() => initializer({})).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if config parameter.expression is undefined
    `, () => {
      expect(() => initializer({
        expression: undefined
      })).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if config parameter.expression is null
    `, () => {
      expect(() => initializer({
        expression: null
      })).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if config parameter.expression is not an object
    `, () => {
      expect(() => initializer({
        expression: false
      })).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if config parameter.expression is not a regular
      expression object
    `, () => {
      expect(() => initializer({
        expression: {}
      })).toThrowError(TypeError);
    });
  });

  describe('value', () => {
    let regex;

    beforeAll(() => {
      regex = initializer({
        expression: /[a-z]/
      });
    });

    it('should return false for undefined', () => {
      expect(regex()).toBe(false);
    });

    it('should return false for null', () => {
      expect(regex(null)).toBe(false);
    });

    it('should return false for "1"', () => {
      expect(regex('1')).toBe(false);
    });

    it('should return true for "a"', () => {
      expect(regex('a')).toBe(true);
    });

    it('should return true for true', () => {
      expect(regex(true)).toBe(true);
    });
  });
});
