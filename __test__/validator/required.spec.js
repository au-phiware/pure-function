import { requiredValidator } from '../../src/validator';

describe('requiredValidator', () => {
  const message = 'Test';
  const validate = requiredValidator({ message });

  it('should be a function', () => {
    expect(typeof validate).toBe('function');
  });

  it(`
    should return an object with valid true and message null for valid value
  `, () => {
    expect(validate('Test')).toMatchObject({
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
