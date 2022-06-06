import {
  PATH,
  PATH_HIGH_SCHOOL_MANAGER,
  PATH_HIGH_SCHOOL_STUDENT,
  PATH_UNIVERSITY_MANAGER
} from '../constants/Paths/Path';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import CalendarPage from '../pages/Calendar/CalendarPage';
import CertificationPage from '../pages/certification/certificationPage';
import ChangePasswordPage from '../pages/authen/ChangePasswordPage/ChangePasswordPage';
import CreateEventPage from '../pages/event/CreateEventPage';
import DetailEventPage from '../pages/event/DetailEvent/DetailEventPage';
import DetailMajorGroupPage from '../pages/majorGroup/DetailMajorGroup/DetailMajorGroupPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ForgotPasswordPage from '../pages/authen/ForgotPasswordPage/ForgotPasswordPage';
import HeaderContainer from '../features/public/header/Header.container';
import HighSchoolManagerRouter from './components/HighSchoolManagerRouter';
import HighSchoolStudentRouter from './components/HighSchoolStudentRouter';
import HomePage from '../pages/HomePage/HomePage';
import ListEventForHighSchoolPage from '../pages/event/ListEvent/ListEventForHighschoolPage';
import ListEventPage from '../pages/event/ListEvent/ListeventPage';
import ListMajorGroupPage from '../pages/majorGroup/ListMajorGroup/ListMajorGroupPage';
import ListNewContainer from '../features/public/news/ListNew.container';
import ListStudentForHighschoolPage from '../pages/student/ListStudent/ListStudentForHighschoolPage';
import LoginPage from '../pages/authen/LoginPage/Login.page';
import ManageProfilePage from '../pages/profile/manageProfilePage';
import NewsDetailPage from '../pages/newsDetail/newsDetailPage';
import NewsPage from '../pages/news/newsPage';
import PolicyPage from '../pages/policy/PolicyPage';
import React from 'react';
import RegisEventPage from '../pages/event/RegisEventPage';
import RegistrationPage from '../pages/authen/RegistrationPage/RegistrationPage';
import SchedulePage from '../pages/SchedulePage/SchedulePage';
import ScrollToTop from '../components/commons/ScrollToTopProps/ScrollToTopProps.component';
import SlotManagerPage from '../pages/SlotManagerPage/SlotManagerPage';
import StudentScorePage from '../pages/student/StudentScore/StudentScorePage';
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
        component={() => <ListStudentForHighschoolPage />}
        path={PATH_HIGH_SCHOOL_MANAGER.LIST_STUDENT}
        key={PATH_HIGH_SCHOOL_MANAGER.LIST_STUDENT}
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
      <HighSchoolStudentRouter
        component={() => <ManageProfilePage />}
        path={PATH_HIGH_SCHOOL_STUDENT.UPDATE_PROFILE}
        key={PATH_HIGH_SCHOOL_STUDENT.UPDATE_PROFILE}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <CertificationPage />}
        path={PATH_HIGH_SCHOOL_STUDENT.CERTIFICATION}
        key={PATH_HIGH_SCHOOL_STUDENT.CERTIFICATION}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <StudentScorePage />}
        path={PATH_HIGH_SCHOOL_STUDENT.SCORE}
        key={PATH_HIGH_SCHOOL_STUDENT.SCORE}
        exact
      />
      <UniversityManagerRouter
        component={() => <CalendarPage />}
        path={PATH_UNIVERSITY_MANAGER.CALENDAR}
        key={PATH_UNIVERSITY_MANAGER.CALENDAR}
        exact
      />
      <Route path={PATH.ABOUT_US} exact>
        <AboutUsPage />
      </Route>
      <Route path='/index.html'>
        <Redirect to='/' />
      </Route>
      <Route path='*' component={() => <ErrorPage code={404} />} />
    </Switch>
  </>
);
export default AppRouter;
