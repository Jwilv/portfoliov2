import React from 'react'
import miniaturaChat from '../../../assets/miniaturaChat.jpeg'

export const Proyect = () => {
  return (
    <div className='container-proyect'>
      <div className='proyect'>
        <img src={miniaturaChat} alt="" />
      </div>
      <div className="title-proyects">
        <p>Chat</p>
        <hr></hr>
      </div>
    </div>
  )
}
