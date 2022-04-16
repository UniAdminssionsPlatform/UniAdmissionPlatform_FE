export const username = [
  {
    required: true,
    message: 'Please input your Username!'
  }
];

export const password = [
  {
    required: true,
    message: 'Please input your new Password!'
  }
];

export const confirm = [
  {
    required: true,
    message: 'Please confirm your password!'
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) return Promise.resolve();

      return Promise.reject(new Error('The two passwords that you entered do not match!'));
    }
  })
];
