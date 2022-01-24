import React from 'react';

const HeaderComponent = () => {
  return (
    <header>
      <div className='top-logos'>
        <div className='container'>
          <object class='intuit' data='/assets/intuit-logo.svg'></object>
          <img class='turbo' src='/assets/turbotax-logo.png' alt='' />
          <img class='quickbooks' src='/assets/quickbooks-logo.png' alt='' />
          <img class='mint' src='/assets/intuit-mint-logo.png' alt='' />
          <img class='credit' src='/assets/creditkarmalogo.png' alt='' />
        </div>
      </div>
      <div className='navbar'>
        <div className='container'>
          <div className='logo'>
            <img class='mint' src='/assets/intuit-mint-logo.png' alt='' />
          </div>
          <ul className='links'>
            <li>
              <a href='#'>View Tracker</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
