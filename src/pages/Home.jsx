// Conflit de styles avec ce fichier et "../styles/Home.module.css"
// suite au passage de "styled.div" à "module.css" :
// import '../styles/App.css';
// Régler l'application de reset et du style body à l'ensemble des pages !!!

// import styled from "styled-components"
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery.jsx";

// const HomeStyle = styled.div``

// function App() {
function Home() {
  const slogan = "Chez vous, partout et ailleurs"

  return (
    <div className={styles.home}>
      <Banner text={slogan}/>
      <Gallery/>
    </div>
  );
}

export default Home;
// export default App;
