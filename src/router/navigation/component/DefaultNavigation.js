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

const eventMenu = [
  {
    id: ncNanoId(),
    href: PATH_UNIVERSITY_MANAGER.NEW,
    name: 'Danh sách news'
  }
];

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
    name: 'Nhóm Ngành Đào Tạo',
    children: major
  },

  {
    id: ncNanoId(),
    href: '#',
    name: 'Sự kiện',
    type: 'dropdown',
    children: eventMenu
  }
];
