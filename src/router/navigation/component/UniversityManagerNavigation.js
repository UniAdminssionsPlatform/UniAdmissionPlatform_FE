import { PATH, PATH_UNIVERSITY_MANAGER } from '../../../constants/Paths/Path';
import ncNanoId from '../../../utils/ncNanoId';

const homePage = [
  {
    id: ncNanoId(),
    name: 'Home Page',
    href: PATH.INDEX
  }
];

const eventManager = [
  {
    id: ncNanoId(),
    href: PATH_UNIVERSITY_MANAGER.CREATE_EVENT,
    name: 'Tạo sự kiện'
  }
];

const eventMenu = [
  {
    id: ncNanoId(),
    href: PATH_UNIVERSITY_MANAGER.NEW,
    name: 'Danh sách news'
  }
];
const profile = [
  {
    id: ncNanoId(),
    href: PATH_UNIVERSITY_MANAGER.PROFILE,
    name: 'Hồ sơ trường'
  }
];

export const UniversityManagerNavigation = [
  {
    id: ncNanoId(),
    href: '/',
    name: 'Trang chủ',
    type: '',
    children: homePage
  },
  {
    id: ncNanoId(),
    href: '#',
    name: 'Quản lý sự kiện',
    type: 'dropdown',
    children: eventManager
  },

  {
    id: ncNanoId(),
    href: '#',
    name: 'Quản lý news',
    type: 'dropdown',
    children: eventMenu
  },
  {
    id: ncNanoId(),
    href: '#',
    name: 'Quản lý hồ sơ',
    type: 'dropdown',
    children: profile
  }
];
