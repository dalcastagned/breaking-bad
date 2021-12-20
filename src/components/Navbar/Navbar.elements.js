import styled from 'styled-components'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/globalStyles'

export const Nav = styled.nav`
    background: #000 url('https://i.ibb.co/2vrSd9t/bg.jpg') no-repeat center center/cover;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: sticky;
    top: 0;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`

export const NavLogo = styled(Link)`
    color: #fff;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 25px;
    display: flex;
    align-items: center;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 55%);
        font-size: 32px;
        cursor: pointer;
    }
`

export const MobileIconX = styled(FaTimes)`
    color: #fff;
`

export const MobileIconBars = styled(FaBars)`
    color: #fff;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: ${({click}) => (click ? 'all 0.3s ease' : 'all 0.1s ease')};
        background: #000;
    }
`

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid #fff;
    }

    @media screen and (max-width: 960px){
        width: 100%;

        &:hover{
            border: none;
        }
    }
`

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 32px;
        width: 100%;
        display: table;

        &:hover {
            transition: all 0.3s ease;
        }
    }
`

