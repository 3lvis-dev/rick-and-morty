import React from 'react'

const Location = ({location}) => {

  return (
    <nav className='card__location--info'>
      <h2>{location?.name}</h2>
      <ul>
        <li><b>Type:<br/> {location?.type}</b></li>        
        <li><b>Dimension:<br/> {location?.dimension}</b></li>
        <li><b>Population:<br/> {location?.residents.length}</b></li>
      </ul>
    </nav>
  )
}

export default Location