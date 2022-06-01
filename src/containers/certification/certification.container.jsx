import { AlertOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Form, message, Modal, Popconfirm, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CertificationComponent from '../../components/certification/certification.component';
import {
  handleCreateFailNotification,
  handleCreateSuccessNotification
} from '../../notification/CreateCertificationNotification';
import {
  handleDeleteFailNotification,
  handleDeleteSuccessNotification
} from '../../notification/DeleteCertificationNotification';
import { handleNotification } from '../../notification/UpdateAccountNotification';
import {
  getListCertification,
  getCertification,
  updateCertification,
  getCertificationName,
  createCertification,
  deleteCertification
} from '../../services/certification/CertificationService';

const CertificationContainer = (props) => {
  const [isloading, setIsloading] = useState(true);
  const [certificates, setCertificates] = useState();
  const [certificatedetail, setCertificatedetail] = useState('');
  const [certificateadmin, setCertificateAdmin] = useState('');
  const [certificateadminid, setCertificateadminid] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { certificateId } = props;
  const [form] = Form.useForm();
  const { user } = useSelector((state) => state.authentication);
  const handleChange = (value) => {
    setCertificateadminid(value);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //DELETE CERTIFICATE
  // const confirm = (e) => {
  //   console.log(e);
  //   message.success('Click on Yes');
  // };

  // const cancel = (e) => {
  //   console.log(e);
  //   message.error('Click on No');
  // };

  const handleconfirmdelete = (value) => {
    Modal.confirm({
      onOk() {
        handledelete(value);
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

  const handledelete = (value) => {
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
  const handlecreate = (values) => {
    values.certificationId = certificateadminid;
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
  const handleonclick = (value) => {
    console.log(value);
    getCertificate(value);
  };

  const onFinish = (values) => {
    values.studentid = user.userId;
    values.certificationid = certificatedetail.certificationId;
    updateCertification(values)
      .then((result) => {
        handleNotification('success');
      })
      .catch((error) => {
        handleNotification('error');
      });
  };

  // GET LIST CERTIFICATE FOR STUDENT ID
  useEffect(() => {
    getCertificateAdmin();
    getListCertificate(user.userId);
  }, [user.userId]);

  const getListCertificate = (accountId) => {
    getListCertification(accountId).then((result) => {
      setCertificates(result.data.data.list);
      setIsloading(false);
    });
  };

  // GET CERTIFICATE BY ID
  useEffect(() => {
    getCertificate(certificateId);
  }, [certificateId]);

  const getCertificate = (certificateID) => {
    getCertification(certificateID).then((result) => {
      setCertificatedetail(result.data.data);
      setIsloading(false);
    });
  };

  // GET CERTIFICATE NAME FOR MODAL CREATE

  const getCertificateAdmin = () => {
    getCertificationName().then((result) => {
      setCertificateAdmin(result.data.data.list);
    });
  };
  return (
    <>
      {isloading ? (
        <Skeleton />
      ) : (
        <CertificationComponent
          certificates={certificates}
          certificatedetail={certificatedetail}
          certificateadmin={certificateadmin}
          onFinish={onFinish}
          handleonclick={handleonclick}
          handlecreate={handlecreate}
          handleChange={handleChange}
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
          handledelete={handledelete}
          handleconfirmdelete={handleconfirmdelete}
          form={form}
        />
      )}
    </>
  );
};

export default CertificationContainer;
