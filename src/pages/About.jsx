// Régler l'application de reset et du style body à l'ensemble des pages !!!
// import styled from "styled-components";
import styles from "../styles/About.module.css";
import Banner from "../components/Banner"
import DropDown from "../components/DropDown";

function About() {
    return (      
      <div className={styles.about}>
        <Banner/>
        <DropDown/>
      </div>
    )
};

export default About;
