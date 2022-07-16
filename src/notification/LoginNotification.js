import { notification } from 'antd';

export const handleNotification = (status, input) => {
  if (status === 'success') {
    notification.success({
      message: 'Đăng nhập thành công!',
      description: `Bạn đã đăng nhập vào website thành công với tên ${input}`
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Đăng nhập thất bại!',
      description: `${input}`
    });
  }
};
