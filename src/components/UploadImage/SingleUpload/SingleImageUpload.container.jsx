import 'antd/dist/antd.css';
import { Button, Upload, message } from 'antd';
import { HOST_UPLOAD, UPLOAD_A_NEW_IMAGE_ENDPOINT } from '../../../constants/Endpoints/FilesEndpoint';
import { TOKEN_KEY } from '../../../constants/AppConst';
import { UploadOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import React from 'react';

const SingleImageUploadContainer = (props) => {
  const { setImageUrl } = props;
  const requestProps = {
    name: 'file',
    action: `${HOST_UPLOAD}${UPLOAD_A_NEW_IMAGE_ENDPOINT}`,
    onChange(info) {
      if (info.file.status !== 'uploading') console.log(info.file, info.fileList);
      if (info.file.status === 'done') {
        message.success(`${info.file.name} Tải hình ảnh lên thành công`);
        setImageUrl(info.file.response.data.fileUrl);
      } else if (info.file.status === 'error') message.error(`${info.file.name} Tải hình ảnh thất bại`);
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`
    }
  };
  let token = null;
  token = Cookies.get(TOKEN_KEY);
  return (
    <Upload {...requestProps} headers={{ 'x-token': token && token !== 'undefined' ? token : null }}>
      <Button icon={<UploadOutlined />}>Bấm vào đây để tải lên hình ảnh</Button>
    </Upload>
  );
};
export default SingleImageUploadContainer;
