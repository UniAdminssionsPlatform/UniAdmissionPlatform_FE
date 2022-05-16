import { notification } from 'antd';

export const handleNotification = (status, input) => {
  if (status === 'success') {
    notification.success({
      message: 'Đăng kí thành công!',
      description: `Bạn đã đăng kí thành công với vai trò ${input}`
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Đăng kí thất bại!',
      description: `Đăng kí thất bại`
    });
  }
};
