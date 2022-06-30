import './App.css';
import { Routes, Route } from "react-router";

import Home from './pages/Home';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App md:overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
