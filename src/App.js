import React, { useEffect } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";
import AdBlockerModal from "./components/AdBlockerModal";
import DetectAdBlock from "./components/DetectAdBlock";

export default function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AdBlockerModal />
      {/* <DetectAdBlock /> */}
      <AnimatePresence exitBeforeEnter>
        <ScrollTop />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
