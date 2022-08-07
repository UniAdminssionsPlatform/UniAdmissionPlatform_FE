import { notification } from 'antd';

export const handleCreateNotification = (status, input) => {
  if (status === 'success') {
    notification.success({
      message: 'Tạo thành công!',
      description: `Tạo slot thành công: ${input}`
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Tạo thất bại!',
      description: `Lỗi khi tạo slot: ${input}`
    });
  }
};
export const handleQueryNotification = (status, input) => {
  if (status === 'success') {
    notification.success({
      message: 'Truy vấn thành công!',
      description: `Truy vấn slot thành công: ${input}`
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Truy vấn thất bại!',
      description: `Truy vấn slot thất bại: ${input}`
    });
  }
};
export const handleSlotNotification = (status, messageI, descriptionI) => {
  if (status === 'success') {
    notification.success({
      message: messageI,
      description: descriptionI
    });
  } else if (status === 'error') {
    console.log(descriptionI.response);
    notification.error({
      message: `${messageI}`,
      description: `${descriptionI.response.data.msg}`
    });
  }
};
