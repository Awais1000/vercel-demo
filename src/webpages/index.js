import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Aboutus from './aboutus.js';
import Home from './home.js';
const Webpages = () => {
  return (
    <Router>
      <Routes>
        <Route path='/test' element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
      </Routes>
    </Router>
  );
};
export default Webpages;