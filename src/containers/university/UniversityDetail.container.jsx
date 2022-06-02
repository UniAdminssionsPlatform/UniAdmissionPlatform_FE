import { UniversityDetail } from '../../services/UniversityDetail';
import React, { useEffect, useState } from 'react';
import UniversityDetailComponent from '../../components/university/UniversityDetail.component';

const UniversityDetailContainer = () => {
  const [universitydetail, setuniversitydetail] = useState('');

  useEffect(() => {
    uniDetail(1);
  }, []);

  const uniDetail = (universityID) => {
    UniversityDetail(universityID).then((result) => {
      setuniversitydetail(result.data.data);
    });
  };
  return (
    <>
      <UniversityDetailComponent universitydetail={universitydetail} />
    </>
  );
};

export default UniversityDetailContainer;
