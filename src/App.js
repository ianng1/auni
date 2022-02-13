import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages';
import Connect from './pages/connect';
import Network from './pages/network';
import Profile from './pages/profile';
import Settings from './pages/settings';
import ConfigIcon from './configIcon';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="Header">
        <div style={{ margin: 31 }}>
          <Button onClick={() => { setShowMenu(!showMenu); console.log(showMenu); }}
            variant="link">
            <ConfigIcon><HiMenu /></ConfigIcon>
          </Button>
        </div>
        <h1 style={{ margin: 27, fontSize: 36 }}>Auni</h1>
        <div />
      </div>
      <div className="App" style={{ display: 'flex', height: '100vh' }}>
        <Router>
          {showMenu ? <><Navbar /></> : null}
          <Routes>
            <Route exact path='/' exact element={<Signin />} />
            <Route path='/connect' element={<Connect />} />
            <Route path='/network' element={<Network />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </Router >
      </div>
    </>
  );
}

export default App;
