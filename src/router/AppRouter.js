import { PATH, PATH_HIGH_SCHOOL_STUDENT, PATH_UNIVERSITY_MANAGER } from '../constants/Paths/Path';
import { Redirect, Route, Switch } from 'react-router-dom';
import ChangePasswordPage from '../pages/authen/ChangePasswordPage/ChangePasswordPage';
import CreateEventPage from '../pages/event/CreateEvent/CreateEventPage';
import DetailEventPage from '../pages/event/DetailEvent/DetailEventPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ForgotPasswordPage from '../pages/authen/ForgotPasswordPage/ForgotPasswordPage';
import HeaderContainer from '../containers/Header/Header.container';
import HighSchoolStudentRouter from './components/HighSchoolStudentRouter';
import HomePage from '../pages/HomePage/HomePage';
import ListEventPage from '../pages/event/ListEvent/ListeventPage';
import ListNewContainer from '../containers/listNew/ListNew/ListNew.container';
import LoginPage from '../pages/authen/LoginPage/Login.page';
import NewsPage from '../pages/news/newsPage';
import PolicyPage from '../pages/policy/PolicyPage';
import React from 'react';
import RegistrationPage from '../pages/authen/RegistrationPage/RegistrationPage';
import SchedulePage from '../pages/SchedulePage/SchedulePage';
import ScrollToTop from '../components/commons/ScrollToTopProps/ScrollToTopProps.component';
import UniversityDetailPage from '../pages/university/UniversityDetailPage';
import UniversityManagerRouter from './components/UniversityManagerRouter';

const AppRouter = () => (
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
      <Route path={PATH.SCHEDULE_EVENT} exact>
        <SchedulePage />
      </Route>
      <Route path={PATH.DETAIL_EVENT} exact>
        <DetailEventPage />
      </Route>
      <Route path={PATH.DETAIL_EVENT} exact>
        <DetailEventPage />
      </Route>
      <UniversityManagerRouter
        component={() => <ListNewContainer />}
        path={PATH_UNIVERSITY_MANAGER.NEW}
        key={PATH_UNIVERSITY_MANAGER.NEW}
        exact
      />
      <UniversityManagerRouter
        component={() => <CreateEventPage />}
        path={PATH_UNIVERSITY_MANAGER.CREATE_EVENT}
        key={PATH_UNIVERSITY_MANAGER.CREATE_EVENT}
        exact
      />
      <UniversityManagerRouter
        component={() => <UniversityDetailPage />}
        path={PATH_UNIVERSITY_MANAGER.PROFILE}
        key={PATH_UNIVERSITY_MANAGER.PROFILE}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <ListEventPage />}
        path={PATH_HIGH_SCHOOL_STUDENT.LIST_EVENT}
        key={PATH_HIGH_SCHOOL_STUDENT.LIST_EVENT}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <NewsPage />}
        path={PATH_HIGH_SCHOOL_STUDENT.NEWS}
        key={PATH_HIGH_SCHOOL_STUDENT.NEWS}
        exact
      />
      <Route path='/index.html'>
        <Redirect to='/' />
      </Route>
      <Route path='*' component={() => <ErrorPage code={404} />} />
    </Switch>
  </>
);
export default AppRouter;
