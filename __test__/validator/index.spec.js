import initializer from '../../src/validator';

describe('validator', () => {
  describe('config parameter', () => {
    it('should return a function', () =>
      expect(typeof initializer({
        validate: (value) => true, message: 'message'
      })).toBe('function')
    );

    it('should throw a TypeError if config parameter is undefined', () =>
      expect(() => initializer(undefined)).toThrowError(TypeError)
    );

    it('should throw a TypeError if config parameter is null', () =>
      expect(() => initializer(null)).toThrowError(TypeError)
    );

    it('should throw a TypeError if config parameter is not an object', () =>
      expect(() => initializer('')).toThrowError(TypeError)
    );

    it(`
      should throw a TypeError if config parameter does not contain validate
    `, () =>
      expect(() => initializer({ message: 'test' })).toThrowError(TypeError)
    );

    it('should throw a TypeError if config.validate is undefined', () =>
      expect(() => initializer({
        validate: undefined, message: 'test'
      })).toThrowError(TypeError)
    );

    it('should throw a TypeError if config.validate is null', () =>
      expect(() => initializer({
         validate: null, message: 'test'
      })).toThrowError(TypeError)
    );

    it(`
      should throw a TypeError if config.validate parameter is not a function
    `, () =>
      expect(() => initializer({
         validate: {}, message: 'test'
      })).toThrowError(TypeError)
    );

    it(`
      should throw a TypeError if missing config parameter
      does not contain message
    `, () =>
      expect(() => initializer({ validate: (f) => f })).toThrowError(TypeError)
    );

    it('should throw a TypeError if config.message is undefined', () =>
      expect(() => initializer({
        validate: (f) => f, message: undefined
      })).toThrowError(TypeError)
    );

    it('should throw a TypeError if config.message is null', () =>
      expect(() => initializer({
         validate: (f) => f, message: null
      })).toThrowError(TypeError)
    );

    it('should throw a TypeError if config.message is not a string', () =>
      expect(() => initializer({
         validate: (f) => f, message: {}
      })).toThrowError(TypeError)
    );
  });

  describe('value', () => {
    const message = 'Test';
    const validate = initializer({ validate: (f) => f, message });

    describe('valid', () => {
      it('should return an object with valid true and message null', () => {
        expect(validate(true)).toMatchObject({
          valid: true,
          message: null
        });
      });
    });

    describe('invalid', () => {
      it('should return an object with valid false and message config.message',
      () => {
        expect(validate(false)).toMatchObject({
          valid: false,
          message
        });
      });
    });
  });
});
