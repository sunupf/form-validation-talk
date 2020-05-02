import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

// extend rules
extend('email', email);
extend('required', {
  ...required,
  message: '{_field_} field is required',
});

const components = {
  ValidationProvider,
  ValidationObserver,
};

const data = function data() {
  return {
    email: '',
  };
};

const methods = {
  resetPassword: function resetPassword() {
    // do something when form is valid here
  },
  isInputError: function isInputError(errors) {
    return errors && errors.length > 0;
  },
};

export default {
  components,
  data,
  methods,
};
