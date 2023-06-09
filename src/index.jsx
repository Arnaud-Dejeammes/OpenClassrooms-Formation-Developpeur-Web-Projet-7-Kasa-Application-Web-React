// Bug report :
// Lorsque le fichier index.js est renommé index.jsx (ou inversement), une erreur apparaît :
// il suffit d'arrêter npm, puis le relancer

// MODULES
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
// import App from "./components/App";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// COMPONENTS
import Header from "./components/Header"

// TOOLS
import reportWebVitals from "./reportWebVitals";

// STYLES
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', Helvetica, sans-serif;
  }
`
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  // Syntaxe pour react-router-dom@6.10.0 :
  // <BrowserRouter><Routes><Route path="" element={<Component/>}/></Routes></BrowserRouter>
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home/> */}    
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="*" element={<NotFound/>}/>        
        <Route path="/" element={<Home/>}/>
        <Route path="/accommodation" element={<Accommodation/>}/>
        <Route path="/about" element={<About/>}/>        
      </Routes>
    </Router>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
