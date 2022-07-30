import { notification } from 'antd';

export const handleNotification = (status) => {
  if (status === 'success') {
    notification.success({
      message: 'Cập nhật thành công!',
      description: 'Vui lòng đợi trong giây lát',
      duration: 2
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Cập nhật thất bại!',
      description: `Cập nhật thất bại`
    });
  }
};
