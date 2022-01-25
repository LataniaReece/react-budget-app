import React from 'react';

const FeaturesTopComponent = () => {
  return (
    <div className='features-top'>
      <div className='feature-item'>
        <div className='img-container'>
          <img src='/assets/feature1.png' alt='money' />
        </div>
        <div className='content'>
          <h3>Easy to use, simple to understand</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            possimus culpa nemo veniam ex laborum iusto temporibus molestias
            pariatur. Perferendis at laboriosam rem corrupti vel iste non veniam
            ex sit
          </p>
        </div>
      </div>
      <div className='feature-item order-1'>
        <div className='img-container'>
          <img src='/assets/feature2.png' alt='data' />
        </div>
        <div className='content'>
          <h3>Create budgets and stick to them</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            possimus culpa nemo veniam ex laborum iusto temporibus molestias
            pariatur. Perferendis at laboriosam rem corrupti vel iste non veniam
            ex sit
          </p>
        </div>
      </div>
      <div className='feature-item'>
        <div className='img-container'>
          <img src='/assets/feature3.png' alt='laptop check' />
        </div>
        <div className='content'>
          <h3>Get your credit score for free</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            possimus culpa nemo veniam ex laborum iusto temporibus molestias
            pariatur. Perferendis at laboriosam rem corrupti vel iste non veniam
            ex sit
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTopComponent;
