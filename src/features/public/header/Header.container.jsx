import { selectCurrentPageData } from '../../../app/pages/pages';
import { useAppSelector } from '../../../app/hook';
import Header from '../../../components/Header/Header.component';
import React from 'react';

const HeaderContainer = () => {
  const currentPage = useAppSelector(selectCurrentPageData);
  return <Header currentPage={currentPage} />;
};

export default HeaderContainer;
