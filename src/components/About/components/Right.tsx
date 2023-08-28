import React from 'react'
import heart from '../../../assets/planeta.jpeg'
import robot from '../../../assets/robot.jpg'

export const Right = () => {
    return (
        <div className='about-right'>

            <div className='about-items'>
                <div className="location">
                    <img src={heart} className='img-location' />
                    <label className='label-location' >Argentina</label>
                </div>

                <div className="robot">
                    <img src={robot} className='img-robot' />
                    <label className='label-robot' >Robotica</label>
                </div>
            </div>

            <div className="contact">
                <a href="https://github.com/Jwilv" target='_blank'><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/juan-wilvers-450a11233/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            </div>

            <div className="download-cv">
                <button>Descargar CV</button>
            </div>

        </div>
    )
}