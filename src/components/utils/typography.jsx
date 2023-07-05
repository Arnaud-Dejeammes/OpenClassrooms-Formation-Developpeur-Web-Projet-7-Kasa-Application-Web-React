// Gestionnaire de casse

function FirstLettersUpperCase({text}) {
    const words = text.split(" ");
    const upperCasedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return upperCasedWords.join(" ");    
};

function UpperCase({text}) {
    return text.toUpperCase();
};

// function SetCase({text, isSmallScreen}) {    
//     return isSmallScreen ? <UpperCase text={text}/> : <FirstLettersUpperCase text={text}/>
// };


// function SetCase(props) {
//     const {text, isSmallScreen} = props    

//     if (isSmallScreen) {
//         return text.toUpperCase()
//     } else {
//         const words = props.text.split(" ");
//         const upperCasedWords = words.map((word) => {
//         return (word.charAt(0).toUpperCase() + word.slice(1))
//     });
//     return upperCasedWords.join(" ");    
//     }    
// };

// function FirstLettersUpperCase(props) {
//     const words = props.text.split(" ");
//     const upperCasedWords = words.map((word) => {
//         return (word.charAt(0).toUpperCase() + word.slice(1))
//     });
//     return upperCasedWords.join(" ");    
// };

// function UpperCase(props) {
//     return (props.text.toUpperCase());
// }

// export {FirstLettersUpperCase, UpperCase};

export {FirstLettersUpperCase, UpperCase};

// function FirstLetterUpperCase(text) {
//     return (text.charAt(0).toUpperCase() + text.slice(1))
// };


// const setCase = (text, isSmallScreen) => {
//     return isSmallScreen ? UpperCase(text) : FirstLetterUpperCase(text)
// }

// export default setCase

//

// function FirstLettersUpperCase(props) {
//     const words = props.text.split(" ");
//     const upperCasedWords = words.map((word) => {
//         return (word.charAt(0).toUpperCase() + word.slice(1))
//     });
//     return upperCasedWords.join(" ");    
// };

// function UpperCase(props) {
//     return (props.text.toUpperCase());
// }

// const isSmallScreen = styled.span`
//     @media (max-width: 365px) {

//     }
// `

// const setCase = () => {
//     return isSmallScreen ? UpperCase : FirstLettersUpperCase
// }