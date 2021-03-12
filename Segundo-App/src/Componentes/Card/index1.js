import React from 'react';
import './style.css';
import imagem1 from './informatica.png';
function Card1()
{
  return(
<div className= "card-container">
 <p>Informática Básica</p><br></br>
 <img src={imagem1} alt="imagem" className="imagem1"/>
 Valor: Gratuito<br></br>
 Carga Horária: 80 Horas.
 </div>
 
  );
}

export default Card1;