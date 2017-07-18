import required from '../../src/validator/required';

describe('validate', () => {
  describe('invalid config object', () => {
    it(`
      should throw a TypeError if undefined is passed for the config object
    `, () => {
        expect(() => required()).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if null is passed for the config object
    `, () => {
        expect(() => required(null)).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if a non object is passed for the config object
    `, () => {
        expect(() => required([])).toThrowError(TypeError);
    });

    it(`
      should throw a TypeError if message is not
      a property of the config object
    `, () => {
        expect(() => required({})).toThrowError(TypeError);
    });

    it('should throw a TypeError if message is undefined', () => {
        expect(() => required({
          message: undefined
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if message is null', () => {
        expect(() => required({
          message: null
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if message is ""', () => {
        expect(() => required({
          message: ''
        })).toThrowError(TypeError);
    });

    it('should throw a TypeError if message is " "', () => {
        expect(() => required({
          message: ' '
        })).toThrowError(TypeError);
    });
  });

  describe('execution', () => {
    const validationMessage = 'This field is required';
    const validate = required({message: validationMessage});

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

      describe('""', () => {
        it('should return an object', () => {
            expect(typeof validate('')).toBe('object');
        });

        it('should return false for property valid', () => {
            expect(validate('').valid).toBe(false);
        });

        it('should return message describing the validation error', () => {
            expect(validate('').message).toBe(validationMessage);
        });
      });

      describe('" "', () => {
        it('should return an object', () => {
            expect(typeof validate('')).toBe('object');
        });

        it('should return false for property valid', () => {
            expect(validate('').valid).toBe(false);
        });

        it('should return message describing the validation error', () => {
            expect(validate('').message).toBe(validationMessage);
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
