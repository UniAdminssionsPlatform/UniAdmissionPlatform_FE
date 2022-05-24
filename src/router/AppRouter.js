import {
  PATH,
  PATH_HIGH_SCHOOL_MANAGER,
  PATH_HIGH_SCHOOL_STUDENT,
  PATH_UNIVERSITY_MANAGER
} from '../constants/Paths/Path';
import { Redirect, Route, Switch } from 'react-router-dom';
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
import RegisEventPage from '../pages/event/RegisEventPage';
import PolicyPage from '../pages/policy/PolicyPage';
import SchedulePage from '../pages/SchedulePage/SchedulePage';
import UniversityDetailPage from '../pages/university/UniversityDetailPage';
import DetailEventPage from '../pages/event/DetailEvent/DetailEventPage';
import UniversityManagerRouter from './components/UniversityManagerRouter';
import HighSchoolStudentRouter from './components/HighSchoolStudentRouter';
import HighSchoolManagerRouter from './components/HighSchoolManagerRouter';
import SlotManagerPage from '../pages/SlotManagerPage/SlotManagerPage';
import ListEventForHighSchoolPage from '../pages/event/ListEvent/ListEventForHighschoolPage';
import ListEventForUniversityPage from '../pages/event/ListEvent/ListEventForUniversityPage';
import ListMajorGroupPage from '../pages/majorGroup/ListMajorGroup/ListMajorGroupPage';
import DetailMajorGroupPage from '../pages/majorGroup/DetailMajorGroup/DetailMajorGroupPage';
import NewsPage from '../pages/news/newsPage';
import CreateEventPage from '../pages/event/CreateEventPage';
import ListStudentForSchoolPage from '../pages/student/ListStudent/ListStudentForHighschoolPage';
import NewsDetailPage from '../pages/newsDetail/newsDetailPage';
import CalendarPage from '../pages/Calendar/CalendarPage';

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
        <Route path={PATH.LIST_MAJOR_GROUP} exact>
          <ListMajorGroupPage />
        </Route>
        <Route path={PATH.DETAIL_MAJOR_GROUP} exact>
          <DetailMajorGroupPage />
        </Route>
        <HighSchoolManagerRouter
          component={() => <ListEventForHighSchoolPage />}
          path={PATH_HIGH_SCHOOL_MANAGER.LIST_EVENT}
          key={PATH_HIGH_SCHOOL_MANAGER.LIST_EVENT}
          exact
        />
        <HighSchoolManagerRouter
          component={() => <ListStudentForSchoolPage />}
          path={PATH_HIGH_SCHOOL_MANAGER.LIST_STUDENT}
          key={PATH_HIGH_SCHOOL_MANAGER.LIST_STUDENT}
          exact
        />

        <UniversityManagerRouter
          component={() => <ListEventForUniversityPage />}
          path={PATH_UNIVERSITY_MANAGER.LIST_EVENT}
          key={PATH_UNIVERSITY_MANAGER.LIST_EVENT}
          exact
        />
        <Route path={PATH_HIGH_SCHOOL_STUDENT.LIST_EVENT} exact>
          <ListEventPage />
        </Route>
        <UniversityManagerRouter
          component={() => <ListNewContainer />}
          path={PATH_UNIVERSITY_MANAGER.NEW}
          key={PATH_UNIVERSITY_MANAGER.NEW}
          exact
        />
        <UniversityManagerRouter
          component={() => <CalendarPage />}
          path={PATH_UNIVERSITY_MANAGER.CALENDAR}
          key={PATH_UNIVERSITY_MANAGER.CALENDAR}
          exact
        />
        <UniversityManagerRouter
          component={() => <RegisEventPage />}
          path={PATH_UNIVERSITY_MANAGER.REGIS_EVENT}
          key={PATH_UNIVERSITY_MANAGER.REGIS_EVENT}
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
        <HighSchoolManagerRouter
          component={() => <SlotManagerPage />}
          path={PATH_HIGH_SCHOOL_MANAGER.SLOT_MANAGER}
          key={PATH_HIGH_SCHOOL_MANAGER.SLOT_MANAGER}
          exact
        />
        <HighSchoolStudentRouter
          component={() => <NewsPage />}
          path={PATH_HIGH_SCHOOL_STUDENT.NEWS}
          key={PATH_HIGH_SCHOOL_STUDENT.NEWS}
          exact
        />
        <HighSchoolStudentRouter
          component={() => <NewsDetailPage />}
          path={PATH_HIGH_SCHOOL_STUDENT.NEWS_DETAIL}
          key={PATH_HIGH_SCHOOL_STUDENT.NEWS_DETAIL}
          exact
        />
        <Route path='/index.html'>
          <Redirect to='/' />
        </Route>
        <Route path='*' component={() => <ErrorPage code={404} />} />
      </Switch>
    </>
  );
};
export default AppRouter;
