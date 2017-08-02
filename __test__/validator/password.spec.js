import { passwordValidator } from '../../src/validator';

describe('passwordValidator', () => {
  const message = 'Test';
  const minLength = 4;
  const maxLength = 5;
  const validate = passwordValidator({
    message, minLength, maxLength
  });

  it('should be a function', () => {
    expect(typeof validate).toBe('function');
  });

  it(`
    should return an object with valid true and message null for valid value
  `, () => {
    expect(validate('Te1@')).toMatchObject({
      valid: true,
      message: null
    });
  });

  it(`
    should return an object with valid false and message \`Test\` for
    invalid value
  `, () => {
    expect(validate('  ')).toMatchObject({
      valid: false,
      message: 'Test'
    });
  });
});
