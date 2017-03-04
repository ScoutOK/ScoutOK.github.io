import React from 'react'

export default (props) => (
  <div className='project' id={props.project.id}>
    <div className='picture-frame' style={{backgroundImage: `url(${props.project.image})`}}></div>
    <div className='blocker'>
      <h3>{props.project.name}</h3>
      <p>{props.project.shortText}</p>
      {props.project.collabs ? <p><b>Collaborators:</b> {props.project.collabs.join(', ')}</p>: null}
      {props.project.technologies ? <p><b>Technologies:</b> {props.project.technologies.join(', ')}</p>: null}
      <a  className='button' href={props.project.github}>GitHub</a>
      {props.project.otherButtons.map((button, idx)=>{
        return (
          <a href={button.url} key={idx} className='button'>{button.title}</a>
        )
      })}
    </div>
  </div>
)