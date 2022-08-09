import { Button, Empty, Input, Pagination, Skeleton } from 'antd';
import CardEvent from '../listEvent/Card/CardEvent.component';
import HeadBackgroundCommon from '../../../../../components/commons/HeadBackgroundCommon/HeadBackgroundCommon.component';
import React from 'react';

const ListEventComponent = (props) => {
  const { listEvent, onSearch, loading, total, onChangePage, onClick } = props;
  return (
    <>
      <div className={`nc-PageSearchV2`} data-nc-id='PageSearchV2'>
        <HeadBackgroundCommon className='h-24 2xl:h-28' />
        <div className='container'>
          <header className='max-w-2xl mx-auto -mt-10 flex flex-col lg:-mt-7'>
            <div className='grid grid-cols-3 gap-1'>
              <div className='col-span-2'>
                <Input
                  size='large'
                  placeholder='Bạn muốn tìm sự kiện gì...'
                  allowClear
                  onChange={(e) => {
                    onSearch(e.target.value);
                  }}
                  style={{
                    width: '100%',
                    height: 50,
                    borderRadius: 10
                  }}
                />
              </div>
              <div>
                <Button
                  type='primary'
                  size='large'
                  style={{
                    width: '50%',
                    height: 50,
                    borderRadius: 10
                  }}
                  onClick={() => onClick()}>
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </header>
        </div>
        <div className='container py-16 lg:py-28 space-y-16 lg:space-y-28'>
          <main>
            <Skeleton active loading={loading}>
              {listEvent === '' ? (
                <Empty description={<span>Không tìm thấy sự kiện</span>} />
              ) : (
                <>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10'>
                    {listEvent?.map((item) => (
                      <CardEvent key={item.id} event={item} />
                    ))}
                  </div>
                  {/* PAGINATION */}
                  <div className='flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center'>
                    <Pagination total={total} pageSize={12} onChange={onChangePage} />
                  </div>
                </>
              )}
            </Skeleton>
          </main>
        </div>
      </div>
    </>
  );
};
export default ListEventComponent;
