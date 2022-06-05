import { useLocation } from 'react-router-dom';
import DetailMajorGroupContainer from '../../../features/highschoolStudent/majorGroupManager/DetailMajorGroup.container';
import React from 'react';

const DetailMajorGroupPage = () => {
  const location = useLocation();
  const { majorGroupId } = location.state;

  return (
    <>
      <DetailMajorGroupContainer majorGroupId={majorGroupId} />
    </>
  );
};
export default DetailMajorGroupPage;
