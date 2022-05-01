import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from './Navigation/Navbar.js';

import school from './images/school.jpg';
import './App.css';

import Math from './pages/Math';
import Swedish from './pages/Swedish';
import English from './pages/English';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
          <div >
            <img src={school} className="Image-header" alt="school" />
          </div>
       </header>
      

      <div>
      
      <Routes>
                    <Route path="Swedish" element={<Swedish />}>
                        
                    </Route>
                    <Route path="/English" element={<English />}>
                        
                    </Route>
                    <Route path="/Math" element={<Math />}>
                        
                    </Route>
                </Routes>
                
      </div>
      </Router>
    </div>
    
    
  );
}

export default App;
