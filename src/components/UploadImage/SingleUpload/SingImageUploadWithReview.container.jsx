import 'antd/dist/antd.css';
import { HOST_UPLOAD, UPLOAD_A_NEW_IMAGE_ENDPOINT } from '../../../constants/Endpoints/FilesEndpoint';
import { Modal, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { uploadImageService } from '../../../services/AdminUniversityService/UploadImageService';
import React, { useState } from 'react';

const SingleImageUploadWithReviewContainer = (props) => {
  const { setImageUrl } = props;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
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

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) file.preview = await getBase64(file.originFileObj);
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleCancel = () => setPreviewVisible(false);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8
        }}>
        Upload
      </div>
    </div>
  );

  return (
    <>
      <Upload customRequest={uploadImage} onPreview={handlePreview} listType='picture-card' fileList={fileList}>
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt='example'
          style={{
            width: '100%'
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
export default SingleImageUploadWithReviewContainer;
