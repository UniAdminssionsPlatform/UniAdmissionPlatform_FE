import 'antd/dist/antd.css';
import { Modal, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { TOKEN_KEY } from '../../../constants/AppConst';
import { UPLOAD_A_NEW_IMAGE_ENDPOINT } from '../../../constants/Endpoints/FilesEndpoint';
import Cookies from 'js-cookie';
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
  const requestProps = {
    name: 'file',
    action: UPLOAD_A_NEW_IMAGE_ENDPOINT,
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
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) file.preview = await getBase64(file.originFileObj);

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  let token = null;
  token = Cookies.get(TOKEN_KEY);
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
  const handleChange = ({ fileList: newFileList, file }) => {
    setFileList(newFileList);
    if (file.status !== 'uploading') console.log(file, fileList);
    if (file.status === 'done') {
      message.success(`${file.name} Tải hình ảnh lên thành công`);
      setImageUrl(file.response.data.fileUrl);
    } else if (file.status === 'error') message.error(`${file.name} Tải hình ảnh thất bại`);
  };
  return (
    <>
      <Upload
        {...requestProps}
        headers={{ 'x-token': token && token !== 'undefined' ? token : null, 'content-type': 'multipart/form-data' }}
        onPreview={handlePreview}
        onChange={handleChange}
        listType='picture-card'
        fileList={fileList}>
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
