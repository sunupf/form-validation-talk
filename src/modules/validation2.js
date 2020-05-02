import Validate from 'validate.js';

export default function Validation(data, rules) {
  const validation = new Validate(data, rules);

  // change how is validation passed
  const isValid = Object.keys(validation).length === 0;

  // only get the errors
  const errors = validation;

  // utility to check is attribute has error
  const isInputError = function isInputError(label) {
    return validation[label] && validation[label].length > 0;
  };

  // utility to get attribute error
  const getErrors = function getErrors(label) {
    if (errors[label]) {
      return errors[label];
    }
    return [];
  };

  // default validation object (when it's valid)
  let validationObject = {
    isValid,
    isInputError,
    getErrors,
  };

  // return it if valid
  if (isValid) {
    return validationObject;
  }

  // add errors when it's not valid
  validationObject = Object.assign(validationObject, errors);

  return validationObject;
}
