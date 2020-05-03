import Validation from '../../modules/validation';

const data = function data() {
  return {
    data: {
      email: '',
    },
    rules: {
      email: 'required|email',
    },
    validation: null,
  };
};

const methods = {
  resetPassword: function resetPassword() {
    this.validation = new Validation(this.data, this.rules);
    if (this.validation.isValid) {
      // do something right
    }
  },
};

export default {
  data,
  methods,
};
