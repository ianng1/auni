import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/signin';
import Connect from './pages/connect';
import Signup from './pages/signup';
import Network from './pages/network';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Home from './pages/home';
import { AuthProvider, AuthContext } from "./AuthProvider";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
      <AuthProvider>
        <div className="MainApp" style={{ display: 'flex', height: '100vh' }}>
          <Router>
            {showMenu ? <><Navbar /></> : null}
            <view className="container">
              <Routes>
                <Route path='/connect' element={<Connect />} />
                <Route path='/network' element={<Network />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/signin' element={<Signin />} />
                <Route exact path='/' end element={<Home />} />
              </Routes>
            </view>
          </Router>
        </div>
      </AuthProvider>
  );
}

export default App;