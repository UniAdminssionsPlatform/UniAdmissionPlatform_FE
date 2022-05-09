import { PATH, PATH_HIGH_SCHOOL_MANAGER, PATH_UNIVERSITY_MANAGER } from '../../../constants/Paths/Path';
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
    href: PATH_HIGH_SCHOOL_MANAGER.INDEX,
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
export const HighSchoolManagerNavigation = [
  {
    id: ncNanoId(),
    href: PATH_HIGH_SCHOOL_MANAGER.INDEX,
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
    name: 'Quản lý học sinh',
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
