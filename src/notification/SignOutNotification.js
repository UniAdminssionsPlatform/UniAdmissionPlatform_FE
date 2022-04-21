import { notification } from 'antd';
export const handleNotification = () => {
  notification.success({
    message: 'Đăng xuất thành công!',
    description: `Hẹn gặp lại bạn <3`
  });
};
