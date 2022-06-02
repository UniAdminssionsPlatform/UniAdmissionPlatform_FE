import NcImage from '../../../components/commons/NcImage/NcImage.component';
import Pagination from '../../../components/commons/Pagination/Pagination';
import React from 'react';
import { Button } from 'antd';

const ListEvent = (props) => {
  const { listEventRegister, handleBookingSlot } = props;
  return (
    <div className='flex flex-col space-y-8'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8'>
          <div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg'>
            <table className='min-w-full divide-y divide-neutral-200 dark:divide-neutral-800'>
              <thead className='bg-neutral-50 dark:bg-neutral-800'>
                <tr className='text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider'>
                  <th scope='col' className='px-6 py-3'>
                    Tên sự kiện
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Chú giải
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Trạng thái
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Loại sự kiện
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Địa chỉ
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800'>
                {listEventRegister?.map((item) => (
                  <tr key={item.event.id}>
                    <td className='px-6 py-4'>
                      <div className='flex items-center w-96 lg:w-auto max-w-md overflow-hidden'>
                        <NcImage
                          containerClassName='flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-14 lg:w-14'
                          src={item.event.thumbnail_url}
                        />
                        <div className='ml-4 flex-grow'>
                          <h2 className='inline-flex line-clamp-2 text-sm font-semibold  dark:text-neutral-300'>
                            {item.event.name}
                          </h2>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>{item.event.short_description}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{item.event.status}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{item.event.event_type_id}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{item.event.address}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <Button
                        type='primary'
                        danger
                        onClick={() => {
                          handleBookingSlot(item.event.id);
                        }}>
                        Lựa chọn
                      </Button>
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
  );
};

export default ListEvent;
