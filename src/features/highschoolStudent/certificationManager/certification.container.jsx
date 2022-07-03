import { AlertOutlined } from '@ant-design/icons';
import { Form, Modal, Skeleton } from 'antd';
import {
  createCertification,
  deleteCertification,
  getCertification,
  getCertificationName,
  getListCertification,
  updateCertification
} from '../../../services/CertificationService';
import {
  handleCreateFailNotification,
  handleCreateSuccessNotification
} from '../../../notification/CreateCertificationNotification';
import {
  handleDeleteFailNotification,
  handleDeleteSuccessNotification
} from '../../../notification/DeleteCertificationNotification';
import { handleNotification } from '../../../notification/UpdateAccountNotification';
import { useSelector } from 'react-redux';
import CertificationComponent from './components/certification.component';
import React, { useEffect, useState } from 'react';

const CertificationContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [certificates, setCertificates] = useState();
  const [certificateDetail, setCertificateDetail] = useState('');
  const [certificateAdmin, setCertificateAdmin] = useState('');
  const [certificateAdminId, setCertificateAdminId] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imgeUrl, setImageUrl] = useState();
  const [imageUrlEdit, setImageUrlEdit] = useState();
  const [form] = Form.useForm();
  const { user } = useSelector((state) => state.authentication);
  const handleChange = (value) => {
    setCertificateAdminId(value);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleConfirmDelete = (value) => {
    Modal.confirm({
      onOk() {
        handleDelete(value);
      },
      onCancel() {
        handleCancel();
      },
      title: 'Xác nhận',
      icon: <AlertOutlined />,
      content: 'Bạn có chắc muốn xóa chứng chỉ này ?',
      okText: 'Đồng ý',
      cancelText: 'Không'
    });
  };

  const handleDelete = (value) => {
    deleteCertification(user.userId, value)
      .then((result) => {
        handleDeleteSuccessNotification('success');
        getListCertificate(user.userId);
        setIsModalVisible(false);
      })
      .catch((error) => {
        handleDeleteFailNotification('error');
      });
  };

  //CREATE CERTIFICATE
  const handleCreate = (values) => {
    values.certificationId = certificateAdminId;
    values.imageUrl = imgeUrl;
    form.resetFields();

    createCertification(values)
      .then((result) => {
        handleCreateSuccessNotification('success');
        getListCertificate(user.userId);
        setIsModalVisible(false);
      })
      .catch((error) => {
        handleCreateFailNotification('error');
      });
  };

  // UPDATE CERTIFICATE
  const handleOnClick = (value) => {
    getCertificate(value);
  };

  const onFinish = (values) => {
    values.studentid = user.userId;
    values.certificationid = certificateDetail.certificationId;
    values.imageUrl = imageUrlEdit;
    updateCertification(values)
      .then((result) => {
        handleNotification('success');
        setTimeout(reload, 200);
      })
      .catch((error) => {
        handleNotification('error');
      });
  };

  const reload = () => {
    window.location.reload();
  };

  // GET LIST CERTIFICATE FOR STUDENT ID
  useEffect(() => {
    getCertificateAdmin();
    getListCertificate(user.userId);
  }, [user.userId]);

  const getListCertificate = (accountId) => {
    getListCertification(accountId).then((result) => {
      setCertificates(result.data.data.list);
      setIsLoading(false);
    });
  };

  const getCertificate = (certificateID) => {
    getCertification(certificateID).then((result) => {
      setCertificateDetail(result.data.data);
      setImageUrlEdit(result.data.data.imageUrl);
      setIsLoading(false);
    });
  };

  const getCertificateAdmin = () => {
    getCertificationName().then((result) => {
      setCertificateAdmin(result.data.data.list);
    });
  };
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <CertificationComponent
          certificates={certificates}
          certificateDetail={certificateDetail}
          certificateAdmin={certificateAdmin}
          onFinish={onFinish}
          handleOnclick={handleOnClick}
          handleCreate={handleCreate}
          handleChange={handleChange}
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
          handleDelete={handleDelete}
          handleConfirmDelete={handleConfirmDelete}
          form={form}
          setImageUrl={setImageUrl}
          imageUrlEdit={imageUrlEdit}
          setImageUrlEdit={setImageUrlEdit}
        />
      )}
    </>
  );
};

export default CertificationContainer;
