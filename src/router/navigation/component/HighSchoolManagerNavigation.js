import { PATH, PATH_HIGH_SCHOOL_MANAGER, PATH_UNIVERSITY_MANAGER } from '../../../constants/Paths/Path';
import ncNanoId from '../../../utils/ncNanoId';

const homePage = [
  {
    id: ncNanoId(),
    name: 'Home Page',
    href: PATH.INDEX
  }
];

const studentManager = [
  {
    id: ncNanoId(),
    name: 'Home Page',
    href: PATH.INDEX
  }
];

const eventManager = [
  {
    id: ncNanoId(),
    href: PATH_HIGH_SCHOOL_MANAGER.SLOT_MANAGER,
    name: 'Đăng ký slot'
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
    href: PATH_HIGH_SCHOOL_MANAGER.VIEW_PROFILE,
    name: 'Hồ sơ trường cấp 3'
  },
  {
    id: ncNanoId(),
    href: PATH_UNIVERSITY_MANAGER.PROFILE,
    name: 'Hồ sơ trường đại học'
  },
  {
    id: ncNanoId(),
    href: PATH_HIGH_SCHOOL_MANAGER.EDIT_PROFILE,
    name: 'Chỉnh sửa hồ sơ'
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
    name: 'Quản lý sự kiện',
    type: 'dropdown',
    children: eventManager
  },

  {
    id: ncNanoId(),
    href: PATH_HIGH_SCHOOL_MANAGER.LIST_STUDENT,
    name: 'Quản lý học sinh',
    type: '',
    children: studentManager
  },
  {
    id: ncNanoId(),
    name: 'Quản lý hồ sơ',
    type: 'dropdown',
    children: profile
  }
];
