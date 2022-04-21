import { PATH } from '../constants/Paths/Path';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import ChangePasswordPage from '../pages/authen/ChangePasswordPage/ChangePasswordPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ForgotPasswordPage from '../pages/authen/ForgotPasswordPage/ForgotPasswordPage';
import HeaderContainer from '../containers/Header/Header.container';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/authen/LoginPage/Login.page';
import React from 'react';
import RegistrationPage from '../pages/authen/RegistrationPage/RegistrationPage';
import ScrollToTop from '../components/commons/ScrollToTopProps/ScrollToTopProps.component';
import ListEventPage from '../pages/event/ListEvent/ListeventPage';
import ListNewContainer from '../containers/listNew/ListNew/ListNew.container';
import CreateEventPage from '../pages/event/CreateEvent/CreateEventPage';
import PolicyPage from '../pages/policy/PolicyPage';

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <HeaderContainer />
      <Switch>
        <Route path={PATH.INDEX} exact>
          <HomePage />
        </Route>
        <Route path={PATH.LOGIN} exact>
          <LoginPage />
        </Route>
        <Route path={PATH.FORGOT_PASSWORD} exact>
          <ForgotPasswordPage />
        </Route>
        <Route path={PATH.CHANGE_PASSWORD} exact>
          <ChangePasswordPage />
        </Route>
        <Route path={PATH.REGISTRATION} exact>
          <RegistrationPage />
        </Route>
        <Route path={PATH.POLICY} exact>
          <PolicyPage />
        </Route>
        <Route path={PATH.HIGH_SCHOOL_STUDENT.LIST_EVENT} exact>
          <ListEventPage />
        </Route>
        <Route path={PATH.UNIVERSITY_MANAGER.UNIVERSITY_NEW} exact>
          <ListNewContainer />
        </Route>
        <Route path={PATH.UNIVERSITY_MANAGER.CREATE_EVENT} exact>
          <CreateEventPage />
        </Route>
        <Route path='/index.html'>
          <Redirect to='/' />
        </Route>
        <Route path='*' component={() => <ErrorPage code={404} />} />
      </Switch>
    </>
  );
};
export default AppRouter;
