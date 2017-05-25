import React from 'react';

import Transition from './Transition'

export default () => (
  <section id='about'>
    <h2>About Me</h2>
    <div className='content text'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at quam non orci tempus congue. Sed rhoncus gravida quam, non elementum odio. Donec varius aliquam imperdiet. Nulla ullamcorper nisi a convallis feugiat. Sed ullamcorper quam et porta ornare. Fusce efficitur consectetur tortor sit amet blandit. Nulla imperdiet tortor nec nulla cursus pretium non in felis. Pellentesque a porttitor odio. Duis sodales eros nisl, non fringilla justo convallis sollicitudin. Donec et diam lectus. Vestibulum vestibulum, turpis quis vehicula placerat, felis arcu varius tortor, sit amet semper odio eros eu velit. Nam mollis velit a diam commodo, ut sollicitudin enim sodales. Quisque at eros et est venenatis posuere non et risus. Donec ut lobortis nibh, non dictum elit. Mauris eu magna aliquam, pretium felis sed, porta erat.</p>
      <p>Duis vitae gravida tortor, aliquam aliquet justo. Duis in semper ex. Fusce porttitor varius nunc, in sodales ex feugiat a. Nullam mollis ligula a odio eleifend, ac auctor augue finibus. Nullam tincidunt sed sapien sed lobortis. Aliquam sodales, nisl eget euismod auctor, nisi risus sodales lorem, nec accumsan lectus nisl a libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere velit quis efficitur finibus. Phasellus lacinia pulvinar faucibus. Etiam mollis nisl sit amet risus pulvinar, a ornare elit ullamcorper. Aenean id sem quam. Nunc risus mi, cursus nec justo quis, molestie molestie enim. Duis ut ornare dolor. Nam nec ipsum commodo mauris blandit imperdiet eu vitae nisl. Nulla lobortis et lacus a iaculis. Etiam non orci vitae lectus vestibulum rutrum ac vitae sapien.</p>
      <a  className='button' href='public/OKeefeResume.pdf' target='_blank'>Resume</a>
    </div>
    <Transition />
  </section>
)