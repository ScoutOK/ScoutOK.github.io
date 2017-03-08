import React from 'react';

import presentations from '../../public/data/presentations';

import Presentation from './Presentation';

export default (props) => {
  return (
    <section id='presentations'>
      <h2>Presentations</h2>
      <img className='slide-arrow left-arrow' src='public/img/slideLeft.svg' alt='move to previous slide' />
      <img className='slide-arrow right-arrow' src='public/img/slideRight.svg' alt='move to next slide' />
      {presentations.map((presentation, idx)=> {
        return <Presentation presentation={presentation} key={presentation.id}/>
      })}
    </section>
  )
}