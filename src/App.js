import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import NavbarComp from './Navigation/Navbar.js';
import Math from './pages/Math';
import Swedish from './pages/Swedish';
import English from './pages/English';
import Home from './pages/Home';
import MathAssignment2 from './pages/Math/Assignment2';
import MathAssignment1 from './pages/Math/Assignment1';
import MathAssignment3 from './pages/Math/Assignment3';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavbarComp/>
        </div>
        <header className="App-header1">

          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          
       </header>
      

      <div>
      
      <Routes>
        <Route path="/Swedish" element={<Swedish />}></Route>
        <Route path="/English" element={<English />}></Route>

        <Route path="/Math" element={<Math />}></Route>
        <Route path="/Math/Assignment1" element={<MathAssignment1 />}></Route>
        <Route path="/Math/Assignment2" element={<MathAssignment2 />}></Route>
        <Route path="/Math/Assignment3" element={<MathAssignment3 />}></Route>

        <Route path="/Home" exact element={<Home />}></Route>
      </Routes>
                
      </div>
      </Router>
    </div>
    
    
  );
}

export default App;
