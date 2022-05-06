import { DEMO_POSTS } from '../../../data/posts';
import { Helmet } from 'react-helmet';
import ButtonPrimary from '../../field/ButtonPrimary/ButtonPrimary.component';
import Card11 from '../../commons/Card/Card11/Card11.component';
import NcImage from '../../commons/NcImage/NcImage.component';
import Pagination from '../../commons/Pagination/Pagination';
import React from 'react';

// Tag and category have same data type - we will use one demo data
const posts = DEMO_POSTS.filter((_, i) => i < 16);

const ListMajorComponent = ({ className = '' }) => (
  <div className={`nc-PageArchive overflow-hidden ${className}`} data-nc-id='PageArchive'>
    <Helmet>
      <title>Trang chủ || Chuyên ngành đào tạo</title>
    </Helmet>

    {/* HEADER */}
    <div className='w-full px-2 xl:max-w-screen-2xl mx-auto'>
      <div className='rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 overflow-hidden '>
        <NcImage
          containerClassName='absolute inset-0'
          src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center'>
          <h2 className='inline-block align-middle text-5xl font-semibold md:text-7xl text-white'>
            Nhóm Ngành Đào Tạo
          </h2>
        </div>
      </div>
    </div>
    {/* ====================== END HEADER ====================== */}

    <div className='container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28'>
      <div>
        {/* LOOP ITEMS */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10'>
          {posts.map((post) => (
            <Card11 key={post.id} post={post} />
          ))}
        </div>

        {/* PAGINATIONS */}
        <div className='flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center'>
          <Pagination />
          <ButtonPrimary>Show me more</ButtonPrimary>
        </div>
      </div>
    </div>
  </div>
);

export default ListMajorComponent;
