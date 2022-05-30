
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './webpages/home';
import Aboutus from './webpages/aboutus';
const App = () => {
  return (<>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </Router>git branch -M main

  </>
  );
};
export default App;