import initializer from '../../src/constraint/password';

describe('password', () => {
  describe('config parameter', () => {
    it('should return a function', () =>
      expect(typeof initializer({ minLength: 4 })).toBe('function')
    );

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
      should throw a TypeError if config parameter does not contain minLength
    `, () => {
      expect(() => initializer({})).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if config.minLength is undefined
    `, () => {
      expect(() => initializer({
        minLength: undefined
      })).toThrowError(TypeError);
    });

    it('should throw a TypeError if config.minLength is null', () => {
      expect(() => initializer({ minLength: null })).toThrowError(TypeError);
    });

    it('should throw a TypeError if config.minLength is not an integer', () => {
      expect(() => initializer({ minLength: '1' })).toThrowError(TypeError);
    });

    it('should throw a TypeError if config.minLength = 0', () => {
      expect(() => initializer({ minLength: 0 })).toThrowError(TypeError);
    });

    it('should throw a TypeError if config parameter.minLength < 0', () => {
      expect(() => initializer({ minLength: -1 })).toThrowError(TypeError);
    });

    it('should throw a TypeError if config.maxLength is not an integer', () => {
      expect(() => initializer({
        minLength: 1, maxLength: '1'
      })).toThrowError(TypeError);
    });

    it('should throw a TypeError if config.minLength > config.maxLength',
    () => {
      expect(() => initializer({
        minLength: 2, maxLength: 1
      })).toThrowError(SyntaxError);
    });
  });

  describe('value', () => {
    let password;
    describe('valid', () => {
      it('should return true for config.minLength: 4', () => {
        password = initializer({ minLength: 4 });
        expect(password('aA1@123456')).toBe(true);
      });

      it('should return true for config.minLength: 4, config.maxLength: 4',
      () => {
        password = initializer({ minLength: 4, maxLength: 4 });
        expect(password('aA1@')).toBe(true);
      });

      it('should return true for config.minLength: 4, config.maxLength: 10',
      () => {
        password = initializer({ minLength: 4, maxLength: 10 });
        expect(password('aA1@123456')).toBe(true);
      });
    });

    describe('invalid', () => {
      it('should return false for config.minLength: 5', () => {
        password = initializer({ minLength: 5 });
        expect(password('aA1@')).toBe(false);
      });

      it('should return false for config.minLength: 4, config.maxLength: 10',
      () => {
        password = initializer({ minLength: 4, maxLength: 5 });
        expect(password('aA1@123456')).toBe(true);
      });
    });
  });
});
