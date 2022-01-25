import React from 'react';

const FeaturesBottomComponent = () => {
  return (
    <div className='features-bottom'>
      <div className='column'>
        <div className='col-features'>
          <div className='item'>
            <i className='far fa-star'></i>
            <h4>Budget Planning</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea
              nihil quia? Ab, enim eligendi
            </p>
          </div>
        </div>
        <div className='col-features'>
          <div className='item'>
            <i className='far fa-clock'></i>
            <h4>Credit Monitoring</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea
              nihil quia? Ab, enim eligendi
            </p>
          </div>
        </div>
        <div className='col-features'>
          <div className='item'>
            <i className='fas fa-money-check'></i>
            <h4>Track your Spending</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea
              nihil quia? Ab, enim eligendi
            </p>
          </div>
        </div>
      </div>
      <div className='safety'>
        <i className='far fa-check-circle'></i>
        <h3>Your data, safe and secure</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eius
          tenetur cumque eligendi sed tempore. Culpa ratione, sapiente beatae
          maxime ullam cum praesentium illum itaque.
        </p>
        <a href='#!'>Learn more about security</a>
      </div>
    </div>
  );
};

export default FeaturesBottomComponent;
