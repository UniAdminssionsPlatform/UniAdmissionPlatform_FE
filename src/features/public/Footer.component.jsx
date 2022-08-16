import React from 'react';
import Logo from '../../components/commons/Logo/Logo.component';
import { PATH } from '../../constants/Paths/Path';
import { useSelector } from 'react-redux';

const widgetMenus = [
  {
    id: '5',
    title: 'Trang bắt đầu',
    menus: [
      { href: PATH.INDEX, label: 'Trang Chủ' },
      { href: PATH.POLICY, label: 'Điều khoản' }
    ]
  },
  {
    id: '1',
    title: 'Tìm hiểu',
    menus: [
      { href: PATH.LIST_MAJOR_GROUP, label: 'Nhóm Ngành Đào Tạo' },
      { href: PATH.NEW, label: 'Danh Sách Sự Kiện' },
      { href: PATH.LIST_UNIVERSITY_PAGE, label: 'Danh Sách Các Trường Đại Học' }
    ]
  },
  {
    id: '2',
    title: 'Các Trường Đại Học Hot',
    menus: [
      { href: PATH.UNIVERSITY + 1, label: 'Đại Học FPT' },
      { href: PATH.UNIVERSITY + 3, label: 'Đại Học Rmit' },
      { href: PATH.UNIVERSITY + 2, label: 'Đại Học Hutech' },
      { href: PATH.UNIVERSITY + 5, label: 'Học Viện Hàng Không' }
    ]
  },
  {
    id: '4',
    title: 'Về Chúng Tôi',
    menus: [{ href: PATH.ABOUT_US, label: 'UAP Team' }]
  }
];
const FooterComponent = () => {
  const renderWidgetMenuItem = (menu, index) => {
    return (
      <div key={index} className='text-sm'>
        <h2 className='font-semibold text-neutral-700 dark:text-neutral-200'>{menu.title}</h2>
        <ul className='mt-5 space-y-4'>
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className='text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className='nc-Footer relative py-16 lg:py-28 border-t border-neutral-200 dark:border-neutral-700'>
      <div className='container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 '>
        <div className='grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col'>
          <div className='col-span-2 md:col-span-1'>
            <Logo />
          </div>
          <div className='col-span-2 flex items-center md:col-span-3'>
            {/*<SocialsList1 className='flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start' />*/}
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};
export default FooterComponent;
