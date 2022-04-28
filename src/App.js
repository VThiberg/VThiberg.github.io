import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from './Navigation/Navbar.js';
import Math from './pages/Math.js';
import school from './images/school.jpg';
import './App.css';




function App() {
  return (
    <div className="App">
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
        <Math/>
      </div>
    </div>
    
    
  );
}

export default App;
