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
    name: 'Sự kiện'
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
export const HighSchoolStudentNavigation = [
  {
    id: ncNanoId(),
    href: PATH.INDEX,
    name: 'Trang chủ',
    type: '',
    children: homePage
  },
  {
    id: ncNanoId(),
    name: 'Quản lý sự kiện',
    type: 'dropdown',
    children: eventManager
  },

  {
    id: ncNanoId(),
    name: 'Quản lý học sinh',
    type: 'dropdown',
    children: eventMenu
  },
  {
    id: ncNanoId(),
    name: 'Quản lý hồ sơ',
    type: 'dropdown',
    children: profile
  }
];
