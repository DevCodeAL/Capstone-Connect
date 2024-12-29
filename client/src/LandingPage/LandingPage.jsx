import ProjectSection from './ProjectSections';
import About from './About';
import HomeLandingPage from './HomeLandingPage';
import CarouselContainer from './CarouselContainers';
import HowItWorks from './HowItWorks';
import FeatureSection from './FeaturesSections';
import CommunitySection from './CommunitySection';
import FooterSection from './FooterSection';
import NavigationBar from './NavigationBar';
import ContactUs from './ContactUs';

const LandingPage = () => {
  
  return (
      <>
      <NavigationBar/>
        <HomeLandingPage/>
          <CarouselContainer/>
            <HowItWorks/>
                 <About/>
              <FeatureSection/>
            <ProjectSection/>
          <CommunitySection/>
          <ContactUs/>
        <FooterSection/>
      </>
  );
};

export default LandingPage;
