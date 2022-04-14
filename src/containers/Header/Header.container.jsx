import React from 'react'
import { useAppSelector } from '../../app/hook'
import { selectCurrentPageData } from '../../app/pages/pages'
import Header from '../../components/Header/Header.component'

const HeaderContainer = () => {
  const currentPage = useAppSelector(selectCurrentPageData)
  return <Header currentPage={currentPage} />
}

export default HeaderContainer
