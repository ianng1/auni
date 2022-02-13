import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/connect" activeStyle>
            Connect
          </NavLink>
          <NavLink to="/network" activeStyle>
            Network
          </NavLink>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/settings" activeStyle>
            Settings
          </NavLink>
          <NavLink to="/" activeStyle>
            Sign out
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;