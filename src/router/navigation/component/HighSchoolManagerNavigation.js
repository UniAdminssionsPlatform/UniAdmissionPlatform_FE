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
  },
  {
    id: ncNanoId(),
    href: PATH_HIGH_SCHOOL_MANAGER.REGISTERED_EVENT,
    name: 'Sự kiện đăng ký'
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
    name: 'Hồ sơ trường'
  },
  {
    id: ncNanoId(),
    href: PATH_HIGH_SCHOOL_MANAGER.EDIT_PROFILE,
    name: 'Chỉnh sửa hồ sơ trường'
  },
  {
    id: ncNanoId(),
    href: PATH_HIGH_SCHOOL_MANAGER.ACCOUNT_PROFILE,
    name: 'Hồ Sơ Cá Nhân'
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
    name: 'Trang quản lý',
    type: '',
    href: PATH_HIGH_SCHOOL_MANAGER.SLOT_MANAGER
  },
  {
    id: ncNanoId(),
    name: 'Quản lý hồ sơ',
    type: 'dropdown',
    children: profile
  }
];
