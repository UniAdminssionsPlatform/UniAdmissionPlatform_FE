import { notification } from 'antd';

export const GetGoalAdmisisonsNotification = (status, input) => {
  if (status === 'success') {
    notification.success({
      message: `${input}`
    });
  } else if (status === 'error') {
    notification.error({
      message: 'Lấy tiêu chí tuyển sinh thất bại'
    });
  }
};

export const CreateGoalAdmisisonsNotification = (status, input) => {
  if (status === 'success') {
    notification.success({
      message: `Thêm tiêu chí tuyển sinh thành công`
    });
  } else if (status === 'error') {
    notification.error({
      message: `${input}`
    });
  }
};
