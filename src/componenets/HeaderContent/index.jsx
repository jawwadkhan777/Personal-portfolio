import React from 'react'
import './style.scss'

const HeaderContent = (props) => {
    const {heading, icon} = props;

  return (
    <div className='HeaderContent'>
        <h2>{heading}</h2>
        <span>{icon}</span>
    </div>
  )
}

export default HeaderContent