import React, {Component} from 'react'

import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Presentations from './Presentations';
import Transition from './Transition';
import Footer from './Footer';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render () {
    return (
      <div>
        <Navbar />
        <div id='main-cont'>
          <Hero />
          <Transition />
          <Projects />
          <Transition />
          <Presentations />
          <Footer />
        </div>
      </div>
    )
  }
}