import { Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { uploadImageService } from '../../../services/AdminUniversityService/UploadImageService';
import React from 'react';

const SingleUploadWithPreviewContainer = (props) => {
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
    <Upload customRequest={uploadImage} listType='picture' multiple={false}>
      <Button icon={<UploadOutlined />}>Bấm vào đây để tải lên</Button>
    </Upload>
  );
};
export default SingleUploadWithPreviewContainer;
