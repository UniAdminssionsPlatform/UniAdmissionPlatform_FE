import React from 'react';
import ListNewDashboard from './ListNewDashboard';
import WelcomeComponent from './Welcome.component';
import { Divider, Typography } from 'antd';
import BackgroundSection from '../../../../components/commons/BackgroundSection/BackgroundSection.component';
import SectionSliderPostsComponent from '../../../../components/commons/SectionSliderPosts/SectionSliderPosts.component';
import { useSelector } from 'react-redux';
import { HIGH_SCHOOL_MANAGER, HIGH_SCHOOL_STUDENT, UNIVERSITY_MANAGER } from '../../../../constants/RoleType';
import UniversityCalendarContainer from '../../../universityManager/calendar/UniversityCalendar.container';
import HighSchoolCalendarContainer from '../../../highSchoolManager/calendar/HighSchoolCalendar.container';
import FlexMonsterContainer from '../../../universityManager/flexMonsterData/FlexMonster.container';
import ListStudentForHighSchoolContainer from '../../../highSchoolManager/students/ListStudentForHighSchoolContainer';
import SingleNewContainer from '../../news/SingleNew.container';

const HomePageComponent = () => {
  const { listNewPublish, isFetching } = useSelector((state) => state.listNewPublish);
  const { user, isAuthUser } = useSelector((state) => state.authentication);
  const { Text, Title } = Typography;
  return (
    <div className='container relative'>
      <div className='nc-PageHome relative'>
        {/*Welcome Component*/}
        {!isAuthUser ? <WelcomeComponent /> : null}
        {/*University Calendar*/}
        {user.roles === UNIVERSITY_MANAGER ? (
          <div>
            <Divider>
              <Title level={2}> Lịch sự kiện</Title>
            </Divider>
            <UniversityCalendarContainer />
            <Divider>
              <Title level={2}> Báo cáo sự kiện</Title>
            </Divider>
            <FlexMonsterContainer />
          </div>
        ) : null}
        {/*HighSchool Calendar*/}
        {user.roles === HIGH_SCHOOL_MANAGER ? (
          <div>
            <Divider>
              <Title level={2}> Lịch sự kiện</Title>
            </Divider>
            <HighSchoolCalendarContainer />
            <Divider>
              <Title level={2}> Quản lý học sinh</Title>
            </Divider>
            <ListStudentForHighSchoolContainer />
          </div>
        ) : null}
        {/*HighSchool Calendar*/}
        {user.roles === HIGH_SCHOOL_STUDENT ? (
          <div>
            <Divider>
              <Title level={2}> Sự kiện diễn ra tại trường bạn</Title>
            </Divider>
          </div>
        ) : null}
      </div>
      <ListNewDashboard />
      <Divider>
        <Title level={2}> 🎉Tin tức mới nhất</Title>
      </Divider>
      <div className='relative py-16'>
        <BackgroundSection />
        {!isFetching ? <SectionSliderPostsComponent posts={listNewPublish} /> : null}
      </div>
      <Divider>
        <Title level={2}> 🎉Tìm kiếm bài viết</Title>
      </Divider>
      <SingleNewContainer />
    </div>
  );
};
export default HomePageComponent;
