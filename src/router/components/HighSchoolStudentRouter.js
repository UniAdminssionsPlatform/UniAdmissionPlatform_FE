import { HIGH_SCHOOL_STUDENT } from '../../constants/RoleType';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import React from 'react';
const HighSchoolStudentRouter = ({ component: Component, ...rest }) => {
  const { user, isAuthUser } = useSelector((state) => state.authentication);
  const resultComponent = (props) => {
    const listRole = user ? Array.of(user.roles) : [];
    if (isAuthUser && listRole.includes(HIGH_SCHOOL_STUDENT)) return <Component {...props} />;

    if (isAuthUser && !listRole.includes(HIGH_SCHOOL_STUDENT)) return <ErrorPage code={403} />;

    if (!isAuthUser) return <ErrorPage code={403} />;
  };
  return <Route {...rest} render={(props) => resultComponent(props)} />;
};
export default HighSchoolStudentRouter;
