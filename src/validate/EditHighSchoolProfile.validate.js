/* eslint-disable no-useless-escape */
const phoneRegex = /^(0|\+84)(\s|\.)?\d{8,11}$/;
// /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const name = [
  {
    required: true,
    message: 'Vui lòng nhập tên trường !'
  }
];

export const email = [
  {
    pattern: new RegExp(emailRegex),
    message: 'email phải có cấu trúc đầy đủ ( abc@gmail.com )'
  }
];

export const phone = [
  {
    pattern: new RegExp(phoneRegex),
    message: 'Số điện thoại không hợp lệ !'
  }
];
