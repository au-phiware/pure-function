import { emailValidator } from '../../src/validator';

describe('emailValidator', () => {
  const message = 'Test';
  const validate = emailValidator({ message });

  it('should be a function', () => {
    expect(typeof validate).toBe('function');
  });

  it(`
    should return an object with valid true and message null for valid email
  `, () => {
    expect(validate('test@test.com')).toMatchObject({
      valid: true,
      message: null
    });
  });

  it(`
    should return an object with valid false and message \`Test\` for
    invalid email
  `, () => {
    expect(validate('t')).toMatchObject({
      valid: false,
      message: 'Test'
    });
  });
});
