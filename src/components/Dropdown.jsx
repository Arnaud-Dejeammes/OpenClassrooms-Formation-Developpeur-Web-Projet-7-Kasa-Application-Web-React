import {useState} from "react";
import styled from "styled-components"
import getColor from "../styles/colors"
import DownChevron from "../assets/downChevron";

const DropdownStyle = styled.button`
    width: 582px;
    height: 52px;
    flex-shrink: 0;
    
    border: none;
    border-radius: 10px;
    background: ${(props) => getColor(props)};

    @media (max-width: 365px) {
        width: 335px;
        height: 29.931px;    
    }
`

function Dropdown() {
    const [$open, setIsOpen] = useState(false);

    return (        
        <DropdownStyle $primary onClick={() => setIsOpen(!$open)}>            
            <DownChevron $open={$open}/>
        </DropdownStyle>
    );
};

export default Dropdown;