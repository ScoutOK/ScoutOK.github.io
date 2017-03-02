import React from 'react'

export default (props) => (
  <div className='project' id={props.project.id}>
    <div className='picture-frame' style={{backgroundImage: `url(${props.project.image})`}}></div>
    <div className='blocker'>
      <h3>{props.project.name}</h3>
      <p>{props.project.shortText}</p>
      {props.project.collabs ? <p><b>Collaborators:</b> {props.project.collabs}</p>: null}
    </div>
  </div>
)