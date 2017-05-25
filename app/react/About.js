import React from 'react';

import Transition from './Transition'

export default () => (
  <section id='about'>
    <h2>About</h2>
    <div className='content'>
      <p>Scout is a software engineer with specific career passions in data engineering and UX/UI engineering and design.
        They have experience with accessible web design and full stack javascript development.
        Specific technologies they enjoy using are React, Node.js, D3, Webpack, Python, Git, and Sockets.io.
        They also have a passion for products and techonologies that tackle complicated problems of social injustice and inequality.
        In their free time, they enjoy photography, powerlifting, and softball.</p>
      <a  className='button' href='public/OKeefeResume.pdf' target='_blank'>Resume</a>
    </div>
    <Transition />
  </section>
)