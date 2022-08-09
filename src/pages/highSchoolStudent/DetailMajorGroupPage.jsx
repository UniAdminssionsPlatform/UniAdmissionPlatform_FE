import { useLocation } from 'react-router-dom';
import DetailMajorGroupContainer from '../../features/highschoolStudent/majorGroupManager/DetailMajorGroup.container';
import React from 'react';
import { Helmet } from 'react-helmet';

const DetailMajorGroupPage = () => {
  const location = useLocation();
  const { majorGroupId } = location.state;

  return (
    <>
      <Helmet>
        <title>Nhóm ngành đào tạo</title>
      </Helmet>
      <DetailMajorGroupContainer majorGroupId={majorGroupId} />
    </>
  );
};
export default DetailMajorGroupPage;
