import model from '../../validator/model';

describe('model', () => {
  it('should return an object', () =>
    expect(typeof model(true, 'message')).toBe('object')
  );

  it('should throw a TypeError for undefined valid parameter', () =>
    expect(() => model(undefined, 'message')).toThrowError(TypeError)
  );

  it('should throw a TypeError for non boolean valid parameter', () =>
    expect(() => model('true', 'message')).toThrowError(TypeError)
  );

  it('should map the valid property to true valid parameter', () =>
    expect(model(true, 'message').valid).toBe(true)
  );

  it('should map the valid property to false valid parameter', () =>
    expect(model(false, 'message').valid).toBe(false)
  );

  it(`
    should throw a TypeError for true valid parameter
    and undefined message parameter
  `, () =>
    expect(() => model(true)).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for true valid parameter
    and null message parameter
  `, () =>
    expect(() => model(true, null)).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for true valid parameter
    and non string message parameter
  `, () =>
    expect(() => model(true, '')).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for true valid parameter
    and whitespace string message parameter
  `, () =>
    expect(() => model(true, '  ')).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for false valid parameter
    and undefined message parameter
  `, () =>
    expect(() => model(false)).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for false valid parameter
    and null message parameter
  `, () =>
    expect(() => model(false, null)).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for false valid parameter
    and non string message parameter
  `, () =>
    expect(() => model(false, '')).toThrowError(TypeError)
  );

  it(`
    should throw a TypeError for false valid parameter
    and whitespace string message parameter
  `, () =>
    expect(() => model(false, '  ')).toThrowError(TypeError)
  );

  it('should map the message property to null for true valid parameter', () =>
    expect(model(true, 'message').message).toBeNull()
  );

  it(`
    should map the message property to string message parameter
    for false valid parameter
  `, () =>
    expect(model(false, 'message').message).toBe('message')
  );
});
