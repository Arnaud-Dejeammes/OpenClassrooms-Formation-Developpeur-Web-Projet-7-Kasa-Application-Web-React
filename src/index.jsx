// Bug report :
// Lorsque le fichier index.js est renommé index.jsx (ou inversement), une erreur apparaît :
// il suffit d'arrêter npm, puis le relancer

// MODULES
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Syntaxe pour react-router-dom@6.10.0
  // <BrowserRouter><Routes><Route path="" element={<Component/>}/></Routes></BrowserRouter>
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home/> */}    
    <Router>
      <Header/>
      <Routes>        
        <Route path="/" element={<Home/>}/>
        <Route path="/accommodation" element={<Accommodation/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/404" element={<NotFound/>}/>
      </Routes>
    </Router>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
