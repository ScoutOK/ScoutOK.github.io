import React, {Component} from 'react';
import {connect} from 'react-redux';

import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Presentations from './Presentations';
import Designs from './Designs';
import Transition from './Transition';
import Footer from './Footer';
import Shadowbox from './Shadowbox';


class Main extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render () {
    return (
      <div id='top'>
        <Navbar />
        <div id='main-cont'>
          <Hero />
          <Transition />
          <Projects />
          <Presentations />
          <Designs />
          <Footer />
        </div>
        {this.props.showBox ? <Shadowbox /> : null}
      </div>
    )
  }
}

const mapState = ({showBox}) => ({
  showBox
})

export default connect(mapState)(Main);