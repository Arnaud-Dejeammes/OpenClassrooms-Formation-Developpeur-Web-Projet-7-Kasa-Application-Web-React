// import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components"
import getColor from "../styles/colors"
import SetCase from "./utils/typography"

// Wrapper pour Link (élément DOM), qui ne reconnaît pas les attributs personnalisés.
// RouterLink reçoit toutes les props et les redistribue au composant Link
// grâce à ...rest (spread operator). Destructuration de la prop isPrimary.
const RouterLink = ({isPrimary, ...rest}) => (
    <NavLink {...rest}/>
);
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
// et indiquer isPrimary="true"

const StyledLink = styled(RouterLink)`
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: right;
    color: ${(props) => getColor(props)};
    text-decoration: none;    

    &.active {
        text-decoration: underline;
    }
`

const NavWrapper = styled.nav`
`

const UlWrapper = styled.ul`
    display: flex;
`

function NavBar() {
    
    const home = "accueil"
    const about = "à propos"

    return (
        <NavWrapper>
            <UlWrapper>            
                <li>
                    <StyledLink to="/" isPrimary>
                        <SetCase text={home}/>                        
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to="/about" isPrimary>
                        <SetCase text={about}/>
                    </StyledLink>
                </li>            
            </UlWrapper>       
        </NavWrapper>
    )
}

export default NavBar;