import {useState} from "react";
import styled from "styled-components";
import styles from "../styles/DropDown.module.css"
import getColor from "../styles/colors";
import DownChevron from "../assets/downChevron";

const DropDownStyle = styled.button`
    background: ${(props) => getColor(props)};
`

function DropDown() {
    const [$open, setIsOpen] = useState(false);

    return (        
        <DropDownStyle className={styles["drop-down"]} $primary onClick={() => setIsOpen(!$open)}>
            <DownChevron $open={$open}/>
        </DropDownStyle>
    );
};

export default DropDown;
