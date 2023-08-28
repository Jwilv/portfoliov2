import React from 'react'

export const Center = () => {
  return (
    <div className='about-center'>
      <div className="center-desc">
        <div className="desc-dev">
          <label><i>Front-end</i></label>
          <p>En esta area tengo una basta experiencia desarrollando aplicaciones web
            con react.
          </p>
          <p>
            Utilizando patrones de diseño de componentes,
            estructura Redux y Reducer Context,
            integracion de APIs y Sockets,
            manejo del Service Worker y el Cache con sus diferentes
            estrategias.
            Tambien aplico arquitecturas como Clean Architecture
            y practicas como S.O.L.I.D, Clean Code y Test
          </p>
        </div>
      </div>
      <div className="center-desc">
        <div className="desc-dev">
          <label><i>Back-end</i></label>
          <p>Tengo experiencia desarrollando aplicaciones backend con Node.js
            y Express.
          </p>
          <p>creando APIs y Sockets, Manejando MongoDB.</p>
          <p>
            Suelo aplicar POO, Clean Code, Json Web Token.
            Tengo experienicia en autenticacion de usuarios,
            REST y validaciones  
          </p>
        </div>
      </div>
    </div>
  )
}
