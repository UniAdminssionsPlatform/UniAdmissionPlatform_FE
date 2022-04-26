import { SINGLE } from '../../../data/single';
import { changeCurrentPage } from '../../../app/pages/pages';
import { useAppDispatch } from '../../../app/hook';
import DetailEventContent from './DetailEventContent.component';
import DetailEventHeader from './DetailEventHeader.component';
import DetailEventRelatedPosts from './DetailEventRelatedPosts.component';
import NcImage from '../../commons/NcImage/NcImage.component';
import React, { useEffect } from 'react';

const DetailEventComponent = ({ className = '' }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // UPDATE CURRENTPAGE DATA IN PAGE-REDUCERS
    dispatch(changeCurrentPage({ type: '/single/:slug', data: SINGLE }));

    return () => {
      dispatch(changeCurrentPage({ type: '/', data: {} }));
    };
  }, []);

  return (
    <>
      <div className={`nc-PageSingle pt-8 lg:pt-16 ${className}`} data-nc-id='PageSingle'>
        {/* SINGLE HEADER */}
        <header className='container rounded-xl'>
          <div className='max-w-screen-md mx-auto'>
            <DetailEventHeader pageData={SINGLE} />
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <NcImage
          containerClassName='container my-10 sm:my-12'
          className='object-cover w-full h-full rounded-xl'
          src={SINGLE.featuredImage}
        />

        {/* SINGLE MAIN CONTENT */}
        <div className='container'>
          <DetailEventContent data={SINGLE} />
        </div>

        {/* RELATED POSTS */}
        <DetailEventRelatedPosts />
      </div>
    </>
  );
};

export default DetailEventComponent;
