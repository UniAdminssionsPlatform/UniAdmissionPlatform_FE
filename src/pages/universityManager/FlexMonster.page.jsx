import React from 'react';
import FlexMonsterContainer from '../../features/universityManager/flexMonsterData/FlexMonster.container';
import { Helmet } from 'react-helmet';
const FlexMonsterPage = () => {
  return (
    <>
      <Helmet>
        <title>Trang báo cáo</title>
      </Helmet>
      <FlexMonsterContainer />
    </>
  );
};
export default FlexMonsterPage;
