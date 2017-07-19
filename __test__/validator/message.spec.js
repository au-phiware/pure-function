import message from '../../src/validator/message';

describe('message', () => {
  it('should return an object', () =>
    expect(typeof message(() => true, 'message')).toBe('object')
  );

  it('should throw a TypeError for undefined validate parameter', () =>
    expect(() => message(undefined, 'message')).toThrowError(TypeError)
  );

  it('should throw a TypeError for non function validate parameter', () =>
    expect(() => message('true', 'message')).toThrowError(TypeError)
  );

  it('should map the valid property to true validate parameter', () =>
    expect(message(() => true, 'message').valid).toBe(true)
  );

  it('should map the valid property to false validate parameter', () =>
    expect(message(() => false, 'message').valid).toBe(false)
  );

  it(`
    should throw a TypeError for true validate parameter
    and undefined message parameter
  `, () =>
    expect(() => message(() => true)).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for true validate parameter
    and null message parameter
  `, () =>
    expect(() => message(() => true, null)).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for true validate parameter
    and non string message parameter
  `, () =>
    expect(() => message(() => true, '')).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for true validate parameter
    and whitespace string message parameter
  `, () =>
    expect(() => message(() => true, '  ')).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for false validate parameter
    and undefined message parameter
  `, () =>
    expect(() => message(() => false)).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for false validate parameter
    and null message parameter
  `, () =>
    expect(() => message(() => false, null)).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for false validate parameter
    and non string message parameter
  `, () =>
    expect(() => message(() => false, '')).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for false validate parameter
    and whitespace string message parameter
  `, () =>
    expect(() => message(() => false, '  ')).toThrowError(TypeError)
  );

  it(`
    should map the message property to null for true validate parameter
  `, () =>
    expect(message(() => true, 'message').message).toBeNull()
  );

  it(`
    should map the message property to string message parameter
    for false validate parameter
  `, () =>
    expect(message(() => false, 'message').message).toBe('message')
  );
});
