/* eslint-disable no-useless-escape */
const phoneRegex =
  /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
const idcardRegex = /^[0-9\-\+]{9,15}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const lastname = [
  {
    required: true,
    message: 'Vui lòng nhập họ !'
  }
];

export const middlename = [
  {
    required: true,
    message: 'Vui lòng nhập tên đệm !'
  }
];

export const email = [
  {
    pattern: new RegExp(emailRegex),
    message: 'email phải có cấu trúc đầy đủ ( abc@gmail.com )'
  }
];

export const firstname = [
  {
    required: true,
    message: 'Vui lòng nhập tên !'
  }
];

export const phone = [
  {
    required: true,
    message: 'Vui lòng nhập số điện thoại !'
  },
  {
    pattern: new RegExp(phoneRegex),
    message: 'Số điện thoại không hợp lệ !'
  }
];

export const address = [
  {
    required: true,
    message: 'Vui lòng nhập địa chỉ !'
  }
];

export const relogion = [
  {
    required: true,
    message: 'Vui lòng nhập tôn giáo !'
  }
];

export const vcode = [
  {
    required: true,
    message: 'Vui lòng nhập mã xác thực !'
  }
];

export const idcard = [
  {
    required: true,
    message: 'vui lòng nhập cmnd/cccd !'
  },
  {
    pattern: new RegExp(idcardRegex),
    message: 'cmnd/cccd không hợp lệ !'
  }
];

export const dob = [
  {
    required: true,
    message: 'vui lòng chọn ngày sinh !'
  }
];

export const sex = [
  {
    required: true,
    message: 'vui lòng chọn giới tính !'
  }
];

export const placeOfBirth = [
  {
    required: true,
    message: 'vui lòng chọn nơi sinh !'
  }
];

export const province = [
  {
    required: true,
    message: 'vui lòng chọn thành phố !'
  }
];

export const district = [
  {
    required: true,
    message: 'vui lòng chọn quận/huyện !'
  }
];

export const ward = [
  {
    required: true,
    message: 'vui lòng chọn phường xã !'
  }
];

export const nation = [
  {
    required: true,
    message: 'vui lòng chọn quốc tịch !'
  }
];
