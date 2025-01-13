import React from 'react';
import ScrollUpButton from 'react-scroll-up';

const ScrollUp = () => {
  return (
    <div>
      <h1>Scroll Down to See Scroll-Up Button</h1>
      {/* Add content to make page scrollable */}
      <div style={{ height: '2000px' }}></div>

      {/* Scroll Up Button */}
      <ScrollUpButton />
    </div>
  );
};

export default ScrollUp;
