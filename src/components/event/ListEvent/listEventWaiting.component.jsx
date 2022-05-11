import { Empty, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import NcImage from '../../commons/NcImage/NcImage.component';
import Pagination from '../../commons/Pagination/Pagination';
import React from 'react';

const ListEventWaitingcomponent = (props) => {
  const { handleSelectedEvent, listEvent, setSearchName, debounced, onChangeType } = props;

  console.log('list: ', listEvent);

  const { Option } = Select;

  return (
    <>
      <div className='grid md:grid-cols-3 gap-6 block md:col-span-2' style={{ marginBottom: 10 }}>
        <Input
          type='text'
          placeholder='Tìm kiếm tên sự kiện...'
          onChange={(e) => {
            setSearchName(e.target.value);
            debounced();
          }}
          prefix={<SearchOutlined style={{ marginRight: 15 }} />}
          style={{ borderRadius: 5 }}
        />
        <Select placeholder='Loại sự kiện' style={{ width: 200, borderRadius: 5 }} onChange={onChangeType}>
          <Option value={1}>Online</Option>
          <Option value={2}>Offline tại trường THPT</Option>
          <Option value={3}>Offline tại trường Đại học</Option>
          <Option value={4}>Offline tại địa điểm khác</Option>
        </Select>
      </div>
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
                      <tr key={item.event.id}>
                        <td className='px-6 py-4'>
                          <div className='flex items-center w-96 lg:w-auto max-w-md overflow-hidden'>
                            <NcImage
                              containerClassName='flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-14 lg:w-14'
                              src={item.event.thumbnailUrl}
                            />
                            <div className='ml-4 flex-grow'>
                              <h2 className='inline-flex line-clamp-2 text-sm font-semibold  dark:text-neutral-300'>
                                {item.event.name}
                              </h2>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          {item.event.eventTypeId === 1 && (
                            <span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm'>
                              Online
                            </span>
                          )}
                          {item.event.eventTypeId === 2 && (
                            <span className='px-2 inline-flex text-sm text-neutral-500 dark:text-neutral-400 rounded-full'>
                              Offline tại trường THPT
                            </span>
                          )}
                          {item.event.eventTypeId === 3 && (
                            <span className='px-2 inline-flex text-sm text-neutral-500 dark:text-neutral-400 rounded-full'>
                              Offline tại trường đại học
                            </span>
                          )}
                          {item.event.eventTypeId === 4 && (
                            <span className='px-2 inline-flex text-sm text-neutral-500 dark:text-neutral-400 rounded-full'>
                              Offline tại địa điểm khác
                            </span>
                          )}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                          <span> {item.event.hostName}</span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                          <span> {item.event.targetStudent}</span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-neutral-300'>
                          <a className='text-primary-800 dark:text-primary-500 hover:text-primary-900' href='/#'>
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
                          <a onClick={() => handleSelectedEvent(item)} className='text-rose-600 hover:text-rose-900'>
                            xem chi tiết
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
