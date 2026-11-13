import React, { useState, useEffect } from 'react';
import { WedEazzyLogo } from './brand/BrandAssets';
import { Phone, ArrowRight, Menu, X, Building2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onOpenOnboard: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOnboard }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Audience Reach', href: '#audience' },
    { label: 'ROI Calculator', href: '#calculator' },
    { label: 'Platform Features', href: '#features' },
    { label: 'Ballroom Showcase', href: '#gallery' },
    { label: 'Success Stories', href: '#testimonials' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF4EE]/95 dark:bg-[#120509]/95 backdrop-blur-md shadow-sm border-b border-[#EADBD2]/80 dark:border-[#3A1B26] py-3'
          : 'bg-[#FAF4EE] dark:bg-[#120509] py-4 md:py-5 border-b border-[#EADBD2]/40 dark:border-[#3A1B26]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="cursor-pointer transition-transform hover:scale-[1.02]">
            <WedEazzyLogo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#695358] dark:text-[#BCA8AC] hover:text-[#6B1124] dark:hover:text-[#E4C896] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6B1124] dark:after:bg-[#E4C896] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <a
              href="tel:7498987620"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs md:text-sm font-bold text-[#6B1124] dark:text-[#E4C896] hover:bg-[#F6ECE6] dark:hover:bg-[#2A101B] rounded-full border border-[#EADBD2] dark:border-[#3A1B26] transition-colors"
              title="Call WedEazzy Onboarding Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59A58]" />
              <span>7498987620</span>
            </a>

            <button
              onClick={onOpenOnboard}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6B1124] hover:bg-[#530B1B] dark:bg-[#8C1C35] dark:hover:bg-[#A52642] text-white font-semibold text-xs md:text-sm transition-all duration-300 wine-glow-cta cursor-pointer"
            >
              <span>Get Listed Today</span>
              <ArrowRight className="w-4 h-4 text-[#E4C896] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center sm:hidden gap-2">
            <ThemeToggle />
            <button
              onClick={onOpenOnboard}
              className="px-3.5 py-2 text-xs font-bold rounded-full bg-[#6B1124] dark:bg-[#8C1C35] text-white shadow-sm"
            >
              List Venue
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#6B1124] dark:text-[#E4C896] hover:bg-[#F6ECE6] dark:hover:bg-[#2A101B]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#EADBD2] dark:border-[#3A1B26] animate-in fade-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-[#24060E] dark:text-[#FAF4EE] hover:bg-[#F6ECE6] dark:hover:bg-[#2A101B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:7498987620"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#C59A58]/50 bg-[#F6ECE6] dark:bg-[#2A101B] text-[#6B1124] dark:text-[#E4C896] font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#C59A58]" />
                  <span>Call Desk: 7498987620</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOnboard();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#6B1124] dark:bg-[#8C1C35] text-white font-bold text-sm shadow-md"
                >
                  <Building2 className="w-4 h-4 text-[#E4C896]" />
                  <span>Get Listed Today →</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
