import { Link } from 'react-router-dom';
import CategoryBadgeList from '../../CategoryBadgeList/CategoryBadgeList.component';
import NcImage from '../../NcImage/NcImage.component';
import React from 'react';
import { PATH } from '../../../../constants/Paths/Path';
import { Typography } from 'antd';
import moment from 'moment';

const Card9 = ({ className = 'h-full', ratio = 'aspect-w-3 aspect-h-3 sm:aspect-h-4', post, hoverClass = '' }) => {
  const { createDate, description, shortDescription, thumbnailUrl, title, university, postdate, tagList, id } = post;
  const { name, email } = university;
  const { Title, Text } = Typography;
  const renderMeta = () => (
    <div className='inline-flex items-center text-xs text-neutral-300'>
      <div className='block '>
        <h2 className='block text-lg font-semibold text-white '>
          <span className='line-clamp-2' title={title}>
            {title}
          </span>
        </h2>
        <Link to={PATH + id} className='flex mt-2.5 relative'>
          <span className='block text-neutral-200 hover:text-white font-medium truncate'>{name}</span>
          <span className='mx-[6px] font-medium'>·</span>
          <span className='font-normal truncate'>
            <Text strong style={{ color: 'white' }}>
              {moment(postdate).format('LL')}
            </Text>
          </span>
        </Link>
      </div>
    </div>
  );

  return (
    <div
      className={`nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`}
      data-nc-id='Card9'>
      <div className='absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300'></div>
      <div className={`flex items-start relative w-full ${ratio}`}></div>
      <Link to={`${PATH.NEW}${id}`}>
        <NcImage
          containerClassName='absolute inset-0 rounded-3xl'
          className='object-cover w-full h-full rounded-3xl'
          src={thumbnailUrl}
        />
        <span className='absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity'></span>
      </Link>
      }
      <Link
        to={`${PATH.NEW}${id}`}
        className='absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black opacity-50'></Link>
      <div className='absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow'>
        <Link to={`${PATH.NEW}${id}`} className='absolute inset-0'></Link>
        <div className='mb-3'>
          <CategoryBadgeList tagList={tagList} />
        </div>
        {renderMeta()}
      </div>
    </div>
  );
};

export default Card9;
