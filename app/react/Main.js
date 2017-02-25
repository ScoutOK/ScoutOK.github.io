import React, {Component} from 'react'

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Projects from './Projects';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render () {
    return (
      <div>
        <Navbar />
        <div id='hor-flex'>
          <Sidebar />
          <div id='right-cont'>
              <Projects />
          </div>
        </div>
      </div>
    )
  }
}