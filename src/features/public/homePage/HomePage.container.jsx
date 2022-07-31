import React, { useEffect } from 'react';
import HomePageComponent from './components/HomePage.component';
import { useDispatch } from 'react-redux';
import { EVENT } from '../../../constants/AppConst';
import { fetchListEventPublish } from '../../../redux-flow/listEventPublish/listEventPublish-slice';
import { fetchListNewPublish } from '../../../redux-flow/newPublish/listNewPublish-slice';
const HomePageContainer = () => {
  const dispatch = useDispatch();
  const getListEventPublish = () => {
    dispatch(fetchListEventPublish({ page: 1, limit: 1, status: EVENT.ON_GOING }));
  };
  const getListNewPublish = () => {
    dispatch(fetchListNewPublish({ page: 1, limit: 1 }));
  };
  useEffect(() => {
    getListEventPublish();
    getListNewPublish();
  }, []);
  return <HomePageComponent />;
};
export default HomePageContainer;
