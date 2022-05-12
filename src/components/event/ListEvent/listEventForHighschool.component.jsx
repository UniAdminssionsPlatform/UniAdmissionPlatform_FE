import LayoutPageWithout from '../../commons/LayoutPage/LayoutPageWithout.component';
import NcImage from '../../commons/NcImage/NcImage.component';
import Pagination from '../../commons/Pagination/Pagination';
import React from 'react';

const ListEventForHighschoolComponent = (props) => {
  const { eventforhighschool } = props;
  console.log('list: ', eventforhighschool);
  return (
    <LayoutPageWithout LayoutPage subHeading='DANH SÁCH CÁC SỰ KIỆN ĐANG ĐỢI TRƯỜNG PHÊ DUYỆT'>
      <div className='flex flex-col space-y-8'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8'>
            <div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg'>
              <table className='min-w-full divide-y divide-neutral-200 dark:divide-neutral-800'>
                <thead className='bg-neutral-50 dark:bg-neutral-800'>
                  <tr className='text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider'>
                    <th scope='col' className='px-6 py-3'>
                      Sự Kiện
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Mô Tả
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Trạng Thái
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Loại Sự Kiện
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Địa Chỉ
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Người Dẫn Chương Trình
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Slot
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800'>
                  {eventforhighschool.map((item) => (
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
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {item.event.status ? (
                          <span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm'>
                            Đã Kích Hoạt
                          </span>
                        ) : (
                          <span className='px-2 inline-flex text-sm text-neutral-500 dark:text-neutral-400 rounded-full'>
                            Đang Bị Đóng
                          </span>
                        )}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {item.event.event_type_id ? (
                          <span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm'>
                            Tư Vấn Tại Trường
                          </span>
                        ) : (
                          <span className='px-2 inline-flex text-sm text-neutral-500 dark:text-neutral-400 rounded-full'>
                            Trống
                          </span>
                        )}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>{item.event.address}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>{item.event.host_name}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>{item.slot.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </LayoutPageWithout>
  );
};

export default ListEventForHighschoolComponent;
