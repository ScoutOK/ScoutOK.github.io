import React, {Component} from 'react'

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render () {
    return (
      <div id='sidebar'>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
          <li>Project 4</li>
        </ul>
      </div>
    )
  }
}