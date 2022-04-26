import { PATH } from '../../../constants/Paths/Path';
import __megamenu from '../../../data/jsons/__megamenu.json';
import ncNanoId from '../../../utils/ncNanoId';

const majorMenu = [
  {
    id: ncNanoId(),
    image:
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXBhbnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60',
    title: 'Chuyên ngành',
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: '#',
      name: i.Company
    }))
  }
];

const megaMenu3ItemDemo = [
  {
    id: ncNanoId(),
    image:
      'http://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycG9yYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60',
    title: 'Corporate',
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: '#',
      name: i.Corporate
    }))
  }
];
const homePage = [
  {
    id: ncNanoId(),
    name: 'Home Page',
    href: PATH.INDEX
  }
];

const eventMenu = [
  {
    id: ncNanoId(),
    href: '/single-gallery/this-is-single-slug',
    name: 'Sự kiện trong trường đại học'
  },
  {
    id: ncNanoId(),
    href: '/single-audio/this-is-single-slug',
    name: 'Sự kiện trong trường cấp 3'
  },
  {
    id: ncNanoId(),
    href: '/single-video/this-is-single-slug',
    name: 'Sự kiện ngoài doanh nghiệp'
  }
];

export const DefaultNavigation = [
  {
    id: ncNanoId(),
    href: '/',
    name: 'Trang chủ',
    type: 'dropdown',
    children: homePage
  },
  {
    id: ncNanoId(),
    href: '#',
    name: 'Chuyên Ngành Đào Tạo',
    type: 'megaMenu',
    megaMenu: majorMenu
  },

  {
    id: ncNanoId(),
    href: '#',
    name: 'Sự kiện',
    type: 'dropdown',
    children: eventMenu
  }
];
