import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  const headerLogosEl = useRef(null);
  const defaultNavEl = useRef(null);
  const scrollingNav = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        scrollingNav.current.classList.add('persistent');
      } else {
        scrollingNav.current.classList.remove('persistent');
      }
    });
  }, []);

  return (
    <header>
      <div ref={headerLogosEl} className='top-logos'>
        <div className='container'>
          <object
            className='intuit'
            data='/assets/intuit-logo.svg'
            aria-labelledby='intuit'
          ></object>
          <img className='turbo' src='/assets/turbotax-logo.png' alt='' />
          <img
            className='quickbooks'
            src='/assets/quickbooks-logo.png'
            alt=''
          />
          <img className='mint' src='/assets/intuit-mint-logo.png' alt='' />
          <img className='credit' src='/assets/creditkarmalogo.png' alt='' />
        </div>
      </div>
      <div ref={defaultNavEl} className='navbar'>
        <div className='container'>
          <div className='logo'>
            <img className='mint' src='/assets/intuit-mint-logo.png' alt='' />
          </div>
          <Link className='cta' to='/tracker'>
            View Tracker
          </Link>
        </div>
      </div>
      <div ref={scrollingNav} className='navbar-scrolling'>
        <div className='logo'>
          <img className='mint' src='/assets/intuit-mint-logo.png' alt='' />
        </div>
        <Link className='cta' to='/tracker'>
          View Tracker
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
