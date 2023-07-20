// import {useState, useEffect, useRef} from "react";
// import {useState, useEffect} from "react";
import {useState} from "react";
import Card from "./Card";
import styles from "../styles/Gallery.module.css"
import accommodationData from "../data/accommodationDatabase.json";

// Upload and reveal on Scroll
// Intersection Observer API
// IntersectionObserver() : détection lorsqu'un élément en croise un autre
// ou le viewport

function Gallery() {
    // IntersectionObserver()
    // const [isIntersecting, setIntersecting] = useState(false);

    // useRef : hook pour stocker la référence à un élément du DOM
    // const ref = useRef(null);

    // useEffect : hook pour créer une instance d'observation d'intersection
    
    const [jsonData] = useState(accommodationData);
    // const cardHeight = 340;
    // const [loadedCards, setLoadedCards] = useState(0);

    // useEffect(() => {        
        
    //     function handleScroll() {
    //         // Calcul du nombre de cartes en fonction de l'écran de l'utilisateur
    //         const screenHeight = window.innerHeight;
    //         const cardsNumber = Math.floor(screenHeight/cardHeight);
    //         setLoadedCards((previousLoadedCards) => previousLoadedCards + cardsNumber);
    //     };

    //     handleScroll();
    //     window.addEventListener("scroll", handleScroll);

    //     return() => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
        
    // }, [cardHeight]);

    // useEffect(() => {
    //     const sliceData = accommodationData.slice(0, loadedCards);
    //     setJsonData(sliceData);
    // }, [loadedCards]);

    return (
        <main>
            <div className={styles.gallery}>
                {/* ul et li à intégrer */}
                {jsonData.map(data => {
                    return (
                        <Card key={data.id} title={data.title}/>
                    );
                })}
            </div>
        </main>
    );
};

export default Gallery;
