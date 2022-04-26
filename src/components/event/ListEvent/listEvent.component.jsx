import NcImage from '../../../components/commons/NcImage/NcImage.component';
import Pagination from '../../../components/commons/Pagination/Pagination';
import React from 'react';

const ListEvent = (props) => {
  const { listevent } = props;
  console.log('listevent: ', listevent);
  return (
    <div className='flex flex-col space-y-8'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8'>
          <div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg'>
            <table className='min-w-full divide-y divide-neutral-200 dark:divide-neutral-800'>
              <thead className='bg-neutral-50 dark:bg-neutral-800'>
                <tr className='text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider'>
                  <th scope='col' className='px-6 py-3'>
                    Events
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Description
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Status
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Event Type
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Address
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Host Name
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800'>
                {listevent.map((item) => (
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
                    <td className='px-6 py-4 whitespace-nowrap'>{item.short_description}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{item.status}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{item.event_type_id}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{item.address}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{item.host_name}</td>
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
