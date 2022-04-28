import { notification } from 'antd';

export const handleSuccessNotification = (msg) => {
  notification.success({
    message: msg,
    description: `Trạng thái truy vấn: thành công!`
  });
};
export const handleFailNotification = (msg) => {
  notification.error({
    message: msg,
    description: `Trạng thái truy vấn: thất bại!`
  });
};
