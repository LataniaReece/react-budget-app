import React from 'react';
import FeaturesBottomComponent from './FeaturesBottomComponent';
import FeaturesTopComponent from './FeaturesTopComponent';

const FeaturesComponent = () => {
  return (
    <div className='features'>
      <FeaturesTopComponent />
      <FeaturesBottomComponent />
    </div>
  );
};

export default FeaturesComponent;
