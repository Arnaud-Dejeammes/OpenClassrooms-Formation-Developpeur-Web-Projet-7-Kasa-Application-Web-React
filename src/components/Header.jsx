// A SUPPRIMER
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import styled from "styled-components"
// import getColor from "../styles/colors"
import Logo from "../assets/logo"
import NavBar from "./NavBar"

// A SUPPRIMER
// Wrapper pour Link (élément DOM), qui ne reconnaît pas les attributs personnalisés.
// RouterLink reçoit toutes les props et les redistribue au composant Link
// grâce à ...rest (spread operator). Destructuration de la prop isPrimary.
// const RouterLink = ({isPrimary, ...rest}) => (
//     <NavLink {...rest}/>
// );
// Encapsule la logique de passage des props au composant Link et
// sépare celle liée à la navigation avec les autres aspects

// RouterLink utilisé pour prévenir le warning de la console :
// "React does not recognize the `isPrimary` prop on a DOM element.
// If you intentionally want it to appear in the DOM as a custom attribute,
// spell it as lowercase `isprimary` instead. If you accidentally passed it
// from a parent component, remove it from the DOM element."
// Le message survient lorsqu'une prop est passée à un élément DOM non reconnu
// comme un attribut HTML valide.
// Avantages de la solution : couche logique compartimentée (fonctions et props),
// wrapper, personnalisation et ciblage du style, modularité, flexibilité,
// facilité de gestion, maintenabilité

// Autre solution :
// supprimer RouterLink revenir à const StyledLink = styled(Link)
// et indiquer isprimary="true"

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

// A SUPPRIMER
// const StyledLink = styled(RouterLink)`
//     font-size: 24px;
//     font-weight: 500;
//     line-height: 34px;
//     letter-spacing: 0em;
//     text-align: right;
//     color: ${(props) => getColor(props)};
//     text-decoration: none;    

//     &.active {
//         text-decoration: underline;
//     }
// `

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