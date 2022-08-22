import React, { useEffect, useState } from 'react';
import ListNewDashboard from './ListNewDashboard';
import WelcomeComponent from './Welcome.component';
import { Badge, Divider, Typography } from 'antd';
import BackgroundSection from '../../../../components/commons/BackgroundSection/BackgroundSection.component';
import SectionSliderPostsComponent from '../../../../components/commons/SectionSliderPosts/SectionSliderPosts.component';
import { useSelector } from 'react-redux';
import { HIGH_SCHOOL_MANAGER, HIGH_SCHOOL_STUDENT, UNIVERSITY_MANAGER } from '../../../../constants/RoleType';
import UniversityCalendarContainer from '../../../universityManager/calendar/UniversityCalendar.container';
import HighSchoolCalendarContainer from '../../../highSchoolManager/calendar/HighSchoolCalendar.container';
import FlexMonsterContainer from '../../../universityManager/flexMonsterData/FlexMonster.container';
import ListStudentForHighSchoolContainer from '../../../highSchoolManager/students/ListStudentForHighSchoolContainer';
import SingleNewContainer from '../../news/SingleNew.container';
import { getAOnGoingEventByUniversityId } from '../../../../services/PublishService';
import { PATH } from '../../../../constants/Paths/Path';
import Card11 from '../../../../components/commons/Card/Card11/Card11.component';
import { useHistory } from 'react-router-dom';
import { EVENT_HS, EVENT_ONLINE, EVENT_ORG, EVENT_UNI } from '../../../../constants/AppConst';
import { eventType } from '../../../../utils/common';

const HomePageComponent = () => {
  const { listNewPublish, isFetching } = useSelector((state) => state.listNewPublish);
  const { user, isAuthUser } = useSelector((state) => state.authentication);
  const [listEvent, setListEvent] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { Text, Title } = Typography;
  const getListEvent = () => {
    if (user.roles === HIGH_SCHOOL_STUDENT) {
      getAOnGoingEventByUniversityId(user.highSchoolId)
        .then((res) => {
          setListEvent(res.data.data.list);
          console.log(res.data.data.list);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => getListEvent(), []);

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

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10'>
              {!isLoading
                ? listEvent.map((event) => (
                    <div onClick={() => history.push(PATH.EVENT + event.event.id)} style={{ cursor: 'pointer' }}>
                      <Badge.Ribbon text={eventType(event.event.eventTypeId)} className='z-10 h-48'>
                        <Card11 key={event.id} event={event.event} />
                      </Badge.Ribbon>
                    </div>
                  ))
                : null}
            </div>
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
