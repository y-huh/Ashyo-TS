import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderCenter from './HeaderCenter'
import HeaderMobile from './HeaderMobile'

const Header = () => {
  return (
    <header>
      <HeaderTop/>
      <HeaderCenter/>
      <HeaderMobile/>
    </header>
  )
}

export default Header