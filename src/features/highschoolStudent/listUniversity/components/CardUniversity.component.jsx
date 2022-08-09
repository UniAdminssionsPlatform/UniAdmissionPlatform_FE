import { Link } from 'react-router-dom';
import { PATH, PATH_HIGH_SCHOOL_STUDENT } from '../../../../constants/Paths/Path';
import NcImage from '../../../../components/commons/NcImage/NcImage.component';
import React from 'react';

const CardUniversityComponent = (props) => {
  const { item } = props;
  return (
    <div
      className={`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full`}
      data-nc-id='Card11'
      //
    >
      <div className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden aspect-w-4 aspect-h-3`}>
        <div>
          <NcImage containerClassName='absolute inset-0' src={item.thumbnailUrl} />
        </div>
      </div>

      <Link
        to={{
          pathname: `${PATH.UNIVERSITY}${item?.id}`
        }}
        className='absolute inset-0'></Link>

      <div className='p-4 flex flex-col flex-grow space-y-3'>
        <h2 className='nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 '>
          <Link to='#' className='line-clamp-2' color='black'>
            {item.name}
          </Link>
        </h2>
        <label>
          SĐT : <span>{item.phoneNumber}</span>
        </label>
        <label>
          Email : <span>{item.email}</span>
        </label>
        <label>
          Địa chỉ : <span>{item.address}</span>
        </label>
      </div>
    </div>
  );
};

export default CardUniversityComponent;
