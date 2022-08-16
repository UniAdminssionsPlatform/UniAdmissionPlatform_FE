import { PATH, PATH_HIGH_SCHOOL_MANAGER, PATH_UNIVERSITY_MANAGER } from '../../../constants/Paths/Path';
import ncNanoId from '../../../utils/ncNanoId';

const homePage = [
  {
    id: ncNanoId(),
    name: 'Home Page',
    href: PATH.INDEX
  }
];

const major = [
  {
    id: ncNanoId(),
    href: PATH_HIGH_SCHOOL_MANAGER.INDEX,
    name: 'Đăng ký sự kiện'
  }
];

// const eventMenu = [
//   {
//     id: ncNanoId(),
//     href: PATH.NEW,
//     name: 'Danh sách news'
//   }
// ];

export const DefaultNavigation = [
  {
    id: ncNanoId(),
    href: PATH.INDEX,
    name: 'Trang chủ',
    children: homePage
  },
  {
    id: ncNanoId(),
    href: PATH.LIST_MAJOR_GROUP,
    name: 'Nhóm Ngành Đào Tạo'
  },

  {
    id: ncNanoId(),
    href: PATH.NEW,
    name: 'Danh Sách Tin Tức'
  },
  {
    id: ncNanoId(),
    href: PATH.LIST_UNIVERSITY_PAGE,
    name: 'Danh Sách Trường Đại Học'
  },
  {
    id: ncNanoId(),
    href: PATH.ABOUT_US,
    name: 'Giới Thiệu'
  }
];
