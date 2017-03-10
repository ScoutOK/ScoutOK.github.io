import React from 'react';
import Scroll, {Link} from 'react-scroll';


export default (props) => {
  return (
    <nav>
      <ul>
        <li><Link activeClass='active' to='top' spy={true} smooth={true}>Home</Link></li>
        <li><Link activeClass='active' to='projects' spy={true} smooth={true}>Projects</Link></li>
        <li><Link activeClass='active' to='presentations' spy={true} smooth={true}>Presentations</Link></li>
        <li><Link activeClass='active' to='design' spy={true} smooth={true}>Design Work</Link></li>
        <li><Link activeClass='active' to='contact' spy={true} smooth={true}>Contact</Link></li>
      </ul>
    </nav>
  )
}

