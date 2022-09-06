import React from 'react'
import useFetch from '../hooks/useFetch';

const CardResidents = ({url}) => {
  const resident = useFetch(url)

  return (
    <article className='card__residents'>
      <div className='card__img'>
        <div className='card__resident--status'>
          <i className={`bx bxs-circle bg-${resident?.status}`}></i>
          <span><strong>{resident?.status}</strong></span>
        </div>
        <img src={resident?.image} alt="" />
      </div>

      <div className='card__info'>
        <h2>{resident?.name}</h2>
        <br />
        <ul className='card__content'>
          <li><h5>SPECIES</h5> <strong>{resident?.species}</strong></li>
          <br />
          <li><h5>ORIGIN</h5> <strong>{resident?.origin.name}</strong></li>
          <br />
          <li><h5>APPEARANCES IN EPISODES</h5> <strong>{resident?.episode.length}</strong></li>
        </ul>
      </div>
    </article>
  )
}

export default CardResidents