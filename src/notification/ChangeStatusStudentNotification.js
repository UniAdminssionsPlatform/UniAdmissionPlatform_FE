import { notification } from 'antd';

export const handleLockNotification = (status, input) => {
  if (status === 'success') {
    notification.success({
      message: 'Truy vấn thành công!',
      description: `học sinh ${input} đã bị khóa`,
      duration: 3
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Truy vấn thất bại!',
      description: ``
    });
  }
};
export const handActiveNotification = (status, input) => {
  if (status === 'success') {
    notification.success({
      message: 'Truy vấn thành công!',
      description: `học sinh ${input} đã hoạt động`,
      duration: 3
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Truy vấn thất bại!',
      description: ``
    });
  }
};
