import required from '../../src/validator/required';

describe('required', () => {
  describe('value', () => {
    it('should return false for undefined', () => {
      expect(required()).toBe(false);
    });

    it('should return false for null', () => {
      expect(required(null)).toBe(false);
    });

    it('should return false for ""', () => {
      expect(required('')).toBe(false);
    });

    it('should return false for " "', () => {
      expect(required(' ')).toBe(false);
    });

    it('should return true for "test"', () => {
      expect(required('test')).toBe(true);
    });

    it('should return true for 1', () => {
      expect(required(1)).toBe(true);
    });

    it('should return true for false', () => {
      expect(required(false)).toBe(true);
    });
  });
});
