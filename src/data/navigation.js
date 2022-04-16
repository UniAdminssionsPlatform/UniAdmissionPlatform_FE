import ncNanoId from '../utils/ncNanoId'
import __megamenu from './jsons/__megamenu.json'

const megaMenuDemo = [
  {
    id: ncNanoId(),
    image:
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXBhbnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60',
    title: 'Company',
    items: __megamenu.map(i => ({
      id: ncNanoId(),
      href: '#',
      name: i.Company
    }))
  }
]

const megaMenu3ItemDemo = [
  {
    id: ncNanoId(),
    image:
      'http://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycG9yYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60',
    title: 'Corporate',
    items: __megamenu.map(i => ({
      id: ncNanoId(),
      href: '#',
      name: i.Corporate
    }))
  }
]
const demoChildMenus = [
  {
    id: ncNanoId(),
    name: 'Home Page',
    href: '/'
  }
]

const templateChilds = [
  {
    id: ncNanoId(),
    href: '/single-gallery/this-is-single-slug',
    name: 'Single Gallery'
  },
  {
    id: ncNanoId(),
    href: '/single-audio/this-is-single-slug',
    name: 'Single Audio'
  },
  {
    id: ncNanoId(),
    href: '/single-video/this-is-single-slug',
    name: 'Single Video'
  }
]

export const NAVIGATION_DEMO = [
  {
    id: ncNanoId(),
    href: '/',
    name: 'Trang chủ',
    type: 'dropdown',
    children: demoChildMenus
  },
  {
    id: ncNanoId(),
    href: '#',
    name: 'Chuyên Ngành Đào Tạo',
    type: 'megaMenu',
    megaMenu: megaMenuDemo
  },

  {
    id: ncNanoId(),
    href: '#',
    name: 'Tin tức về nhập học',
    type: 'megaMenu',
    megaMenu: megaMenu3ItemDemo
  },
  {
    id: ncNanoId(),
    href: '#',
    name: 'Sự kiện',
    type: 'dropdown',
    children: templateChilds
  }
]
