import { UniversityDetail } from '../../../services/UniversityDetail';
import React, { useEffect, useState } from 'react';
import UniversityProfileComponent from './components/UniversityProfile.component';

const UniversityProfileContainer = () => {
  const [universityDetail, setUniversityDetail] = useState('');

  useEffect(() => {
    uniDetail(1);
  }, []);

  const uniDetail = (universityID) => {
    universityDetail(universityID).then((result) => {
      setUniversityDetail(result.data.data);
    });
  };
  return (
    <>
      <UniversityProfileComponent universityDetail={universityDetail} />
    </>
  );
};

export default UniversityProfileContainer;
