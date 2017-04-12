import React from 'react';
import Scroll, {Link} from 'react-scroll';


export default (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link activeClass='active' to='top' spy={true} smooth={true} tabIndex={0}>
            <span>Home</span>
            <div className='underline'></div>
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='projects' spy={true} smooth={true} tabIndex={0}>
            <span>Projects</span>
            <div className='underline'></div>
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='presentations' spy={true} smooth={true} tabIndex={0}>
            <span>Presentations</span>
            <div className='underline'></div>
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='designs' spy={true} smooth={true} tabIndex={0}>
            <span>Design Work</span>
            <div className='underline'></div>
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='contact' spy={true} smooth={true} tabIndex={0}>
            <span>Contact</span>
            <div className='underline'></div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

