import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/">ACCUEIL</Link>
            <Link to="/about">A PROPOS</Link>
        </nav>
    )
}

export default Header;