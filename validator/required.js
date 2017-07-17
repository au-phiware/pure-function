import model from './model.js';

export default (value) => {
  if (value) {
    return model(true, null);
  }

  return model(false, 'missing_required_field');
};
