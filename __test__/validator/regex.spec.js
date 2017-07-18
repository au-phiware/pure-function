import regex from '../../src/validator/regex';

describe('validate', () => {
  describe('invalid config object', () => {
    it(`
      should throw a TypeError if undefined is passed for the config object
    `, () => {
        expect(() => regex()).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if null is passed for the config object
    `, () => {
        expect(() => regex(null)).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if a non object is passed for the config object
    `, () => {
        expect(() => regex([])).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if a message is not
      a property of the config object
    `, () => {
        expect(() => regex({})).toThrowError(TypeError);
    });

    it('should throw a TypeError if message is undefined', () => {
        expect(() => regex({
          message: undefined,
          expression: 'expression'
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if message is null', () => {
        expect(() => regex({
          message: null,
          expression: 'expression'
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if message is ""', () => {
        expect(() => regex({
          message: '',
          expression: 'expression'
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if message is " "', () => {
        expect(() => regex({
          message: ' ',
          expression: 'expression'
        })).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if expression is not
      a property of the config object
    `, () => {
        expect(() => regex({message: 'message'})).toThrowError(TypeError);
    });

    it('should throw a TypeError if expression is undefined', () => {
        expect(() => regex({
          message: 'message',
          expression: undefined
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if expression is null', () => {
        expect(() => regex({
          message: 'message',
          expression: null
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if expression is ""', () => {
        expect(() => regex({
          message: 'message',
          expression: ''
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if expression is " "', () => {
        expect(() => regex({
          message: 'message',
          expression: ' '
        })).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if expression is not a regular expression object
    `, () => {
        expect(() => regex({
          message: 'message',
          expression: {}
        })).toThrowError(TypeError);
    });
  });

  describe('execution', () => {
    const validationMessage = 'Value must match regular expression';
    const validate = regex({message: validationMessage, expression: /[a-z]/});

    describe('invalid values', () => {
      describe('undefined', () => {
        it('should return an object', () => {
            expect(typeof validate()).toBe('object');
        });

        it('should return false for property valid', () => {
            expect(validate().valid).toBe(false);
        });

        it('should return message describing the validation error', () => {
            expect(validate().message).toBe(validationMessage);
        });
      });

      describe('null', () => {
        it('should return an object', () => {
            expect(typeof validate(null)).toBe('object');
        });

        it('should return false for property valid', () => {
            expect(validate(null).valid).toBe(false);
        });

        it('should return message describing the validation error', () => {
            expect(validate(null).message).toBe(validationMessage);
        });
      });

      describe('1', () => {
        it('should return an object', () => {
            expect(typeof validate('1')).toBe('object');
        });

        it('should return false for property valid', () => {
            expect(validate('1').valid).toBe(false);
        });

        it('should return message describing the validation error', () => {
            expect(validate('1').message).toBe(validationMessage);
        });
      });
    });

    describe('valid values', () => {
      describe('a', () => {
        it('should return an object', () => {
            expect(typeof validate('a')).toBe('object');
        });

        it('should return true for property valid', () => {
            expect(validate('a').valid).toBe(true);
        });

        it('should return null for property message', () => {
            expect(validate('a').message).toBeNull();
        });
      });
    });
  });
});
