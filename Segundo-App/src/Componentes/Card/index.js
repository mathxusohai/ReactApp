import React from 'react';
import './style.css';
import imagem from './economiapng.png';
function Card()
{
  return(
<div className= "card-container">
 <p className="title">Economia Circular<br></br>
 </p>
 <img src={imagem} alt="imagem" className="imagem"/>
 Valor: Gratuito<br></br>
 Carga Horária: 20 Horas.
 </div>

  );
}

export default Card;