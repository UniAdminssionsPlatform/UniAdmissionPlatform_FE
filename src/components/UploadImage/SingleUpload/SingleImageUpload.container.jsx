import 'antd/dist/antd.css';
import { Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { uploadImageService } from '../../../services/AdminUniversityService/UploadImageService';
import React from 'react';

const SingleImageUploadContainer = (props) => {
  const { setImageUrl } = props;
  const uploadImage = async (options) => {
    const { onSuccess, onError, file } = options;
    const fmData = new FormData();
    fmData.append('file', file);
    uploadImageService(fmData)
      .then((res) => {
        onSuccess('Ok');
        message.success(`Tải hình ảnh lên thành công`);
        setImageUrl(res.data.data.fileUrl);
      })
      .catch((err) => {
        message.error(`Tải hình ảnh thất bại`);
        onError({ err });
      });
  };
  return (
    <Upload customRequest={uploadImage}>
      <Button icon={<UploadOutlined />}>Bấm vào đây để tải lên hình ảnh</Button>
    </Upload>
  );
};
export default SingleImageUploadContainer;
