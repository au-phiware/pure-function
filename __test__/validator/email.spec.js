import email from '../../src/validator/email';

describe('validate', () => {
  describe('invalid config object', () => {
    it(`
      should throw a TypeError if undefined is passed for the config object
    `, () => {
        expect(() => email()).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if null is passed for the config object
    `, () => {
        expect(() => email(null)).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if a non object is passed for the config object
    `, () => {
        expect(() => email([])).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if message is not
      a property of the config object
    `, () => {
        expect(() => email({})).toThrowError(TypeError);
    });

    it('should throw a TypeError if a message is undefined', () => {
        expect(() => email({
          message: undefined
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if message is null', () => {
        expect(() => email({
          message: null
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if message is ""', () => {
        expect(() => email({
          message: ''
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if message is " "', () => {
        expect(() => email({
          message: ' '
        })).toThrowError(TypeError);
    });
  });

  describe('execution', () => {
    const validationMessage = 'Value must match email format';
    const validate = email({message: validationMessage});

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

      describe('a', () => {
        it('should return an object', () => {
            expect(typeof validate('a')).toBe('object');
        });

        it('should return false for property valid', () => {
            expect(validate('a').valid).toBe(false);
        });

        it('should return message describing the validation error', () => {
            expect(validate('a').message).toBe(validationMessage);
        });
      });

      describe('a@a', () => {
        it('should return an object', () => {
            expect(typeof validate('a@a')).toBe('object');
        });

        it('should return false for property valid', () => {
            expect(validate('a@a').valid).toBe(false);
        });

        it('should return message describing the validation error', () => {
            expect(validate('a@a').message).toBe(validationMessage);
        });
      });
    });

    describe('valid values', () => {
      describe('test@test.com', () => {
        it('should return an object', () => {
            expect(typeof validate('test@test.com')).toBe('object');
        });

        it('should return true for property valid', () => {
            expect(validate('test@test.com').valid).toBe(true);
        });

        it('should return null for property message', () => {
            expect(validate('test@test.com').message).toBeNull();
        });
      });
    });
  });
});
