import React from 'react';
import Scroll, {Link} from 'react-scroll';


export default (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link activeClass='active' to='top' spy={true} smooth={true}>
            <span>Home</span>
            <div className='underline'></div>
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='projects' spy={true} smooth={true}>
            <span>Projects</span>
            <div className='underline'></div>
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='presentations' spy={true} smooth={true}>
            <span>Presentations</span>
            <div className='underline'></div>
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='design' spy={true} smooth={true}>
            <span>Design Work</span>
            <div className='underline'></div>
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='contact' spy={true} smooth={true}>
            <span>Contact</span>
            <div className='underline'></div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

