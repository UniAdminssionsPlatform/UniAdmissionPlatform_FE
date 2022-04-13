export const email = [
  {
    type: 'email',
    message: 'The input is not valid E-mail!'
  },
  {
    required: true,
    message: 'Please input your email!'
  }
]

export const password = [
  {
    required: true,
    message: 'Please input your password!'
  }
]
export const otp = [
  {
    required: true,
    message: 'Please input your password!'
  }
]
export const confirm = [
  {
    required: true,
    message: 'Please input your password!'
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve()
      }
      return Promise.reject(
        new Error('The two passwords that you entered do not match!')
      )
    }
  })
]
