import { Spin } from 'antd';
import React from 'react';
import Sidebar from '../../../../components/commons/SideBar/SideBar.component';
import SingleContent from '../../news/components/singleContent.component.jsx';
import SingleHeader4 from '../../news/components/singleHeader4.component';
const SingleNewComponent = (props) => {
  const { newDetail, loading } = props;
  return (
    <>
      <div>
        <Spin size='large' spinning={loading}>
          <div className={`nc-PageSingleTemp4Sidebar relative pt-10 lg:pt-16`} data-nc-id='PageSingleTemp4Sidebar'>
            <div className='absolute top-0 inset-x-0 bg-emerald-900	 dark:bg-black/30 h-[480px] md:h-[600px] lg:h-[700px] xl:h-[95vh]'></div>
            <div className='relative'>
              <header className='container rounded-xl '>
                <SingleHeader4 newDetail={newDetail} />
              </header>
              <div className='container flex flex-col my-10 lg:flex-row '>
                <div className='w-full lg:w-3/5 xl:w-2/3 xl:pr-20'>
                  <SingleContent newDetail={newDetail} />
                </div>
                {/*<div className='w-full mt-12 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3'>*/}
                {/*  <Sidebar newDetail={newDetail} />*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </Spin>
      </div>
    </>
  );
};

export default SingleNewComponent;
