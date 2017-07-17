import required from '../../validator/required';

describe('validator', () => {
  describe('results', () => {
    describe('invalid values', () => {
      describe('undefined', () => {
        it('should return an object', () => {
            expect(typeof required()).toBe('object');
        });

        it('should return undefined for property valid', () => {
            expect(required().valid).toBe(false);
        });

        it('should return undefined for property message', () => {
            expect(required().type).toBe('missing_required_field');
        });
      });

      describe('null', () => {
        it('should return an object', () => {
            expect(typeof required(null)).toBe('object');
        });

        it('should return undefined for property valid', () => {
            expect(required(null).valid).toBe(false);
        });

        it('should return undefined for property message', () => {
            expect(required(null).type).toBe('missing_required_field');
        });
      });

      describe('""', () => {
        it('should return an object', () => {
            expect(typeof required('')).toBe('object');
        });

        it('should return undefined for property valid', () => {
            expect(required('').valid).toBe(false);
        });

        it('should return undefined for property message', () => {
            expect(required('').type).toBe('missing_required_field');
        });
      });

      describe('" "', () => {
        it('should return an object', () => {
            expect(typeof required('')).toBe('object');
        });

        it('should return undefined for property valid', () => {
            expect(required('').valid).toBe(false);
        });

        it('should return undefined for property message', () => {
            expect(required('').type).toBe('missing_required_field');
        });
      });
    });

    describe('valid values', () => {
      describe('a', () => {
        it('should return an object', () => {
            expect(typeof required('a')).toBe('object');
        });

        it('should return undefined for property valid', () => {
            expect(required('a').valid).toBe(true);
        });

        it('should return undefined for property message', () => {
            expect(required('a').type).toBe(null);
        });
      });
    });
  });
});
