// A SUPPRIMER
// import {Link, NavLink} from "react-router-dom";

import styled from "styled-components"
import Logo from "../assets/logo"
import NavBar from "./NavBar"

const HeaderStyle = styled.header`
    display: flex;
    width: 1240px;
    height: 68px;
    justify-content: center;
    align-items: center;
    gap: 720.678px;
    
    @media (max-width: 365px) {
        width: 375px;
        padding: 20px 19px 0px 20px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 16px;        
    }
`

function Header() {
    // <img src={logo} className="App-logo" alt="logo"/>
    return (        
        <HeaderStyle>            
            <Logo/>
            <NavBar/>
        </HeaderStyle>        
    )
}

export default Header;