import React from 'react'

export default (props) => (
  <div className='design' id={`design${props.design.id}`} tabIndex={0}>
    <div className='img-frame'>
      <img className={props.design.orientation === 'land' ? 'landscape' : 'portrait'} src={props.design.image} alt={props.design.alt} />
    </div>
    <div className='text'>
      <h3>{props.design.name}</h3>
      <h4>{props.design.year}</h4>
      <a className='button' tabIndex={0}>View {props.design.short} Larger</a>
    </div>
  </div>
)