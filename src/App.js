import './App.css';
import { Routes, Route, useLocation } from "react-router";

import Home from './pages/Home';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import { AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from 'react';
import { UtilityContext } from './context/util.context';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const location = useLocation();
  const { firstEnter, setFirstEnter } = useContext(UtilityContext);

  useEffect(() => {
    if (firstEnter === false) {
      setFirstEnter(false);
    }
  }, []);

  return (
    <div className="App md:overflow-hidden">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home isFirstMount={isFirstMount} />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence >
    </div>
  );
}

export default App;
