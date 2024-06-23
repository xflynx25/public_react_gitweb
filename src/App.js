import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
//import './stylesheets/index.css';
import Taskbar from './components/Taskbar';

import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Academics from './pages/Academics';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Taskbar />
        
        <ScrollToTop />
        <Routes>
          <Route path="/game" element={<Home />}></Route>
          <Route path="/" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/academics" element={<Academics />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
