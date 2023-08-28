import React from 'react'
import './about.css'
import { Left } from './components/Left'
import { Center } from './components/Center'
import { Right } from './components/Right'


export const About = () => {
  return (
    <div className='container-about'>
     <Left />
     <Center />
     <Right />
    </div>
  )
}
