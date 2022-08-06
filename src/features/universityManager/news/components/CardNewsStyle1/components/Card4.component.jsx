import { Link } from 'react-router-dom';
import { PATH_HIGH_SCHOOL_STUDENT } from '../../../../../../constants/Paths/Path';
import NcImage from '../../../../../../components/commons/NcImage/NcImage.component';
import React from 'react';
import { Divider, Tag } from 'antd';
import { TagOutlined } from '@ant-design/icons';

const Card4 = (props) => {
  const { post } = props;
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
          pathname: PATH_HIGH_SCHOOL_STUDENT.NEWS_DETAIL,
          state: {
            newsId: post?.id
          }
        }}
        className='absolute inset-0'></Link>

      <div className='p-4 flex flex-col flex-grow'>
        <div className='space-y-2.5 mb-4'>
          <h2 className='nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 '>
            {post.title}
          </h2>
          <div>
            <Tag color='blue'>Đơn vị viết bài</Tag>: {post.university.name}
          </div>
          <div>
            <Tag color='blue'>Ngày viết bài </Tag>: {post.createDate}
          </div>
          <Divider orientation='left' style={style}>
            Các thẻ bài viết
          </Divider>
          <div>
            {post?.tagList.map((item, index) => (
              <Tag key={index} color='volcano' icon={<TagOutlined />}>
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
