
import styled from "styled-components"
import styles from "../styles/Banner.module.css";
import getColor from "../styles/colors"

const BannerStyle = styled.div`
    color: ${(props) => getColor(props)};
`

function Banner() {
    
    return (        
        <BannerStyle className={styles.banner}>
            <h1>Chez vous, partout et ailleurs</h1>
        </BannerStyle>
    )
}

export default Banner;