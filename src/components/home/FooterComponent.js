import React from 'react';

const FooterComponent = () => {
  return (
    <footer>
      <div className='top'>
        <div className='container'>
          <h5>Sitemap</h5>
          <ul className='social-media'>
            <li>
              <a href='#!'>
                <i className='fab fa-youtube'></i>
              </a>
            </li>
            <li>
              <a href='#!'>
                <i className='fas fa-wifi'></i>
              </a>
            </li>
            <li>
              <a href='#!'>
                <i className='fab fa-facebook-square'></i>
              </a>
            </li>
            <li>
              <a href='#!'>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='#!'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='bottom'>
        <div className='container'>
          <div className='left-col'>
            <object
              className='intuit'
              data='/assets/intuit-logo.svg'
              aria-labelledby='intuit'
            ></object>
            <div className='wrapper'>
              <div className='footer-widget'>
                <ul className='links'>
                  <li>
                    <a href='#!'>About</a>
                  </li>
                  <li>
                    <a href='#!'>Join Our Team</a>
                  </li>
                  <li>
                    <a href='#!'>Press</a>
                  </li>
                  <li>
                    <a href='#!'>Privacy Security</a>
                  </li>
                  <li>
                    <a href='#!'>Contact</a>
                  </li>
                </ul>
              </div>
              <div className='footer-widget'>
                <ul className='links'>
                  <li>
                    <a href='#!'>Term Of Service</a>
                  </li>
                  <li>
                    <a href='#!'>FAQs</a>
                  </li>
                  <li>
                    <a href='#!'>Affiliates and Partners</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='right-col'>
            <div className='logos'>
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
              <img
                className='credit'
                src='/assets/creditkarmalogo.png'
                alt=''
              />
            </div>
            <p>
              &copy; 2007-2022 Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Facere reiciendis expedita, dolorum
              reprehenderit possimus quam illo accusantium odit omnis rerum
              minima tempore
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              beatae, velit distinctio inventore architecto quos
            </p>
            <p>
              By accessing and using this page you agree to the
              <a href='#!'>Terms and Conditions</a>.
            </p>
            <p>
              <a href='#!'>Accessibility</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
