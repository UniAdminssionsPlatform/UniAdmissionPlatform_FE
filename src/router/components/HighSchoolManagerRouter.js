import { HIGH_SCHOOL_MANAGER } from '../../constants/RoleType';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import React from 'react';
const HighSchoolManagerRouter = ({ component: Component, ...rest }) => {
  const { user, isAuthUser } = useSelector((state) => state.authentication);
  const resultComponent = (props) => {
    const listRole = user ? Array.of(user.roles) : [];
    if (isAuthUser && listRole.includes(HIGH_SCHOOL_MANAGER)) return <Component {...props} />;

    if (isAuthUser && !listRole.includes(HIGH_SCHOOL_MANAGER)) return <ErrorPage code={403} />;

    if (!isAuthUser) return <ErrorPage code={403} />;
  };
  return <Route {...rest} render={(props) => resultComponent(props)} />;
};
export default HighSchoolManagerRouter;
