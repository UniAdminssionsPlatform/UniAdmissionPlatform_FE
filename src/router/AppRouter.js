import {
  PATH,
  PATH_HIGH_SCHOOL_MANAGER,
  PATH_HIGH_SCHOOL_STUDENT,
  PATH_UNIVERSITY_MANAGER
} from '../constants/Paths/Path';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutUsPage from '../pages/public/AboutUsPage';
import CalendarPage from '../pages/universityManager/CalendarPage';
import CertificationPage from '../pages/highSchoolStudent/CertificationPage';
import ChangePasswordPage from '../pages/auth/ChangePasswordPage';
import CreateEventPage from '../pages/universityManager/CreateEventPage';
import DetailEventPage from '../pages/universityManager/DetailEventPage';
import DetailMajorGroupPage from '../pages/highSchoolStudent/DetailMajorGroupPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import HeaderContainer from '../features/public/header/Header.container';
import HighSchoolBookingPage from '../pages/universityManager/manageEvent/HighSchoolBookingPage';
import HighSchoolManagerRouter from './components/HighSchoolManagerRouter';
import HighSchoolProfilePage from '../pages/HighschoolProfilePage/HighschoolProfilePage';
import HighSchoolStudentRouter from './components/HighSchoolStudentRouter';
import HomePage from '../pages/public/HomePage';
import ListEventForHighSchoolPage from '../pages/universityManager/ListEventForHighschoolPage';
import ListEventPage from '../pages/universityManager/ListeventPage';
import ListMajorGroupPage from '../pages/highSchoolStudent/ListMajorGroupPage';
import ListNewContainer from '../features/public/news/ListNew.container';
import ListStudentForHighschoolPage from '../pages/highSchoolManager/ListStudentForHighschoolPage';
import LoginPage from '../pages/auth/Login.page';
import ManageProfilePage from '../pages/auth/manageProfilePage';
import NewsDetailPage from '../pages/public/NewsDetailPage';
import NewsPage from '../pages/public/NewsPage';
import PolicyPage from '../pages/public/PolicyPage';
import React from 'react';
import RegisteredEventHighSchoolPage from '../pages/highSchoolManager/RegisteredEventHighSchoolPage';
import RegisteredEventPage from '../pages/universityManager/manageEvent/RegisteredEventPage';
import RegistrationPage from '../pages/auth/RegistrationPage';
import ScrollToTop from '../components/commons/ScrollToTopProps/ScrollToTopProps.component';
import SelectHighSchoolPage from '../pages/universityManager/manageEvent/SelectHighSchoolPage';
import SlotManagerPage from '../pages/highSchoolManager/SlotManagerPage';
import StudentProfilePage from '../pages/auth/StudentProfilePage.jsx';
import StudentScorePage from '../pages/highSchoolStudent/StudentScorePage.jsx';
import UniversityDetailPage from '../pages/universityManager/UniversityDetailPage';
import UniversityManagerRouter from './components/UniversityManagerRouter';
import UpdateHighSchoolPage from '../pages/HighschoolProfilePage/UpdateHighschoolProfilePage';
import UpdateUniversityProfilePage from '../pages/UniversityProfilePage/EditUniversityProfilePage';
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
        component={() => <SelectHighSchoolPage />}
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
      <UniversityManagerRouter
        component={() => <HighSchoolBookingPage />}
        path={PATH_UNIVERSITY_MANAGER.BOOKING_EVENT}
        key={PATH_UNIVERSITY_MANAGER.BOOKING_EVENT}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <ListEventPage />}
        path={PATH_HIGH_SCHOOL_STUDENT.LIST_EVENT}
        key={PATH_HIGH_SCHOOL_STUDENT.LIST_EVENT}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <StudentProfilePage />}
        path={PATH_HIGH_SCHOOL_STUDENT.PROFILE}
        key={PATH_HIGH_SCHOOL_STUDENT.PROFILE}
        exact
      />
      <HighSchoolManagerRouter
        component={() => <RegisteredEventHighSchoolPage />}
        path={PATH_HIGH_SCHOOL_MANAGER.REGISTERED_EVENT}
        key={PATH_HIGH_SCHOOL_MANAGER.REGISTERED_EVENT}
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
      <UniversityManagerRouter
        component={() => <RegisteredEventPage />}
        path={PATH_UNIVERSITY_MANAGER.REGISTERED_EVENT}
        key={PATH_UNIVERSITY_MANAGER.REGISTERED_EVENT}
        exact
      />
      <HighSchoolManagerRouter
        component={() => <HighSchoolProfilePage />}
        path={PATH_HIGH_SCHOOL_MANAGER.PROFILE}
        key={PATH_HIGH_SCHOOL_MANAGER.PROFILE}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <HighSchoolProfilePage />}
        path={PATH_HIGH_SCHOOL_STUDENT.HIGH_SCHOOL_PROFILE}
        key={PATH_HIGH_SCHOOL_STUDENT.HIGH_SCHOOL_PROFILE}
        exact
      />
      <UniversityManagerRouter
        component={() => <UpdateUniversityProfilePage />}
        path={PATH_UNIVERSITY_MANAGER.UPDATE_PROFILE}
        key={PATH_UNIVERSITY_MANAGER.UPDATE_PROFILE}
        exact
      />
      <HighSchoolManagerRouter
        component={() => <HighSchoolProfilePage />}
        path={PATH_HIGH_SCHOOL_MANAGER.VIEW_PROFILE}
        key={PATH_HIGH_SCHOOL_MANAGER.VIEW_PROFILE}
        exact
      />
      <HighSchoolManagerRouter
        component={() => <UpdateHighSchoolPage />}
        path={PATH_HIGH_SCHOOL_MANAGER.EDIT_PROFILE}
        key={PATH_HIGH_SCHOOL_MANAGER.EDIT_PROFILE}
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
