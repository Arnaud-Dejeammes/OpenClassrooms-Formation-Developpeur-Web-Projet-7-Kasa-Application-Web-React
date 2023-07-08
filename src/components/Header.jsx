import styles from "../styles/Header.module.css"
import Logo from "../assets/logo"
import NavBar from "./NavBar"

function Header() {
    // <img src={logo} className="App-logo" alt="logo"/>
    return (        
        <header className={styles.header}>            
            <Logo/>
            <NavBar/>
        </header>        
    )
}

export default Header;
