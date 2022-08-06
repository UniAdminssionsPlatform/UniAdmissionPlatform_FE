import { UniversityDetail } from '../../../services/UniversityDetail';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import UniversityProfileComponent from './components/UniversityProfile.component';

const UniversityProfileContainer = () => {
  const [universityDetail, setUniversityDetail] = useState('');
  const { user } = useSelector((state) => state.authentication);

  useEffect(() => {
    uniDetail(user.universityId);
  }, [user.universityId]);

  const uniDetail = (universityID) => {
    UniversityDetail(universityID).then((result) => {
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
