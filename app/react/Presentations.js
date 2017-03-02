import React from 'react';

import presentations from '../../public/data/presentations';

import Presentation from './Presentation';

export default (props) => {
  return (
    <section id='presentations'>
      <h2>Presentations</h2>
      {presentations.map((presentation, idx)=> {
        return <Presentation presentation={presentation} key={presentation.id}/>
      })}
    </section>
  )
}