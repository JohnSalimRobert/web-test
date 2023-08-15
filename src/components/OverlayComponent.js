import React from 'react';
import logo2 from '../images/logo2.png'
const OverlayComponent = () => {
  return (
    <div className="overlay flex items-center justify-center rounded-full rotate-120 drop-shadow-md">
     <img src={logo2} alt='logo' className='p-2'></img>
    </div>
  );
};

export default OverlayComponent;
