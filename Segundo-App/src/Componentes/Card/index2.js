import React from 'react';
import './style.css';
import imagem2 from './excel.png';
function Card2()
{
  return(
<div className= "card-container">
 <p>Excel Completo
</p>
<img src={imagem2} alt="imagem" className="imagem2"/><br></br>
 Valor: Gratuito<br></br>
 Carga Horária: 80 Horas.
 </div>
 
  );
}

export default Card2;