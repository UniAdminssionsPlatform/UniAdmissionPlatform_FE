import {
  PATH,
  PATH_HIGH_SCHOOL_MANAGER,
  PATH_HIGH_SCHOOL_STUDENT,
  PATH_UNIVERSITY_MANAGER
} from '../constants/Paths/Path';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutUsPage from '../pages/public/AboutUsPage';
import CertificationPage from '../pages/highSchoolStudent/CertificationPage';
import ChangePasswordPage from '../pages/auth/ChangePasswordPage';
import DetailEventPage from '../pages/universityManager/DetailEventPage';
import DetailMajorGroupPage from '../pages/highSchoolStudent/DetailMajorGroupPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import HeaderContainer from '../features/public/header/Header.container';
import HighSchoolProfilePage from '../pages/highSchoolManager/HighschoolProfilePage';
import HighSchoolStudentRouter from './components/HighSchoolStudentRouter';
import HomePage from '../pages/public/HomePage';
import ListEventPage from '../pages/universityManager/ListeventPage';
import ListEventGorStudentPage from '../pages/highSchoolStudent/ListEventForStudentPage';
import ListMajorGroupPage from '../pages/highSchoolStudent/ListMajorGroupPage';
import ListUniversityPage from '../pages/highSchoolStudent/ListUniversityPage';
import LoginPage from '../pages/auth/Login.page';
import ManageProfilePage from '../pages/auth/manageProfilePage';
import ManagementRouter from './ManagementRouter';
import NewsDetailPage from '../pages/public/NewsDetailPage';
import NewsPage from '../pages/public/NewsPage';
import PolicyPage from '../pages/public/PolicyPage';
import PublicEventPage from '../pages/universityManager/PublicEventPage';
import React from 'react';
import RegistrationPage from '../pages/auth/RegistrationPage';
import ScrollToTop from '../components/commons/ScrollToTopProps/ScrollToTopProps.component';
import StudentProfilePage from '../pages/auth/StudentProfilePage.jsx';
import StudentScorePage from '../pages/highSchoolStudent/StudentScorePage.jsx';
import UniversityDetailPage from '../pages/universityManager/UniversityDetailPage';
import UniversityListAccountPendingPage from '../pages/universityManager/UniversityListAccountPendingPage';
import UniversityManagerRouter from './components/UniversityManagerRouter';
import UnpublicEventPage from '../pages/universityManager/UnpublicEventPage';
import UpdateUniversityProfilePage from '../pages/UniversityProfilePage/EditUniversityProfilePage';
import WaitingApprovePage from '../pages/auth/WaitingApprovePage';
const AppRouter = () => (
  <>
    <ScrollToTop />
    <HeaderContainer />
    <Switch>
      //Publish Page
      <Route path={PATH.INDEX} exact>
        <HomePage />
      </Route>
      <Route path={PATH.LOGIN} exact>
        <LoginPage />
      </Route>
      <Route path={PATH.ACCOUNT_WAITING_APPROVE} exact>
        <WaitingApprovePage />
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
        <ListEventGorStudentPage />
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
      <Route path={PATH_HIGH_SCHOOL_STUDENT.LIST_EVENT} exact>
        <ListEventGorStudentPage />
      </Route>
      // HighSchool Page
      <UniversityManagerRouter
        component={() => <UniversityListAccountPendingPage />}
        path={PATH_UNIVERSITY_MANAGER.LIST_ACCOUNT_PENDING}
        key={PATH_UNIVERSITY_MANAGER.LIST_ACCOUNT_PENDING}
        exact
      />
      //Student
      <HighSchoolStudentRouter
        component={() => <ListEventGorStudentPage />}
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
      <HighSchoolStudentRouter
        component={() => <HighSchoolProfilePage />}
        path={PATH_HIGH_SCHOOL_STUDENT.HIGH_SCHOOL_PROFILE}
        key={PATH_HIGH_SCHOOL_STUDENT.HIGH_SCHOOL_PROFILE}
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
      <UniversityManagerRouter
        component={() => <PublicEventPage />}
        path={PATH_UNIVERSITY_MANAGER.PUBLIC_EVENT}
        key={PATH_UNIVERSITY_MANAGER.PUBLIC_EVENT}
        exact
      />
      <UniversityManagerRouter
        component={() => <UnpublicEventPage />}
        path={PATH_UNIVERSITY_MANAGER.UN_PUBLIC_EVENT}
        key={PATH_UNIVERSITY_MANAGER.UN_PUBLIC_EVENT}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <ListUniversityPage />}
        path={PATH_HIGH_SCHOOL_STUDENT.LIST_UNIVERSITY}
        key={PATH_HIGH_SCHOOL_STUDENT.LIST_UNIVERSITY}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <StudentScorePage />}
        path={PATH_HIGH_SCHOOL_STUDENT.SCORE}
        key={PATH_HIGH_SCHOOL_STUDENT.SCORE}
        exact
      />
      //public profile University
      <UniversityManagerRouter
        component={() => <UniversityDetailPage />}
        path={PATH_UNIVERSITY_MANAGER.PROFILE}
        key={PATH_UNIVERSITY_MANAGER.PROFILE}
        exact
      />
      <UniversityManagerRouter
        component={() => <UpdateUniversityProfilePage />}
        path={PATH_UNIVERSITY_MANAGER.UPDATE_PROFILE}
        key={PATH_UNIVERSITY_MANAGER.UPDATE_PROFILE}
        exact
      />
      //University
      <Route path={PATH.ABOUT_US} exact>
        <AboutUsPage />
      </Route>
      <Route path='/index.html'>
        <Redirect to='/' />
      </Route>
      <ManagementRouter />
      <Route path='*' component={() => <ErrorPage code={404} />} />
      //Index Page
    </Switch>
  </>
);
export default AppRouter;
