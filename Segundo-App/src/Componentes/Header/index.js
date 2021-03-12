import React from 'react';
import './style.css';
import logo from './logo-senai1.png';
function Header() 
{
 return(
   <header className> Escola Senai Suiço-Brasileira "Paulo Ernesto Tolle" <img src={logo} alt="logo"/><br></br>
   </header>
 );   
}
export default Header;