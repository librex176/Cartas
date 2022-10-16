import React from 'react';
import '../hojas_estilo/Detalle_carta.css'

export function Detalle_carta(props) {
  return(// contenedor del componente que muestra las vistas
    <div className='contenedor-carta'> 
      <img className='imagen-carta'
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt= {props.alt}/>
      <div className='texto-carta'>
        <p className='nombre-carta'>
          <strong> {props.nombre}</strong></p>
        <p className='tipo-carta'>{props.tipo}</p>
        <p className='efecto-carta'>{props.efecto}</p>
      </div>
    </div>

  );           
}

