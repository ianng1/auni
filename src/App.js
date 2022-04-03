import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages';
import Connect from './pages/connect';
import Signup from './pages/signup';
import Network from './pages/network';
import Profile from './pages/profile';
import Settings from './pages/settings';
import ConfigIcon from './configIcon';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
      <>
        <div className="Header">
          <div style={{ marginLeft: 31, width: 30 }}>
            <Button onClick={() => { setShowMenu(!showMenu); console.log(showMenu); }}
              variant="link">
              <ConfigIcon><HiMenu /></ConfigIcon>
            </Button>
          </div>
          <h1 style={{ margin: 27, marginLeft: 925, marginRight: 780, fontSize: 36 }}>Auni</h1>
          <div style={{ marginLeft: 5, width: 30 }}>
            <div class="btn-group">
              <a href="/signup" style={{ margin: 1, width: 90}} class="btn btn-outline-dark">
                Sign up!
              </a>
              <a href="/" style={{ margin: 1, width: 90}} class="btn btn-outline-dark">
                Sign in
              </a>
            </div>
          </div>
          <div style={{ marginRight: 15, width: 0 }} />
        </div>
        <div className="App" style={{ display: 'flex', height: '100vh' }}>
          <Router>
            {showMenu ? <><Navbar /></> : null}
            <view className="container">
              <Routes>
                <Route exact path='/' end element={<Signin />} />
                <Route path='/connect' element={<Connect />} />
                <Route path='/network' element={<Network />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/signup' element={<Signup />} />
              </Routes>
            </view>
          </Router>
        </div>
      </>
  );
}

export default App;