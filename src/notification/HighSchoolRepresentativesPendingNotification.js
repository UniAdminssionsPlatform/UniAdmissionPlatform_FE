import { notification } from 'antd';

export const GetListNotification = (status, input) => {
  if (status === 'success') {
    notification.success({
      message: 'Truy vấn thành công!',
      description: `Danh sách đang chờ xet duyệt`,
      duration: 1
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Truy vấn thất bại!',
      description: `${input}`
    });
  }
};
