import React from 'react';

import designs from '../../public/data/designs';

import Design from './Design';
import Transition from './Transition'

export default (props) => {
  return (
    <section id='designs'>
      <h2>Design Work</h2>
      <div className='flex-design content'>
        {designs.map((design, idx)=> {
          return <Design design={design} key={design.id}/>
        })}
      </div>
      <Transition />
    </section>
  )
}