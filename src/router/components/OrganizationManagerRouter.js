import { ORGANIZATION_MANAGER } from '../../constants/RoleType';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import React from 'react';
const OrganizationManagerRouter = ({ component: Component, ...rest }) => {
  const { user, isAuthUser } = useSelector((state) => state.authentication);
  const resultComponent = (props) => {
    const listRole = user ? Array.of(user.roles) : [];
    if (isAuthUser && listRole.includes(ORGANIZATION_MANAGER)) return <Component {...props} />;

    if (isAuthUser && !listRole.includes(ORGANIZATION_MANAGER)) return <ErrorPage code={403} />;

    if (!isAuthUser) return <ErrorPage code={403} />;
  };
  return <Route {...rest} render={(props) => resultComponent(props)} />;
};
export default OrganizationManagerRouter;
