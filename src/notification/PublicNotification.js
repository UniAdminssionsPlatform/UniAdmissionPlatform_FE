import { notification } from 'antd';

export const PublicSuccessNotification = (status) => {
  if (status === 'success') {
    notification.success({
      message: 'Công khai thành công!'
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Công khai thất  bại!'
      // description: `Cập nhật thất bại`
    });
  }
};
