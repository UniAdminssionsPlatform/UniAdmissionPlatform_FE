import { PATH, PATH_UNIVERSITY_MANAGER, PATH_HIGH_SCHOOL_STUDENT } from '../../../constants/Paths/Path';
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
  },
  {
    id: ncNanoId(),
    href: PATH_HIGH_SCHOOL_STUDENT.SCORE,
    name: 'Điểm'
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
    href: PATH.LIST_MAJOR_GROUP,
    name: 'Nhóm Ngành Đào Tạo'
  },

  // {
  //   id: ncNanoId(),
  //   name: 'Quản lý học sinh',
  //   type: 'dropdown',
  //   children: eventMenu
  // },
  {
    id: ncNanoId(),
    name: 'Quản lý hồ sơ',
    type: 'dropdown',
    children: profile
  }
];
