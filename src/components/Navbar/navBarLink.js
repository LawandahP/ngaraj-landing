import React from 'react'
import { NavItem, NavLinks } from './NavBarElements'

const NavBarLink = ({to, onClick, children, smooth, duration, spy, exact, offset }) => {
  return (
    <>
        <NavItem>
            <NavLinks
                onClick={onClick}
                to={to}
                smooth={smooth || true}
                duration={duration || 500}
                spy={spy || true}
                exact={exact || 'true'}
                offset={offset || -80}>
                {children}
            </NavLinks>
        </NavItem>
    </>
  )
}

export default NavBarLink