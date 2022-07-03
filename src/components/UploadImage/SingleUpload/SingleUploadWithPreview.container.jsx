import { Button, Upload, message } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { TOKEN_KEY } from '../../../constants/AppConst';
import { UPLOAD_A_NEW_IMAGE_ENDPOINT } from '../../../constants/Endpoints/FilesEndpoint';
import Cookies from 'js-cookie';
import React from 'react';

const SingleUploadWithPreviewContainer = (props) => {
  const { setImageUrl } = props;
  const { Dragger } = Upload;
  const DragProp = {
    name: 'file',
    action: UPLOAD_A_NEW_IMAGE_ENDPOINT,
    onChange(info) {
      if (info.file.status !== 'uploading') console.log(info.file, info.fileList);
      if (info.file.status === 'done') {
        message.success(`${info.file.name} Tải hình ảnh lên thành công`);
        setImageUrl(info.file.response.data.fileUrl);
      } else if (info.file.status === 'error') message.error(`${info.file.name} Tỉa hình ảnh thất bại`);
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
    <Upload
      {...DragProp}
      headers={{ 'x-token': token && token !== 'undefined' ? token : null }}
      listType='picture'
      multiple={false}>
      <Button icon={<UploadOutlined />}>Bấm vào đây để tải lên</Button>
    </Upload>
  );
};
export default SingleUploadWithPreviewContainer;
