import React from 'react';
import './App.css';
import Index from './Index.jsx';
import Info from './Info.jsx';
import Calc from './Calc';
import About from './About';
import Report from './Report';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/info' element={<Info />} />
          <Route exact path='/calculator' element={<Calc />} />
          <Route exact path='/report' element={<Report />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
    </Router>
  );
}

