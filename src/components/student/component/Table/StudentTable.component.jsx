import { Button, Empty, Skeleton, Tooltip } from 'antd';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import DetailStudentContainer from '../../../../containers/student/DetailStudent/DetailStudent.container';
import NcImage from '../../../commons/NcImage/NcImage.component';
import Pagination from '../../../commons/Pagination/Pagination';
import React, { useState } from 'react';

const TableStudentComponent = (props) => {
  const { listStudent, loading, confirm } = props;
  const [visible, setVisible] = useState(false);

  const [studentID, setStudentID] = useState('');

  const handleVisible = (id) => {
    setStudentID(id);
    setVisible(true);
  };

  return (
    <>
      <div className='flex-grow'>
        <Skeleton avatar paragraph={{ rows: 3 }} active loading={loading}>
          <div className='flex flex-col space-y-8'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8'>
                <div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg'>
                  <table className='min-w-full divide-y divide-neutral-200 dark:divide-neutral-800'>
                    <thead className='bg-neutral-50 dark:bg-neutral-800'>
                      <tr className='text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider'>
                        <th scope='col' className='px-6 py-3'>
                          Họ và tên
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Email
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Trạng thái
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Số điện thoại
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Hành động
                        </th>
                      </tr>
                    </thead>

                    <tbody className='bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800'>
                      {listStudent?.map((item) => (
                        <tr key={item.id}>
                          <td className='px-6 py-4'>
                            <div className='flex items-center w-96 lg:w-auto max-w-md overflow-hidden'>
                              <NcImage
                                containerClassName='flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-14 lg:w-14'
                                src={item.profileImageUrl}
                              />
                              <div className='ml-4 flex-grow'>
                                <h2 className='inline-flex line-clamp-2 text-sm font-semibold  dark:text-neutral-300'>
                                  <a onClick={() => handleVisible(item.id)}>
                                    {item.lastName} {item.middleName} {item.firstName}
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                            <span> {item.emailContact}</span>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                            {item.status === 2 ? (
                              <span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm'>
                                Đang hoạt động
                              </span>
                            ) : (
                              <span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-red-100 text-teal-900 lg:text-sm'>
                                Đã khóa
                              </span>
                            )}
                          </td>

                          <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                            <span> {item.phoneNumber}</span>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
                            {item.status === 2 && (
                              <Tooltip title='Khóa'>
                                <Button
                                  onClick={() => {
                                    confirm(item);
                                  }}
                                  icon={<LockOutlined style={{ color: 'red' }} />}
                                />
                              </Tooltip>
                            )}
                            {item.status === 3 && (
                              <Tooltip title='Mở Khóa'>
                                <Button
                                  onClick={() => {
                                    confirm(item);
                                  }}
                                  icon={<UnlockOutlined style={{ color: 'green' }} />}
                                />
                              </Tooltip>
                            )}
                          </td>
                        </tr>
                      ))}
                      {listStudent?.length === 0 && (
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
        </Skeleton>
      </div>
      <DetailStudentContainer visible={visible} studentID={studentID} setVisible={setVisible} />
    </>
  );
};
export default TableStudentComponent;
