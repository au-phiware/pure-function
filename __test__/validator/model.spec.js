import model from '../../validator/model';

describe('model', () => {
  it('should return an object', () =>
    expect(typeof model(false, null)).toBe('object')
  );

  it('should throw a TypeError for undefined valid parameter', () =>
    expect(() => model(undefined, null)).toThrowError(TypeError)
  );

  it('should throw a TypeError for non boolean valid parameter', () =>
    expect(() => model('true', null)).toThrowError(TypeError)
  );

  it('should map the valid property to true valid parameter', () =>
    expect(model(true, null).valid).toBe(true)
  );

  it('should map the valid property to false valid parameter', () =>
    expect(model(false, null).valid).toBe(false)
  );

  it('should throw a TypeError for undefined type parameter', () =>
    expect(() => model(true)).toThrowError(TypeError)
  );

  it('should throw a TypeError for non string type parameter', () =>
    expect(() => model(true, true)).toThrowError(TypeError)
  );

  it('should map the type property to null type parameter', () =>
    expect(model(true, null).type).toBeNull()
  );

  it('should map the type property to string type parameter', () =>
    expect(model(true, 'type').type).toBe('type')
  );
});
