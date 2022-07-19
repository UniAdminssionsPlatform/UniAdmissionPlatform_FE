import { notification } from 'antd';

export const FollowSuccessNotification = (status) => {
  if (status === 'success') {
    notification.success({
      message: 'Theo dõi thành công! Vui lòng đợi ít giây'
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Theo dõi thất  bại!',
      description: `Cập nhật thất bại`
    });
  }
};

export const UnFollowSuccessNotification = (status) => {
  if (status === 'success') {
    notification.success({
      message: 'Bỏ Theo dõi thành công! Vui lòng đợi ít giây'
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Theo dõi thất  bại!',
      description: `Cập nhật thất bại`
    });
  }
};
