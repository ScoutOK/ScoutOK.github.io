import React, {Component} from 'react';

import presentations from '../../public/data/presentations';

import Presentation from './Presentation';

export default class Presentations extends Component {
  constructor (){
    super()
    this.state = {
      currSlide: 1,
      slideNum: presentations.length
    }
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next (currSlide, slideNum) {
    currSlide++
    if (currSlide <= slideNum) this.setState({currSlide: currSlide});
    else this.setState({currSlide: 1});
  }

  prev (currSlide, slideNum) {
    currSlide--
    if (currSlide >= 1) this.setState({currSlide: currSlide});
    else this.setState({currSlide: slideNum});
  }

  render () {

  return (
    <section id='presentations'>
      <h2>Presentations</h2>
      <div className='content'>
        <img className='slide-arrow left-arrow' src='public/img/slideLeft.svg' alt='move to previous slide' onClick={()=>{this.prev(this.state.currSlide, this.state.slideNum)}}/>
        {presentations.map((presentation, idx)=> {
          return <Presentation presentation={presentation} key={presentation.id} active={idx === this.state.currSlide - 1}/>
        })}
        <div id='pres-dots'>
          {presentations.map((presentation, idx)=>{
            return (
              <div className={idx+1 === this.state.currSlide ? 'dot current': 'dot'} key={idx}>
              </div>
            )
          })}
        </div>
        <img className='slide-arrow right-arrow' src='public/img/slideRight.svg' alt='move to next slide' onClick={()=>{this.next(this.state.currSlide, this.state.slideNum)}}/>
      </div>
    </section>
  )
  }
}