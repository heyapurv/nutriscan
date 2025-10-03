// import {
//   Home,
//   About,
//   Faq,
//   Roadmap,
//   Showcase,
//   Team,
// } from './components/cultural/components/sections'

// import GlobalStyles from "./components/cultural/styles/GlobalStyles";
// import { ThemeProvider } from "styled-components";
// import { light } from "./components/cultural/styles/Themes";
// import { Navigation, Footer, ScrollToTop } from "./components/cultural/components";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./nutriscore/pages/HomePage";
import InputPage from "./nutriscore/pages/InputPage";
import ScorePage from "./nutriscore/pages/ScorePage";

function App() {
  return (
    <>
    
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/score" element={<ScorePage />} />
          </Routes>
        </div>
 
      {/* <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider> */}
    </>
  );
}

export default App;
