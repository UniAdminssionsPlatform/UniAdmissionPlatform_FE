import { notification } from 'antd';

export const handleNotification = (status, input) => {
  if (status === 'success') {
    notification.success({
      message: 'Truy vấn thành công!',
      description: `Lấy học bạ thành công`
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Truy vấn thất bại!',
      description: `${input}`
    });
  }
};

export const handleModifyNotification = (status) => {
  if (status === 'success') {
    notification.success({
      message: 'Truy vấn thành công!',
      description: `Chỉnh sửa điểm thành công`
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Truy vấn thất bại!',
      description: `Lỗi khi chỉnh sửa điểm`
    });
  }
};

export const handleAddNotification = (status, input) => {
  if (status === 'success') {
    notification.success({
      message: 'Truy vấn thành công!',
      description: `Tạo học bạ thành công`
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Truy vấn thất bại!',
      description: `${input}`,
      duration: 3
    });
  }
};
