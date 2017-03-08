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
  }

  next (currSlide, slideNum) {
    console.log('next')
    if (currSlide < slideNum) this.setState({currSlide: currSlide++});
    else this.setState({currSlide: 1});
  }

  prev (currSlide, slideNum) {
    console.log('prev')
    if (currSlide > 1) this.setState({currSlide: currSlide--});
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
        <img className='slide-arrow right-arrow' src='public/img/slideRight.svg' alt='move to next slide' onClick={()=>{this.next(this.state.currSlide, this.state.slideNum)}}/>
      </div>
    </section>
  )
  }
}