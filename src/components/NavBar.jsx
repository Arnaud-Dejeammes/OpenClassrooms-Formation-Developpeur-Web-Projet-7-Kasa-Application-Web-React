// import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components"
import getColor from "../styles/colors"
// import {FirstLettersUpperCase, UpperCase} from "./utils/typography"
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
// et indiquer isprimary="true"

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

// function FirstLetterUpperCase(props) {
//     return (props.text.charAt(0).toUpperCase() + props.text.slice(1))
// };

// function FirstLettersUpperCase(props) {
//     const words = props.text.split(" ");
//     const upperCasedWords = words.map((word) => {
//         return (word.charAt(0).toUpperCase() + word.slice(1))
//     });
//     return upperCasedWords.join(" ");    
// };

// function UpperCase(props) {
//     return (props.text.toUpperCase());
// }

function NavBar() {    
    // const [smallScreen, setScreenSize] = useState(window.innerWidth <= 365);
    // Stockage de la taille de l'écran.
    // useState : hook de déclaration de variable d'état.
    // Retour d'un tableau avec la valeur d'état et une fonction
    // pour sa mise à jour (stocker et gérer l'état local d'un composant).
    // Convention : "set" suivi par le nom de l'état
    const home = "accueil"
    const about = "à propos"

    // function updateScreenSize() {
    //     setScreenSize(window.innerWidth <= 365);
    // }
    
    // Sans la mise à jour de façon dynamique de la taille de l'écran
    // (avec le gestionnaire d'évènement "resize", useEffecte et useState),
    // la valeur de smallScreen se voit déterminée une seule fois, lors 
    // du rendu de NavBar.

    // useEffect(() => {
    //     window.addEventListener("resize", updateScreenSize);
    //         return () => {
    //             window.removeEventListener("resize", updateScreenSize);
    //         };
    // }, []);
    // Mise à jour de l'état de la taille de l'écran.
    // useEffect : hook pour gérer les effets secondaires,
    // comme la mise à jour de l'interface utilisateur.
    // Déclaration de code devant s'exécuter après chaque rendu du composant,
    // déclenché par un changement d'état.    

    // function SetCase({text}) {        
    //     return smallScreen ? <UpperCase text={text}/> : <FirstLettersUpperCase text={text}/>;
    // };

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