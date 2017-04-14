import React, {Component} from 'react';

import presentations from '../../public/data/presentations';

import Presentation from './Presentation';
import Transition from './Transition';

export default class Presentations extends Component {
  constructor (){
    super()
    this.state = {
      currSlide: 1,
      slideNum: presentations.length,
      transcript: false,
    }
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.enterNextArrow = this.enterNextArrow.bind(this);
    this.enterPrevArrow = this.enterPrevArrow.bind(this);
    this.toggleTranscript = this.toggleTranscript.bind(this);
    this.enterToggle = this.enterToggle.bind(this);
  }

  next () {
    const currSlide = this.state.currSlide + 1
    if (currSlide <= this.state.slideNum) this.setState({currSlide: currSlide});
    else this.setState({currSlide: 1});
  }

  prev () {
    const currSlide = this.state.currSlide - 1
    if (currSlide >= 1) this.setState({currSlide: currSlide});
    else this.setState({currSlide: this.state.slideNum});
  }

  enterNextArrow (e) {
    if(e.key === 'Enter') this.next();
  }

  enterPrevArrow (e) {
    if(e.key === 'Enter') this.prev();
  }

  toggleTranscript () {
    this.setState({transcript: !this.state.transcript});
  }

  enterToggle (e) {
    if(e.key === 'Enter') this.toggleTranscript();
  }

  render () {

  return (
    <section id='presentations'>
      <h2>Presentations</h2>
      <div className='content'>
        <img className='slide-arrow left-arrow' src='public/img/slideLeft.svg' alt='move to previous slide' tabIndex={0} onClick={this.prev} onKeyDown={this.enterPrevArrow}/>
        {presentations.map((presentation, idx)=> {
          return <Presentation
                  presentation={presentation}
                  showText={this.state.transcript}
                  toggleText={this.toggleTranscript}
                  enterToggle={this.enterToggle}
                  key={presentation.id}
                  active={idx === this.state.currSlide - 1}/>
        })}
        <div id='pres-dots'>
          {presentations.map((presentation, idx)=>{
            return (
              <div className={idx+1 === this.state.currSlide ? 'dot current': 'dot'} key={idx}>
              </div>
            )
          })}
        </div>
        <img className='slide-arrow right-arrow' src='public/img/slideRight.svg' alt='move to next slide' tabIndex={0} onClick={this.next}  onKeyDown={this.enterNextArrow}/>
      </div>
      <Transition />
    </section>
  )
  }
}