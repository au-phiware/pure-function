import validator from './validator';
import * as constraint from '../constraint';

const emailValidator = ({ message }) =>
  validator({ validate: constraint.emailConstraint, message });

const requiredValidator = ({ message }) =>
  validator({ validate: constraint.requiredConstraint, message });

const passwordValidator = ({ message, ...config }) =>
  validator({ validate: constraint.passwordConstraint(config), message });

export {
  validator,
  emailValidator,
  requiredValidator,
  passwordValidator
};
