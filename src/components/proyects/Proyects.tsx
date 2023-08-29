import React from 'react'
import './proyects.css'
import { Proyect } from './components/Proyect'

export const Proyects = () => {
    return (
        <div className='container-proyects'>
            <Proyect />
            <Proyect />
        </div>
    )
}