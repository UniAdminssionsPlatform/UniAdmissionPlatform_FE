import React from 'react'
import Heading from '../Heading/Heading.component'
import Nav from '../Nav/Nav.component'
import NavItem from '../NavItem/NavItem.component'
import ButtonSecondary from '../../field/ButtonSecondary/ButtonSecondary.component'

const HeaderFilter = ({
  tabActive,
  tabs,
  heading = '🎈 Thông tin tuyển sinh',
  onClickTab
}) => {
  return (
    <div className="flex flex-col mb-8 relative">
      <Heading>{heading}</Heading>
      <div className="flex items-center justify-between">
        <Nav
          className="sm:space-x-2"
          containerClassName="relative flex w-full overflow-x-auto text-sm md:text-base"
        >
          {tabs.map((item, index) => (
            <NavItem
              key={index}
              isActive={tabActive === item}
              onClick={() => onClickTab(item)}
            >
              {item}
            </NavItem>
          ))}
        </Nav>
        <span className="hidden sm:block flex-shrink-0">
          <ButtonSecondary className="!leading-none">
            <span>View all</span>
            <i className="ml-3 las la-arrow-right text-xl"></i>
          </ButtonSecondary>
        </span>
      </div>
    </div>
  )
}

export default HeaderFilter
