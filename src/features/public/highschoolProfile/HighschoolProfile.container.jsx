import { HighschoolDetail } from '../../../services/HighSchoolProfileService';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import HighSchoolProfileComponent from './components/HighschoolProfile.component';
import React, { useEffect, useState } from 'react';

const HighSchoolProfileContainer = () => {
  const stylespin = {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '4px'
  };
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.authentication);
  //   console.log('user: ', user);
  const [highschoolDetail, setHighSchoolDetail] = useState('');

  useEffect(() => {
    uniDetail();
  }, []);

  const uniDetail = () => {
    HighschoolDetail(user.highSchoolId).then((result) => {
      setHighSchoolDetail(result.data.data);
      setIsLoading(false);
    });
  };
  return (
    <>
      {isLoading ? (
        <div style={stylespin}>
          <Spin tip='Đang tải...'></Spin>
        </div>
      ) : (
        <HighSchoolProfileComponent highschoolDetail={highschoolDetail} />
      )}
    </>
  );
};

export default HighSchoolProfileContainer;
