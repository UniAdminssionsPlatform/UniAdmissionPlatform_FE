import React from 'react';
import NcImage from '../../commons/NcImage/NcImage.component';
import Pagination from '../../commons/Pagination/Pagination';
import { Empty } from 'antd';

const ListEventWaitingcomponent = (props) => {
  const { handleSelectedSchool, listEvent } = props;
  return (
    <>
      <input type='text' />
      <div className='flex-grow'>
        <div className='flex flex-col space-y-8'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8'>
              <div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg'>
                <table className='min-w-full divide-y divide-neutral-200 dark:divide-neutral-800'>
                  <thead className='bg-neutral-50 dark:bg-neutral-800'>
                    <tr className='text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider'>
                      <th scope='col' className='px-6 py-3'>
                        Sự kiện
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Loại sự kiện
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Diễn giả
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Số lượng tối đa
                      </th>

                      <th scope='col' className='relative px-6 py-3'>
                        <span className='sr-only'>Edit</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className='bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800'>
                    {listEvent?.map((item) => (
                      <tr key={item.id}>
                        <td className='px-6 py-4'>
                          <div className='flex items-center w-96 lg:w-auto max-w-md overflow-hidden'>
                            <NcImage
                              containerClassName='flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-14 lg:w-14'
                              src={item.thumbnailUrl}
                            />
                            <div className='ml-4 flex-grow'>
                              <h2 className='inline-flex line-clamp-2 text-sm font-semibold  dark:text-neutral-300'>
                                {item.name}
                              </h2>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          {item.eventTypeId === 1 ? (
                            <span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm'>
                              Online
                            </span>
                          ) : (
                            <span className='px-2 inline-flex text-sm text-neutral-500 dark:text-neutral-400 rounded-full'>
                              Offline
                            </span>
                          )}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                          <span> {item.hostName}</span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                          <span> {item.targetStudent}</span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-neutral-300'>
                          <a
                            className='text-primary-800 dark:text-primary-500 hover:text-primary-900'
                            onClick={() => handleSelectedSchool(item)}>
                            lựa chọn
                          </a>
                          {/*{item.status === 1 ? (*/}
                          {/*  <a*/}
                          {/*    className='text-primary-800 dark:text-primary-500 hover:text-primary-900'*/}
                          {/*    onClick={() => handleSelectedEvent(item)}>*/}
                          {/*    lựa chọn*/}
                          {/*  </a>*/}
                          {/*) : (*/}
                          {/*  <a className='text-primary-800/25 dark:text-primary-500 cursor-not-allowed'>*/}
                          {/*    không khả dụng*/}
                          {/*  </a>*/}
                          {/*)}*/}
                          {` | `}
                          <a href='/#' className='text-rose-600 hover:text-rose-900'>
                            xem lịch sử
                          </a>
                        </td>
                      </tr>
                    ))}
                    {listEvent?.length === 0 && (
                      <div style={{ textAlign: 'center', padding: 15, paddingLeft: 50 }}>
                        <Empty style={{ textAlign: 'center' }} />
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
};
export default ListEventWaitingcomponent;
