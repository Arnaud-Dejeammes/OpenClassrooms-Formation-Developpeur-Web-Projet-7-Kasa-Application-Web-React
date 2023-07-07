const colors = {
    primary: "#ff6060",
    secondary: "#ffffff"    
}

const getColor = (props) => {
    return props.$primary ? colors.primary : colors.secondary
}

export default getColor;
