
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/Themes";
import { Navigation, Footer, ScrollToTop } from "./components";
import {
  Home,
  About,
  Faq,
  Roadmap,
  Showcase,
  Team,
} from "./components/sections";

function WebSite() {
  return (
    <>
      <GlobalStyles />
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
      </ThemeProvider>
    </>
  );
}

export default WebSite;
