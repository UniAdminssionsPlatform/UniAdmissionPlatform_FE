import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CertificationComponent from '../../components/certification/certification.component';
import { handleNotification } from '../../notification/UpdateAccountNotification';
import {
  getListCertification,
  getCertification,
  updateCertification
} from '../../services/certification/CertificationService';

const CertificationContainer = (props) => {
  const [isloading, setIsloading] = useState(true);
  const [certificates, setCertificates] = useState();
  const [certificatedetail, setCertificatedetail] = useState('');
  const { certificateId } = props;
  const { user } = useSelector((state) => state.authentication);

  const handleonclick = (value) => {
    console.log(value);
    getCertificate(value);
  };

  const onFinish = (values) => {
    console.log('values container: ', values);
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

  useEffect(() => {
    getListCertificate(user.userId);
  }, [user.userId]);

  const getListCertificate = (accountId) => {
    getListCertification(accountId).then((result) => {
      console.log('certification container: ', result.data.data.list);
      setCertificates(result.data.data.list);
      setIsloading(false);
    });
  };

  useEffect(() => {
    getCertificate(certificateId);
  }, [certificateId]);

  const getCertificate = (certificateID) => {
    getCertification(certificateID).then((result) => {
      setCertificatedetail(result.data.data);
      setIsloading(false);
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
          onFinish={onFinish}
          handleonclick={handleonclick}
        />
      )}
    </>
  );
};

export default CertificationContainer;
