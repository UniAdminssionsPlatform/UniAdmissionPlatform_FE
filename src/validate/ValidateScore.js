export const score1 = [
  {
    required: true,
    message: 'Vui lòng nhập điểm '
  },
  () => ({
    validator(_, value) {
      if (value < 0) return Promise.reject('Điểm không hợp lệ');

      if (value > 10) return Promise.reject('Điểm không hợp lệ');

      return Promise.resolve();
    }
  })
];
export const score2 = [
  {
    required: true,
    message: 'Vui lòng nhập điểm '
  },
  () => ({
    validator(_, value) {
      if (value < 0) return Promise.reject('Điểm không hợp lệ');

      if (value > 10) return Promise.reject('Điểm không hợp lệ');

      return Promise.resolve();
    }
  })
];
export const score3 = [
  {
    required: true,
    message: 'Vui lòng nhập điểm '
  },
  () => ({
    validator(_, value) {
      if (value < 0) return Promise.reject('Điểm không hợp lệ');

      if (value > 10) return Promise.reject('Điểm không hợp lệ');

      return Promise.resolve();
    }
  })
];
