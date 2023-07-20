import styled from "styled-components";
import styles from "../styles/Banner.module.css";
import homeBannerImage from "../styles/HomeBannerImage.module.css"
import aboutBannerImage from "../styles/AboutBannerImage.module.css"
import getColor from "../styles/colors";
// import getImage from "../styles/images";

const BannerStyle = styled.div`
    color: ${(props) => getColor(props)};    
`

function getImage() {
    const getPageName = () => {
    const url = window.location.href;    
    // Recherche de la dernière occurrence de "/" avec lastIndexOf() 
    // afin de trouver le chemin, et extraction de la chaîne de caractères
    // avec la méthode substring().
      const path = url.substring(url.lastIndexOf("/"));
      return path;
    };
    
    const pageName = getPageName();

    if (pageName === "/") {        
        return homeBannerImage.wallpaper;
    } else if (pageName === "/about") {
        return aboutBannerImage.wallpaper;}
};

function Banner({text}) {    
    // backgroundImage
    // wallpaper
    const image = getImage();
    
    return (        
        <BannerStyle className={`${styles.banner} ${image}`}>
            <h1>{text}</h1>
        </BannerStyle>
    )
};

export default Banner;
