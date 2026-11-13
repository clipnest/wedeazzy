import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AudienceReach } from './components/AudienceReach';
import { RoiCalculator } from './components/RoiCalculator';
import { PerspectiveToggle } from './components/PerspectiveToggle';
import { FeatureSuite } from './components/FeatureSuite';
import { BallroomGallery } from './components/BallroomGallery';
import { TestimonialSection } from './components/TestimonialSection';
import { FinalCtaBanner } from './components/FinalCtaBanner';
import { Footer } from './components/Footer';
import { OnboardModal } from './components/OnboardModal';
import { FloatingContact } from './components/FloatingContact';

export function App() {
  const [isOnboardOpen, setIsOnboardOpen] = useState(false);
  const [modalCapacity, setModalCapacity] = useState(800);
  const [modalPlatePrice, setModalPlatePrice] = useState(2500);

  const handleOpenOnboard = () => {
    setIsOnboardOpen(true);
  };

  const handleOpenOnboardWithData = (capacity: number, platePrice: number) => {
    setModalCapacity(capacity);
    setModalPlatePrice(platePrice);
    setIsOnboardOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAF4EE] dark:bg-[#120509] text-[#24060E] dark:text-[#FAF4EE] transition-colors duration-300 flex flex-col font-sans selection:bg-[#6B1124] selection:text-white">
        {/* Sticky Royal Header with Day/Night Toggle */}
        <Header onOpenOnboard={handleOpenOnboard} />

        {/* Main Page Flow */}
        <main className="flex-1">
          {/* 1. Architectural Arch Hero Section */}
          <HeroSection
            onOpenOnboard={handleOpenOnboard}
            onExploreCalculator={handleScrollToCalculator}
          />

          {/* 2. Why Banquet Halls Choose WedEazzy (6 Bento Cards) */}
          <WhyChooseUs onOpenOnboard={handleOpenOnboard} />

          {/* 3. Reach the Right Audience (Audience Tags + Laptop/Mobile Device Mockups) */}
          <AudienceReach onOpenOnboard={handleOpenOnboard} />

          {/* 4. Interactive Banquet ROI Calculator */}
          <RoiCalculator onOpenOnboardWithData={handleOpenOnboardWithData} />

          {/* 5. Dual Perspective Switcher (Owner Portal vs Couple Discovery) */}
          <PerspectiveToggle onOpenOnboard={handleOpenOnboard} />

          {/* 6. Everything You Need to Succeed (6 Features Suite) */}
          <FeatureSuite onOpenOnboard={handleOpenOnboard} />

          {/* 7. 5-Card Luxury Ballroom Showcase with Lightbox */}
          <BallroomGallery onOpenOnboard={handleOpenOnboard} />

          {/* 8. Success Stories & Real Owner Testimonials */}
          <TestimonialSection />

          {/* 9. Final Pre-Footer Call to Action Banner */}
          <FinalCtaBanner onOpenOnboard={handleOpenOnboard} />
        </main>

        {/* 10. Deep Royal Wine Footer with Helpline + Botanical Filigree */}
        <Footer onOpenOnboard={handleOpenOnboard} />

        {/* Interactive 3-Step Venue Onboarding Drawer Modal */}
        <OnboardModal
          isOpen={isOnboardOpen}
          onClose={() => setIsOnboardOpen(false)}
          initialCapacity={modalCapacity}
          initialPlatePrice={modalPlatePrice}
        />

        {/* Floating Instant Helpline & WhatsApp Bubble */}
        <FloatingContact />
      </div>
    </ThemeProvider>
  );
}

export default App;
