import { notification } from 'antd';

export const handleNotification = (status) => {
  if (status === 'success') {
    notification.success({
      message: 'Cập nhật thành công!'
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Cập nhật thất bại!',
      description: `Cập nhật thất bại`
    });
  }
};
