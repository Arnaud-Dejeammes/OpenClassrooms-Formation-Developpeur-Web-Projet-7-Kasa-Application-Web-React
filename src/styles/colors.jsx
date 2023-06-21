const colors = {
    primary: "#ff6060",
    secondary: "#ffffff"    
}

const getColor = (props) => {
    return props.isPrimary ? colors.primary : colors.secondary
}

export default getColor