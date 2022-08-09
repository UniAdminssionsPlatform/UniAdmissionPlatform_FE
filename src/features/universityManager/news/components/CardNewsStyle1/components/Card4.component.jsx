import { Link } from 'react-router-dom';
import { PATH } from '../../../../../../constants/Paths/Path';
import NcImage from '../../../../../../components/commons/NcImage/NcImage.component';
import React from 'react';
import { Divider, Tag, Typography } from 'antd';
import moment from 'moment';
import CategoryBadgeList from '../../../../../../components/commons/CategoryBadgeList/CategoryBadgeList.component';

const Card4 = (props) => {
  const { Title, Text } = Typography;
  const { post } = props;
  const style = {
    color: '#0099FF'
  };
  const dateFormat = 'DD/MM/YYYY HH:mm:ss';
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
            <Text type={'secondary'}>
              Đơn vị viết bài: <Text strong>{post.university.name}</Text>
            </Text>
          </div>
          <div>
            <Text type={'secondary'}>
              Ngày viết bài : <Text strong>{moment(post.createDate).format(dateFormat)}</Text>
            </Text>
          </div>
          <Divider orientation='left' style={style}>
            Các thẻ bài viết
          </Divider>
          <div>
            <CategoryBadgeList tagList={post.tagList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
