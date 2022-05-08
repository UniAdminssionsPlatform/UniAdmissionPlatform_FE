import React from 'react';
import NcImage from '../../commons/NcImage/NcImage.component';
import Pagination from '../../commons/Pagination/Pagination';

const HighSchoolTableComponent = (props) => {
  const { handleSelectedSchool, listHighSchool } = props;
  return (
    <>
      <div className='flex-grow'>
        <div className='flex flex-col space-y-8'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8'>
              <div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg'>
                <table className='min-w-full divide-y divide-neutral-200 dark:divide-neutral-800'>
                  <thead className='bg-neutral-50 dark:bg-neutral-800'>
                    <tr className='text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider'>
                      <th scope='col' className='px-6 py-3'>
                        Tên Trường
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Trạng Thái
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Email
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Số điện thoại
                      </th>

                      <th scope='col' className='relative px-6 py-3'>
                        <span className='sr-only'>Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800'>
                    {listHighSchool?.map((item) => (
                      <tr key={item.id}>
                        <td className='px-6 py-4'>
                          <div className='flex items-center w-96 lg:w-auto max-w-md overflow-hidden'>
                            <NcImage
                              containerClassName='flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-14 lg:w-14'
                              src={item.thumbnail_url}
                            />
                            <div className='ml-4 flex-grow'>
                              <h2 className='inline-flex line-clamp-2 text-sm font-semibold  dark:text-neutral-300'>
                                {item.name}
                              </h2>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          {item.status === 1 ? (
                            <span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm'>
                              Đã Kích Hoạt
                            </span>
                          ) : (
                            <span className='px-2 inline-flex text-sm text-neutral-500 dark:text-neutral-400 rounded-full'>
                              Đang Bị Đóng
                            </span>
                          )}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                          <span> {item.email}</span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                          <span> {item.phone_number}</span>
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
export default HighSchoolTableComponent;
