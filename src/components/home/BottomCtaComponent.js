import React from 'react';
import { Link } from 'react-router-dom';

const BottomCtaComponent = () => {
  return (
    <div className='bottom-cta'>
      <i className='far fa-thumbs-up'></i>
      <h3>View your tracker on Mint today</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
        rerum inventore a voluptatibus facilis et, dolore doloribus nam fugiat
        quia quos, similique ipsa.
      </p>
      <Link to='/tracker' className='btn'>
        View Tracker
      </Link>
    </div>
  );
};

export default BottomCtaComponent;
