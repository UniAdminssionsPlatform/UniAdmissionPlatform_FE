import {
  PATH,
  PATH_HIGH_SCHOOL_MANAGER,
  PATH_HIGH_SCHOOL_STUDENT,
  PATH_UNIVERSITY_MANAGER
} from '../constants/Paths/Path';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import AboutUsPage from '../pages/public/AboutUsPage';
import CertificationPage from '../pages/highSchoolStudent/CertificationPage';
import ChangePasswordPage from '../pages/auth/ChangePasswordPage';
import DetailEventForStudentPage from '../pages/highSchoolStudent/DetailEventPage';
import DetailEventPage from '../pages/universityManager/DetailEventPage';
import DetailMajorGroupPage from '../pages/highSchoolStudent/DetailMajorGroupPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import EventCheckPage from '../pages/universityManager/EventCheckPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import HeaderContainer from '../features/public/header/Header.container';
import HighSchoolManagerRouter from './components/HighSchoolManagerRouter';
import HighSchoolStudentRouter from './components/HighSchoolStudentRouter';
import HighschoolProfilePage from '../pages/highSchoolManager/highschoolProfilePage';
import HomePage from '../pages/public/HomePage';
import ListEventGorStudentPage from '../pages/highSchoolStudent/ListEventForStudentPage';
import ListMajorGroupPage from '../pages/highSchoolStudent/ListMajorGroupPage';
import ListUniversityToFollowPage from '../pages/highSchoolStudent/ListUniversityToFollowPage';
import LoginPage from '../pages/auth/Login.page';
import ManageProfilePage from '../pages/auth/manageProfilePage';
import ManagementRouter from './ManagementRouter';
import NewsDetailStudentPage from '../pages/highSchoolStudent/NewsDetailStudentPage';
import NewsPageStudent from '../pages/highSchoolStudent/NewsPageStudent';
import PolicyPage from '../pages/public/PolicyPage';
import ProSideBarComponent from './ProSideBar.component';
import PublicEventPage from '../pages/universityManager/PublicEventPage';
import React from 'react';
import RegistrationPage from '../pages/auth/RegistrationPage';
import ScrollToTop from '../components/commons/ScrollToTopProps/ScrollToTopProps.component';
import SingleEventPage from '../pages/public/SingleEventPage';
import SingleHighSchoolProfilePage from '../pages/public/SingleHighSchoolProfilePage';
import SingleNewPage from '../pages/public/SingleNewPage';
import SingleUniversityProfilePage from '../pages/public/SingleUniversityProfilePage';
import StudentProfilePage from '../pages/auth/StudentProfilePage.jsx';
import StudentScorePage from '../pages/highSchoolStudent/StudentScorePage.jsx';
import UnPublicEventPage from '../pages/universityManager/UnpublicEventPage';
import UniversityDetailPage from '../pages/universityManager/UniversityDetailPage';
import UniversityDetailToFollowPage from '../pages/UniversityProfilePage/UniversityDetailToFollowPage';
import UniversityListAccountPendingPage from '../pages/universityManager/UniversityListAccountPendingPage';
import UniversityManagerRouter from './components/UniversityManagerRouter';
import UpdateHighSchoolPage from '../pages/highSchoolManager/updateHighschoolProfilePage';
import UpdateUniversityProfilePage from '../pages/UniversityProfilePage/EditUniversityProfilePage';
import WaitingApprovePage from '../pages/auth/WaitingApprovePage';

const AppRouter = () => (
  // const location = useLocation();
  <>
    <ScrollToTop />
    <HeaderContainer />
    {/*<div className={'fixed'}>{location.pathname === PATH.INDEX ? <ProSideBarComponent /> : null}</div>*/}
    <Switch>
      //Manage publish page
      <Route path={PATH.EVENT_PAGE} exact>
        <SingleEventPage />
      </Route>
      <Route path={PATH.NEW_PAGE} exact>
        <SingleNewPage />
      </Route>
      <Route path={PATH.NEW} exact>
        <NewsPageStudent />
      </Route>
      <Route path={PATH.UNIVERSITY_PROFILE_PAGE} exact>
        <SingleUniversityProfilePage />
      </Route>
      <Route path={PATH.HIGH_SCHOOL_PROFILE_PAGE} exact>
        <SingleHighSchoolProfilePage />
      </Route>
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
      <Route path={PATH.LIST_UNIVERSITY_PAGE} exact>
        <ListUniversityToFollowPage />
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
      <HighSchoolManagerRouter
        component={() => <HighschoolProfilePage />}
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
      <HighSchoolManagerRouter
        component={() => <HighschoolProfilePage />}
        path={PATH_HIGH_SCHOOL_MANAGER.PROFILE}
        key={PATH_HIGH_SCHOOL_MANAGER.PROFILE}
        exact
      />
      <HighSchoolManagerRouter
        component={() => <ManageProfilePage />}
        path={PATH_HIGH_SCHOOL_MANAGER.ACCOUNT_PROFILE}
        key={PATH_HIGH_SCHOOL_MANAGER.ACCOUNT_PROFILE}
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
        component={() => <DetailEventForStudentPage />}
        path={PATH_HIGH_SCHOOL_STUDENT.DETAIL_EVENT}
        key={PATH_HIGH_SCHOOL_STUDENT.DETAIL_EVENT}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <StudentProfilePage />}
        path={PATH_HIGH_SCHOOL_STUDENT.PROFILE}
        key={PATH_HIGH_SCHOOL_STUDENT.PROFILE}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <HighschoolProfilePage />}
        path={PATH_HIGH_SCHOOL_STUDENT.HIGH_SCHOOL_PROFILE}
        key={PATH_HIGH_SCHOOL_STUDENT.HIGH_SCHOOL_PROFILE}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <NewsPageStudent />}
        path={PATH_HIGH_SCHOOL_STUDENT.NEWS}
        key={PATH_HIGH_SCHOOL_STUDENT.NEWS}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <NewsDetailStudentPage />}
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
        component={() => <UnPublicEventPage />}
        path={PATH_UNIVERSITY_MANAGER.UN_PUBLIC_EVENT}
        key={PATH_UNIVERSITY_MANAGER.UN_PUBLIC_EVENT}
        exact
      />
      <HighSchoolStudentRouter
        component={() => <ListUniversityToFollowPage />}
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
      <HighSchoolStudentRouter
        component={() => <UniversityDetailToFollowPage />}
        path={PATH_HIGH_SCHOOL_STUDENT.PROFILE_UNIVERSITY}
        key={PATH_HIGH_SCHOOL_STUDENT.PROFILE_UNIVERSITY}
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
      <UniversityManagerRouter
        component={() => <EventCheckPage />}
        path={PATH_UNIVERSITY_MANAGER.EVENT_CHECK}
        key={PATH_UNIVERSITY_MANAGER.EVENT_CHECK}
        exact
      />
      <UniversityManagerRouter
        component={() => <ManageProfilePage />}
        path={PATH_UNIVERSITY_MANAGER.ACCOUNT_PROFILE}
        key={PATH_UNIVERSITY_MANAGER.ACCOUNT_PROFILE}
        exact
      />
      //University
      <Route path={PATH.ABOUT_US} exact>
        <AboutUsPage />
      </Route>
      <Route path='/index.html'>
        <Redirect to='/' />
      </Route>
      <Route path={PATH.PAGE_NOT_FOUND} exact>
        <ErrorPage code={404} />
      </Route>
      //Index Page
      <ManagementRouter />
      <Route path='*' component={() => <ErrorPage code={404} />} />
    </Switch>
  </>
);
export default AppRouter;
