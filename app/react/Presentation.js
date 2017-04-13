import React from 'react'

export default (props) => (
  <div className={props.active ? 'presentation active' : 'presentation'} id={props.presentation.id}>
    <div className='frame-container'>
      <iframe src={props.presentation.videoUrl} frameBorder="0" allowFullScreen></iframe>
    </div>
    <h3>{props.presentation.name}</h3>
    <p>{props.presentation.description}</p>
    {/*<a href='' className='button'>Transcript</a>*/}
  </div>
)