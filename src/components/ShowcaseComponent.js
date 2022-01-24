import React from 'react';

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
          <div className='cta-btn'>View Tracker</div>
        </div>
        <div className='img'>
          <object data='/assets/money1.svg'></object>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseComponent;
