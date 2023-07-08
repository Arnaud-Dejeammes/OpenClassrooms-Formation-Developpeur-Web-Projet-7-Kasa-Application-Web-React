import styled from "styled-components"
import styles from "../styles/DownChevron.module.css";

const DownChevronStyle = styled.div`    
    transform: rotate(${(props) => (props.$open ? "-180deg" : "0deg")});
    transition: transform 0.2s ease;
`

function DownChevron({$open}) {
    return (
        // Syntaxe JSX cohérente avec la syntaxe CSS :
        // className={styles.class}
        // className={styles["class-name"]}
        <DownChevronStyle className={styles["down-chevron"]} $open={$open}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_142304_633)">
                {/* Invalid DOM property `clip-path`. Did you mean `clipPath`? */}
                {/* Correction clip-path > clipPath */}
                {/* Possibilité de supprimer <g> et <defs> */}
                    <path d="M14.7897 21.2103C15.4591 21.8797 16.5462 21.8797 17.2157 21.2103L27.4979 10.928C28.1674 10.2586 28.1674 9.17148 27.4979 8.50206C26.8285 7.83265 25.7414 7.83265 25.072 8.50206L16 17.574L6.92804 8.50742C6.25862 7.838 5.17148 7.838 4.50206 8.50742C3.83265 9.17684 3.83265 10.264 4.50206 10.9334L14.7843 21.2157L14.7897 21.2103Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_142304_633">
                    <rect width="32" height="32" fill="white" transform="translate(32) rotate(90)"/>
                    </clipPath>
                </defs>
            </svg>
        </DownChevronStyle>
    )
};

export default DownChevron