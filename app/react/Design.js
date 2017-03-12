import React from 'react'

export default (props) => (
  <div className='design' id={`design${props.design.id}`}>
    <div className='img-frame'>
      <img src={props.design.image} alt={props.design.alt} />
    </div>
    <div className='text'>
      <h3>{props.design.name}</h3>
      <p>{props.design.description}</p>
    </div>
  </div>
)