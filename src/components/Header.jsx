import { Link } from "react-router-dom";
import styled from "styled-components"
import colors from "../styles/colors"

const StyledLink = styled(Link)`    
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: right;
    color: ${(props) => (props.isPrimary ? colors.primary : colors.secondary)};
`

function Header() {
    return (
        <nav>
            <StyledLink to="/" isPrimary>ACCUEIL</StyledLink>
            <StyledLink to="/about" isPrimary>A PROPOS</StyledLink>
        </nav>
    )
}

export default Header;