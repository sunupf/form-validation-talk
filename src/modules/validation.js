import Validator from 'validatorjs';

export default function Validation(data, rules) {
  const validation = new Validator(data, rules);

  // change how is validation passed
  const isValid = validation.passes();

  // only get the errors
  const errors = validation.errors.all();

  // utility to check is attribute has error
  const isInputError = function isInputError(label) {
    return validation.errors.has(label);
  };

  // utility to get attribute error
  const getErrors = function getErrors(label) {
    if (errors[label]) {
      return errors[label];
    }
    return [];
  };

  // default validation object (when it's valid)
  const validationObject = {
    isValid,
    isInputError,
    getErrors,
  };

  // return it if valid
  if (isValid) {
    return validationObject;
  }

  // add errors when it's not valid
  validationObject.errors = errors;

  return validationObject;
}
