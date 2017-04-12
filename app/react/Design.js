import React, {Component} from 'react'

export default class Presentations extends Component{
  constructor () {
    super();
    this.state = {
      box: false,
    }
    this.showBox = this.showBox.bind(this);
    this.hideBox = this.hideBox.bind(this);
  }

  showBox () {
    this.setState({box: true})
  }

  hideBox () {
    this.setState({box: false})
  }

  render() {
    const props = this.props;
    return (
      <div className='design' id={`design${props.design.id}`} tabIndex={0}>
        <div className='img-frame'>
          <img className={props.design.orientation === 'land' ? 'landscape' : 'portrait'} src={props.design.image} alt={props.design.alt} />
        </div>
        <div className='text'>
          <h3>{props.design.name}</h3>
          <h4>{props.design.year}</h4>
          <a className='button' tabIndex={0} onClick={this.showBox}>View {props.design.short} Larger</a>
        </div>
      </div>
    )
  }
}