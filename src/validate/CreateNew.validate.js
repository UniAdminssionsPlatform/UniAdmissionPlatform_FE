export const newTitleValidate = [
  {
    required: true,
    message: 'Đề mục không được để trống'
  },
  {
    type: 'string',
    min: 6,
    message: 'Đề mục không được dưới 6 ký tự'
  }
];
export const newShortDescriptionValidate = [
  {
    required: true,
    message: 'Phụ đề không được để trống'
  },
  {
    type: 'string',
    min: 30,
    message: 'Phụ đề không được dưới 30 ký tự'
  }
];
export const newTagValidate = [
  {
    required: true,
    message: 'Nhãn bài viết không được để trống'
  }
];
export const newAvatarValidate = [
  {
    required: true,
    message: 'Nhãn bài viết không được để trống'
  }
];
