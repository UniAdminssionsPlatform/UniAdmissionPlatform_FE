import { PATH, PATH_HIGH_SCHOOL_STUDENT, PATH_UNIVERSITY_MANAGER } from '../../../constants/Paths/Path';
import ncNanoId from '../../../utils/ncNanoId';

const homePage = [
  {
    id: ncNanoId(),
    name: 'Home Page',
    href: PATH.INDEX
  }
];

// const eventMenu = [
//   {
//     id: ncNanoId(),
//     href: PATH_UNIVERSITY_MANAGER.NEW,
//     name: 'Danh sách news'
//   }
// ];
const profile = [
  {
    id: ncNanoId(),
    href: PATH_UNIVERSITY_MANAGER.PROFILE,
    name: 'Hồ sơ trường'
  },
  {
    id: ncNanoId(),
    href: PATH_HIGH_SCHOOL_STUDENT.UPDATE_PROFILE,
    name: 'Chỉnh Sửa Hồ Sơ Cá Nhân'
  },
  {
    id: ncNanoId(),
    href: PATH_HIGH_SCHOOL_STUDENT.CERTIFICATION,
    name: 'Chứng Chỉ'
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
    name: 'Tổng hợp bài viết',
    href: PATH_HIGH_SCHOOL_STUDENT.NEWS
  },
  {
    id: ncNanoId(),
    href: PATH.LIST_MAJOR_GROUP,
    name: 'Nhóm Ngành Đào Tạo'
  },
  {
    id: ncNanoId(),
    name: 'Quản lý hồ sơ',
    type: 'dropdown',
    children: profile
  }
];
