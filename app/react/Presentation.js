import React from 'react';

import ScrollText from './ScrollText';

export default (props) => (
  <div className={props.active ? 'presentation active' : 'presentation'} id={props.presentation.id}>
    <div className='frame-container'>
      <iframe src={props.presentation.videoUrl} frameBorder="0" allowFullScreen></iframe>
    </div>
    <h3>{props.presentation.name}</h3>
    <p>{props.presentation.description}</p>
    <a className='button' tabIndex={0} onClick={props.toggleText} onKeyPress={(props.enterToggle)}>{props.showText ? 'Hide' : 'Show'} Transcript</a>
    {props.showText ? <ScrollText text={props.presentation.transcript}/> : null}
  </div>
)