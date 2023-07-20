import styled from "styled-components";
import styles from "../styles/Card.module.css";
import getColor from "../styles/colors";

const CardStyle = styled.div`
    background: ${(props) => getColor(props)};
`

const TitleStyle = styled.h2`
    color: ${(props) => getColor(props)};
`

function Card({title}) {
    
    return (
        <CardStyle className={styles["card"]} $primary>
            <TitleStyle>{title}</TitleStyle>
        </CardStyle>
    );
};

export default Card;
