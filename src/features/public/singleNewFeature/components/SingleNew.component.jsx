import { Divider, Space, Spin, Typography } from 'antd';
import React from 'react';
import SingleContent from '../../news/components/singleContent.component.jsx';
import SingleHeader4 from '../../news/components/singleHeader4.component';
import { Link } from 'react-router-dom';
import Avatar from '../../../../components/commons/Avatar/Avatar.component';
const SingleNewComponent = (props) => {
  const { newDetail, loading } = props;
  const { Text, Title } = Typography;
  return (
    <>
      <div>
        <Spin size='large' spinning={loading}>
          <div className={`nc-PageSingleTemp4Sidebar relative pt-10 lg:pt-16`} data-nc-id='PageSingleTemp4Sidebar'>
            <div className='absolute top-0 inset-x-0 bg-emerald-900 dark:bg-black/30 h-[480px] md:h-[600px] lg:h-[700px] xl:h-[95vh]'></div>
            <div className='relative'>
              <header className='container rounded-xl '>
                <SingleHeader4 newDetail={newDetail} />
              </header>
              <div className='container flex flex-col my-10 lg:flex-row '>
                <div className='w-full lg:w-3/5 xl:w-2/3 xl:pr-20'>
                  <SingleContent newDetail={newDetail} />
                </div>
                <div className='w-full mt-12 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3'>
                  <div className={'nc-WidgetTags rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800'}>
                    <div className='flex flex-wrap p-4 xl:p-5'>
                      <div className='max-w-screen-md mx-auto '>
                        <div className='nc-SingleAuthor flex'>
                          <Link to={''}>
                            <Avatar
                              imgUrl={newDetail.university?.profileImageUrl}
                              userName={newDetail?.hostName}
                              sizeClass='h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24 '
                              radius='rounded-xl'
                            />
                          </Link>
                          <div className='flex flex-col ml-3 max-w-lg sm:ml-5'>
                            <span className='text-xs text-neutral-400 uppercase tracking-wider'>Người viết bài</span>
                            <h2 className='text-lg font-semibold text-neutral-900 dark:text-neutral-200'>
                              <Link to={newDetail?.hostName}>{newDetail.university?.name}</Link>
                            </h2>
                            <span className='text-sm text-neutral-500 sm:text-base dark:text-neutral-300'>
                              {newDetail.university?.websiteUrl}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Divider type={'horizontal'} />
                      <Space direction={'vertical'}>
                        <Text type={'secondary'}>
                          Đơn vị viết bài: <Text strong> {newDetail.university?.name}</Text>
                        </Text>
                        <Text type={'secondary'}>
                          Email:<Text strong> {newDetail.university?.websiteUrl}</Text>
                        </Text>
                        <Text type={'secondary'}>
                          Số điện thoại: <Text strong> {newDetail.university?.phoneNumber}</Text>
                        </Text>
                      </Space>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Spin>
      </div>
    </>
  );
};

export default SingleNewComponent;
