import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import DiscoverySection from '../components/DiscoverySection';
import TransformationSection from '../components/TransformationSection';
import SocialProofSection from '../components/SocialProofSection';
import EcosystemSection from '../components/EcosystemSection';
import FinalCTA from '../components/FinalCTA';

const NewHomepage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <ProblemSection />
      <DiscoverySection />
      <TransformationSection />
      <SocialProofSection />
      <EcosystemSection />
      <FinalCTA />
    </div>
  );
};

export default NewHomepage;