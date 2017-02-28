import React from 'react'

export default (props) => (
  <div className='project' id={props.project.id} style={{backgroundImage: `url(${props.project.image})`}}>
    <div className='picture-frame'></div>
    <div className='blocker'>
      <h3>{props.project.name}</h3>
      <p>{props.project.shortText}</p>
      {props.project.collabs ? <p><b>Collaborators:</b> {props.project.collabs}</p>: null}
    </div>
  </div>
)