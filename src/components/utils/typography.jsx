import {useEffect, useState} from "react";

// GESTIONNAIRE DE CASSE

function FirstLettersUpperCase({text}) {
    const words = text.split(" ");
    const upperCasedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return upperCasedWords.join(" ");    
};

function UpperCase({text}) {
    return text.toUpperCase();
};

function SetCase({text}) {    
    const [smallScreen, setScreenSize] = useState(window.innerWidth <= 365);
    // Stockage de la taille de l'écran.
    // useState : hook de déclaration de variable d'état.
    // Retour d'un tableau avec la valeur d'état et une fonction
    // pour sa mise à jour (stocker et gérer l'état local d'un composant).
    // Convention : "set" suivi par le nom de l'état

    function updateScreenSize() {
        setScreenSize(window.innerWidth <= 365);
    }

    // Sans la mise à jour de façon dynamique de la taille de l'écran
    // (avec le gestionnaire d'évènement "resize", useEffecte et useState),
    // la valeur de smallScreen se voit déterminée une seule fois, lors 
    // du rendu de NavBar.

    useEffect(() => {
        window.addEventListener("resize", updateScreenSize);
            return () => {
                window.removeEventListener("resize", updateScreenSize);
            };
    }, []);
    // Mise à jour de l'état de la taille de l'écran.
    // useEffect : hook pour gérer les effets secondaires,
    // comme la mise à jour de l'interface utilisateur.
    // Déclaration de code devant s'exécuter après chaque rendu du composant,
    // déclenché par un changement d'état.

    return smallScreen ? <UpperCase text={text}/> : <FirstLettersUpperCase text={text}/>;
};

export default SetCase;

// function FirstLetterUpperCase(text) {
//     return (text.charAt(0).toUpperCase() + text.slice(1))
// };