import React, {Component} from 'react';
import {connect} from 'react-redux';

import {showBox} from '../ducks/shadowbox'

const Design = (props) => (
  <div className='design' id={`design${props.design.id}`} tabIndex={0}>
    <div className='img-frame'>
      <img className={props.design.orientation === 'land' ? 'landscape' : 'portrait'} src={props.design.image} alt={props.design.alt} />
    </div>
    <div className='text'>
      <h3>{props.design.name}</h3>
      <h4>{props.design.year}</h4>
      <a className='button' tabIndex={0} onClick={props.revealBox}>View {props.design.short} Larger</a>
    </div>
  </div>
)

const mapDispatch = (dispatch) => ({
  revealBox: () => {
    console.log('in mapDispatch')
    dispatch(showBox())
  }
})

export default connect(null, mapDispatch)(Design);