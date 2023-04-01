import React from "react";
import SearchBar from "../Search-Bar/SearchBar.jsx"
import Style from './Nav.module.css'
import Logo from '../../images/Logo-Rick&Morty.png'
import { NavLink } from 'react-router-dom'


const Nav = ({ onSearch, randomSearch }) => {

  return(
    <div className={Style.navContainer}>
      <img 
      src={Logo} alt='logo-rick&morty'
      className={Style.logo}/>
      <SearchBar 
      onSearch={onSearch} 
      randomSearch={randomSearch}/>
      <ul className={Style.menu}>
        <NavLink to={'/'} className={({isActive})=> isActive ? Style.active : Style.disable}>
          <li>
            <span>HOME</span>
          </li>
        </NavLink>
        <NavLink to={'/about'} className={({isActive})=> isActive ? Style.active : Style.disable}>
          <li>
            <span>ABOUT</span>
          </li>
        </NavLink>
      </ul>
    </div>
    
  );
};

export default Nav;