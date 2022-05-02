import { PATH, PATH_HIGH_SCHOOL_STUDENT, PATH_UNIVERSITY_MANAGER } from '../constants/Paths/Path';
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
import SchedulePage from '../pages/SchedulePage/SchedulePage';
import UniversityDetailPage from '../pages/university/UniversityDetailPage';
import DetailEventPage from '../pages/event/DetailEvent/DetailEventPage';
import ListEventForHighschoolPage from '../pages/event/ListEvent/ListEventForHighschoolPage';
import ListEventForUniversityPage from '../pages/event/ListEvent/ListEventForUniversityPage';

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
        <Route path={PATH_HIGH_SCHOOL_STUDENT.LIST_EVENT} exact>
          <ListEventPage />
        </Route>
        <Route path={PATH_UNIVERSITY_MANAGER.NEW} exact>
          <ListNewContainer />
        </Route>
        <Route path={PATH_UNIVERSITY_MANAGER.CREATE_EVENT} exact>
          <CreateEventPage />
        </Route>
        <Route path={PATH_UNIVERSITY_MANAGER.PROFILE} exact>
          <UniversityDetailPage />
        </Route>
        <Route path={PATH.SCHEDULE_EVENT} exact>
          <SchedulePage />
        </Route>
        <Route path={PATH.DETAIL_EVENT} exact>
          <DetailEventPage />
        </Route>
        <Route path={PATH.LIST_EVENT_FOR_HIGHSCHOOL} exact>
          <ListEventForHighschoolPage />
        </Route>
        <Route path={PATH.LIST_EVENT_FOR_UNIVERSITY} exact>
          <ListEventForUniversityPage />
        </Route>
        <Route path={PATH_HIGH_SCHOOL_STUDENT.LIST_EVENT} exact>
          <ListEventPage />
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
