import React from 'react'

export default (props) => (
  <div className='design' id={props.design.id}>
    <img src={props.design.image} alt={props.design.alt} />
    <h3>{props.design.name}</h3>
    <p>{props.design.description}</p>
  </div>
)