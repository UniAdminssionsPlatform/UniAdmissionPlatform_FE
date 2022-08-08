import { Link } from 'react-router-dom';
import { PATH } from '../../../../../../constants/Paths/Path';
import NcImage from '../../../../../../components/commons/NcImage/NcImage.component';
import React from 'react';
import { Divider, Tag, Typography, Space } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import moment from 'moment';

const Card4 = (props) => {
  const { post } = props;
  const { Text } = Typography;
  const style = {
    color: '#0099FF'
  };

  return (
    <div
      className={`nc-Card4 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full`}
      data-nc-id='Card4'>
      <span className='block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden'>
        <NcImage containerClassName='absolute inset-0' src={post.thumbnailUrl} />
      </span>

      <Link
        to={{
          pathname: `${PATH.NEW}${post?.id}`
        }}
        className='absolute inset-0'></Link>

      <div className='p-4 flex flex-col flex-grow'>
        <div className='space-y-2.5 mb-4'>
          <h2 className='nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 '>
            {post.title}
          </h2>
          <div>
            <Tag color='blue' style={{ borderRadius: '6px' }}>
              Đơn vị viết bài
            </Tag>
            : {post.university.name}
          </div>
          <div className={`flex flex-nowrap`}>
            <Tag color='blue' style={{ borderRadius: '6px' }}>
              Thời gian viết bài :{' '}
            </Tag>
            <div
              className={`nc-PostCardLikeAndComment flex items-center space-x-1 pr-2`}
              data-nc-id='PostCardLikeAndComment'>
              <Space>
                <Link
                  className={`nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-sky-300 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 flex px-3 h-8 text-xs`}
                  title='Thời gian viết bài'
                  data-nc-id='PostCardCommentBtn'>
                  <span className='ml-1 text-neutral-900 dark:text-neutral-200'>
                    <CalendarTodayIcon style={{ fontSize: 'medium', color: 'black' }} />
                    <Text type='secondary'>{moment(post.createDate).format('L')}</Text>
                  </span>
                </Link>
              </Space>
            </div>
          </div>
          <Divider orientation='left' style={style}>
            Các thẻ bài viết
          </Divider>
          <div>
            {post?.tagList.map((item, index) => (
              <Tag key={index} color='volcano' icon={<TagOutlined />} style={{ borderRadius: '8px' }}>
                {item.name}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
