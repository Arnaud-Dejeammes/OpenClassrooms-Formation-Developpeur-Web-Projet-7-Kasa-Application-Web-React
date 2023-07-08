// import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components"
import styles from "../styles/NavBar.module.css"
import getColor from "../styles/colors"
import SetCase from "./utils/typography"

// Wrapper pour Link (élément DOM), qui ne reconnaît pas les attributs personnalisés.
// RouterLink reçoit toutes les props et les redistribue au composant Link
// grâce à ...rest (spread operator). Destructuration de la prop isPrimary.
const RouterLink = ({$primary, ...rest}) => (
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
// supprimer RouterLink et revenir à const StyledLink = styled(Link)
// et indiquer isPrimary="true"
// Alternative :
// Utilisation du préfixe "data-" pour des attributs personnalisés
// (voir "logo.jsx").

// Changement de isPrimary pour $primary (syntaxe styled-components)

const StyledLink = styled(RouterLink)`
// Propriétés non accessibles via le fichier de style :
    color: ${(props) => getColor(props)};
    
    text-decoration: none;
    
    &.active {
        text-decoration: underline;
    }
`

const NavWrapper = styled.nav`
`

function NavBar() {
    
    const home = "accueil"
    const about = "à propos"

    return (
        <NavWrapper className={styles.navbar}>
            <ul>            
                <li>
                    <StyledLink to="/" $primary>
                        <SetCase text={home}/>                        
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to="/about" $primary>
                        <SetCase text={about}/>
                    </StyledLink>
                </li>            
            </ul>       
        </NavWrapper>
    )
}

export default NavBar;
