import React from 'react';
import FeaturesComponent from '../components/features/FeaturesComponent';
import HeaderComponent from '../components/HeaderComponent';
import ShowcaseComponent from '../components/ShowcaseComponent';

const HomeScreen = () => {
  return (
    <div>
      <HeaderComponent />
      <ShowcaseComponent />
      <FeaturesComponent />
    </div>
  );
};

export default HomeScreen;
