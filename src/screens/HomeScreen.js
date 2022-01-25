import React from 'react';
import HeaderComponent from '../components/home/HeaderComponent';
import BottomCtaComponent from '../components/home/BottomCtaComponent';
import FeaturesComponent from '../components/home/features/FeaturesComponent';
import FooterComponent from '../components/home/FooterComponent';
import ReviewComponent from '../components/home/ReviewComponent';
import ShowcaseComponent from '../components/home/ShowcaseComponent';

const HomeScreen = () => {
  return (
    <div>
      <HeaderComponent />
      <ShowcaseComponent />
      <FeaturesComponent />
      <ReviewComponent />
      <BottomCtaComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeScreen;
