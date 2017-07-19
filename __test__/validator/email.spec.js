import email from '../../src/validator/email';

describe('email', () => {
  describe('value', () => {
    it('should return false for undefined', () => {
      expect(email()).toBe(false);
    });

    it('should return false for null', () => {
      expect(email(null)).toBe(false);
    });

    it('should return false for ""', () => {
      expect(email('')).toBe(false);
    });

    it('should return false for " "', () => {
      expect(email(' ')).toBe(false);
    });

    it('should return false for "a"', () => {
      expect(email('a')).toBe(false);
    });

    it('should return false for "a"', () => {
      expect(email('a@a')).toBe(false);
    });

    it('should return true for "test@test.com"', () => {
      expect(email('test@test.com')).toBe(true);
    });
  });
});
