import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import PowerNodeSection from '../components/PowerNodeSection';
import SuccessStories from '../components/SuccessStories';
import EcosystemSection from '../components/EcosystemSection';
import PlanSection from '../components/PlanSection';
import StakesSection from '../components/StakesSection';
import FinalCTA from '../components/FinalCTA';

const Homepage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PowerNodeSection />
      <SuccessStories />
      <EcosystemSection />
      <PlanSection />
      <StakesSection />
      <FinalCTA />
    </div>
  );
};

export default Homepage;