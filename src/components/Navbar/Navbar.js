import React, { useState } from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    MobileIconX,
    MobileIconBars,
    NavMenu,
    NavItem,
    NavLinks
} from './Navbar.elements'

const Navbar = () => {

    const [clickMenu, setClick] = useState(false)

    const handleClickMenu = () => {
        setClick(!clickMenu)
    }

    const handleClickMenuOff = () => {
        if (clickMenu) {
            setClick(false)
        }
    }

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/" onClick={handleClickMenuOff}>
                    Breaking Bad
                </NavLogo>
                <MobileIcon onClick={handleClickMenu}>
                    {clickMenu ? <MobileIconX /> : <MobileIconBars />}
                </MobileIcon>
                <NavMenu onClick={handleClickMenu} click={clickMenu}>
                    <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/characters'>Characters</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/episodes'>Episodes</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar

