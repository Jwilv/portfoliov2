import React from 'react'
import hello from '../../../assets/hello.gif'

export const Left = () => {
    return (
        <div className="colum-left">
            <img src={hello} className='img-about' />
            <div className="about-desc">
                <div className="desc">
                    <i className='precentacion'>Soy Juan Ignacio Wilvers</i>
                    <p>Un desarrollador atraído por el mundo del desarrollo de aplicaciones.</p>
                    <p>Me especializo en front-end con React,
                        tengo dos años y medio de experiencia trabajando en múltiples proyectos propios y en grupo.
                    </p>
                    <p>
                    Cuento actualmente con un año de experiencia laboral. 
                    donde me estoy involucrado en el desarrolo front-end y back-end.

                    </p>
                    <p>
                    ADesarrollo con React, realizo la integración de 
                    distintas APIs y la creación de servicios.
                    </p>
                    <p>
                    Asimismo, también soy estudiante de electrónica.
                    </p>
                </div>
            </div>
        </div>
    )
}
