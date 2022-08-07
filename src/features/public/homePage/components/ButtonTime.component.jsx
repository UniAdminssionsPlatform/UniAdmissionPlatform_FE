import React from 'react';
import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Button, Space, Typography } from 'antd';
import moment from 'moment';
import { useSelector } from 'react-redux';
const ButtonTimeComponent = (props) => {
  const { event } = props;
  const { Text } = Typography;
  const { user } = useSelector((state) => state.authentication);
  return (
    <div className={`nc-PostCardLikeAndComment flex items-center space-x-2`} data-nc-id='PostCardLikeAndComment'>
      <Space>
        <Link
          className={`nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-sky-300 transition-colors dark:text-teal-600 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex px-3 h-8 text-xs`}
          title='Thời gian bắt đầu'
          data-nc-id='PostCardCommentBtn'>
          <span className='ml-1 text-neutral-900 dark:text-neutral-200'>
            <CalendarTodayIcon style={{ fontSize: 'medium' }} />{' '}
            <Text type='secondary'>
              {event.timeStart ? moment(event.startTime).format('L') : moment(event.slots.startDate).format('L')}
            </Text>
          </span>
        </Link>
        {event.isFollow === true ? (
          <div
            className={`nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-orange-300 transition-colors dark:text-teal-600 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex px-3 h-8 text-xs`}>
            <span className='ml-1 text-neutral-900 dark:text-neutral-200'>
              <Text type='secondary'>Đã theo dõi</Text>
            </span>
          </div>
        ) : null}
      </Space>
    </div>
  );
};
export default ButtonTimeComponent;
