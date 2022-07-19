import { Helmet } from 'react-helmet';
import { Input, Pagination } from 'antd';
import { ListUniversityPaging } from '../../../services/FollowUniversityService';
import CardUniversityComponent from './components/CardUniversity.component';
import NcImage from '../../../components/commons/NcImage/NcImage.component';
import React, { useEffect, useState } from 'react';

const { Search } = Input;
const ListUniversityToFollowContainer = () => {
  const [universities, setUniversities] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [dataSearch, setDataSearch] = useState({
    page: 1,
    limit: 10,
    name: ''
  });

  const onChange = (page, limit) => {
    setDataSearch({
      ...dataSearch,
      page,
      limit
    });
  };

  const handleChangeUniversityName = (data) => {
    if (data !== undefined) setDataSearch({ ...dataSearch, name: data });
    else setDataSearch({ ...dataSearch, name: '' });
  };
  //Get list universities
  useEffect(() => {
    getList(dataSearch);
  }, [dataSearch]);

  const getList = (data) => {
    ListUniversityPaging(data).then((result) => {
      setUniversities(result.data.data);
      setIsLoading(false);
    });
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Các trường đại học</title>
        </Helmet>

        {/* HEADER */}
        <div className='w-screen px-2 xl:max-w-screen-2xl mx-auto'>
          <div className='rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-16 sm:aspect-h-9 lg:aspect-h-5 overflow-hidden '>
            <NcImage
              containerClassName='absolute inset-0'
              src='https://sixdegreesfromdave.com/wp-content/uploads/2019/05/image3-12.jpg'
              className='object-cover w-full h-full'
            />
          </div>
          {/* CONTENT */}
          <div className='relative container -mt-20 lg:-mt-48'>
            <div className=' bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex items-center'>
              <header className='w-full max-w-3xl mx-auto text-center flex flex-col items-center'>
                <h2 className='text-2xl sm:text-4xl font-semibold'>Tìm Kiếm</h2>
                <span className='block text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300'>
                  Tìm Kiếm Trường Đại Học Mà Bạn Mong Muốn
                </span>
                <Search
                  className='relative w-full mt-8 sm:mt-11 text-left'
                  placeholder='Đại học FPT'
                  style={{ width: 300 }}
                  onSearch={handleChangeUniversityName}
                />
              </header>
            </div>
          </div>
        </div>
        {/* ====================== END HEADER ====================== */}

        <div className='container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28'>
          <main>
            {/*//LOOP ITEMS POSTS */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10'>
              {universities?.list.map((item) => (
                <CardUniversityComponent key={item.id} item={item} />
              ))}
            </div>
            <div className='pt-10'>
              <Pagination total={universities?.total} onChange={onChange} showSizeChanger />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ListUniversityToFollowContainer;
