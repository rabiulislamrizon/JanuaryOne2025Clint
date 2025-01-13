import React from 'react';
import ScrollUpButton from 'react-scroll-up'; // Import the library component

const ScrollComponent = () => {  // Renamed the custom component to avoid naming conflict
  return (
    <div>
      <h1>Scroll Down to See Scroll-Up Button</h1>
      
      {/* Add content to make page scrollable */}
      <div style={{ height: '2000px' }}></div>

      {/* Scroll Up Button from the library */}
      <ScrollUpButton />
    </div>
  );
};

export default ScrollComponent;
