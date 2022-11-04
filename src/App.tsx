import { Fragment, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import Home from "./Pages/Home";
import Showcase from "./Pages/Showcase";


const App = () => {

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/showcase"
          element={<Showcase />}
        />

      </Routes>
    </AnimatePresence>
  );
};

export default App;
