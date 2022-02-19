import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  background: #FFFFFF;
  height: 100vh;
  display: flex;
  width: 287px;
  // justify-content: center;
  // padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #949494;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  &.active {
    color: #670BFF;
    font-weight: bold;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #444444;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: -24px;
  margin-left: 39px;
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;