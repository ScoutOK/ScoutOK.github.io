import React from 'react';

import designs from '../../public/data/designs';

import Design from './Design';

export default (props) => {
  return (
    <section id='design'>
      <h2>Design Work</h2>
      <div className='flex-design'>
        {designs.map((design, idx)=> {
          return <Design design={design} key={design.id}/>
        })}
      </div>
    </section>
  )
}