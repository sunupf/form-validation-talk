import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

const mixins = [
  validationMixin,
];

const validations = {
  email: {
    required,
    email,
  },
};

const data = function data() {
  return {
    email: '',
  };
};

const methods = {
  resetPassword: function resetPassword() {
    this.$v.$touch();
    if (this.$v.$invalid) {
      // do something if error
    } else {
      // do something if valid
    }
  },
  isInputError: function isInputError(label, rule) {
    if (rule) {
      return this.$v.$error && !this.$v[label][rule];
    }
    return this.$v[label].$anyError;
  },
};

export default {
  mixins,
  data,
  validations,
  methods,
};
