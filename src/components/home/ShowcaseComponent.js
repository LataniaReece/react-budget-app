import React from 'react';
import { Link } from 'react-router-dom';

const ShowcaseComponent = () => {
  return (
    <div className='showcase'>
      <div className='container flex'>
        <div className='content'>
          <h2>
            Discover a better way to <span>manage your money</span>
          </h2>
          <p>
            Reach your goals with this budget tracker, monitor your expenses,
            income, and budget-all for free.
          </p>
          <Link to='/tracker' className='cta-btn'>
            View Tracker
          </Link>
        </div>
        <div className='img'>
          <object data='/assets/money1.svg' aria-labelledby='money'></object>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseComponent;
