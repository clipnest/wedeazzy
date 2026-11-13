import React from 'react';
import { ArrowRight, TrendingUp, Users, Trophy, Building2, CheckCircle2, Shield, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenOnboard: () => void;
  onExploreCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOnboard, onExploreCalculator }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-28">
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59A58]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#6B1124]/5 dark:bg-[#8C1C35]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Value Pillars, & Actions (7 cols) */}
          <div className="lg:col-span-7 z-10 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Top Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6ECE6] dark:bg-[#2A101B] border border-[#EADBD2] dark:border-[#3A1B26] text-[#6B1124] dark:text-[#E4C896] text-xs md:text-sm font-semibold tracking-wide transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-[#C59A58] animate-pulse" />
              <span>India's Premier Wedding Venue Platform</span>
              <span className="text-[#C59A58]">✦</span>
              <span className="text-[#695358] dark:text-[#BCA8AC] font-normal">Pan-India Reach</span>
            </div>

            {/* Main Display Headline */}
            <div className="space-y-2">
              <p className="text-lg md:text-2xl font-serif text-[#695358] dark:text-[#BCA8AC] tracking-wide italic">
                The Smart Platform for
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#6B1124] dark:text-[#E4C896] uppercase font-serif-royal leading-[1.08]">
                Banquet <br className="hidden sm:inline" />
                <span className="text-[#24060E] dark:text-white relative inline-block">
                  Halls
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#C59A58] to-transparent rounded-full" />
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#4A0A17] dark:text-[#F0D4A0] max-w-xl mx-auto lg:mx-0 leading-snug">
              Showcase Your Venue. Get Booked.{' '}
              <span className="text-[#C59A58] font-bold">Grow Your Business.</span>
            </p>

            <p className="text-sm sm:text-base text-[#695358] dark:text-[#BCA8AC] max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Connect directly with thousands of verified couples and top wedding planners looking to book high-budget banquet spaces, sangeet ballrooms, and luxury wedding lawns.
            </p>

            {/* 3 Pillars from Reference Flyer: Grow, Connect, Succeed */}
            <div className="pt-2 pb-1">
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
                {/* Grow */}
                <div className="group p-3 sm:p-4 rounded-2xl bg-white dark:bg-[#1E0C13] border border-[#EADBD2] dark:border-[#3A1B26] text-center hover:border-[#C59A58] hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-[#F6ECE6] dark:bg-[#2A101B] flex items-center justify-center text-[#C59A58] group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="mt-2 text-sm sm:text-base font-bold text-[#24060E] dark:text-white">Grow</h3>
                  <p className="text-[11px] text-[#695358] dark:text-[#BCA8AC] mt-0.5 hidden sm:block">Fill Open Dates</p>
                </div>

                {/* Connect */}
                <div className="group p-3 sm:p-4 rounded-2xl bg-white dark:bg-[#1E0C13] border border-[#EADBD2] dark:border-[#3A1B26] text-center hover:border-[#C59A58] hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-[#F6ECE6] dark:bg-[#2A101B] flex items-center justify-center text-[#C59A58] group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="mt-2 text-sm sm:text-base font-bold text-[#24060E] dark:text-white">Connect</h3>
                  <p className="text-[11px] text-[#695358] dark:text-[#BCA8AC] mt-0.5 hidden sm:block">Verified Planners</p>
                </div>

                {/* Succeed */}
                <div className="group p-3 sm:p-4 rounded-2xl bg-white dark:bg-[#1E0C13] border border-[#EADBD2] dark:border-[#3A1B26] text-center hover:border-[#C59A58] hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-[#F6ECE6] dark:bg-[#2A101B] flex items-center justify-center text-[#C59A58] group-hover:scale-110 transition-transform">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="mt-2 text-sm sm:text-base font-bold text-[#24060E] dark:text-white">Succeed</h3>
                  <p className="text-[11px] text-[#695358] dark:text-[#BCA8AC] mt-0.5 hidden sm:block">Zero Commissions</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenOnboard}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#6B1124] hover:bg-[#530B1B] dark:bg-[#8C1C35] dark:hover:bg-[#A52642] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 wine-glow-cta cursor-pointer group"
              >
                <span>Get Listed Today</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-[#E4C896]" />
                </div>
              </button>

              <button
                onClick={onExploreCalculator}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white dark:bg-[#1E0C13] hover:bg-[#F6ECE6] dark:hover:bg-[#2A101B] border border-[#C59A58] text-[#6B1124] dark:text-[#E4C896] font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer shadow-sm hover:shadow"
              >
                Estimate ROI & Leads →
              </button>
            </div>

            {/* Trust Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-[#695358] dark:text-[#BCA8AC]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#15803D] dark:text-emerald-400" />
                Free Verified Venue Profile
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#C59A58]" />
                Direct WhatsApp Inquiries
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#6B1124] dark:text-[#E4C896]" />
                Setup in 3 Minutes
              </span>
            </div>

          </div>

          {/* Right Column: Signature Grand Architectural Arch Ballroom (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Decorative Gold Frame Ring */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Grand Arch Container */}
              <div className="relative z-10 arch-mask-hero overflow-hidden shadow-2xl border-2 md:border-4 border-[#C59A58]/70 aspect-[4/5] sm:aspect-[4/4.8] bg-[#24060E]">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85"
                  alt="Opulent Royal Indian Banquet Hall with Crystal Chandeliers and Floral Mandap"
                  className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24060E]/80 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Venue Tag on Top Right */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#15803D]" />
                  <span>The Grand Imperial • Verified Venue</span>
                </div>

                {/* Subtle Decorative Arch Border Inner Glow */}
                <div className="absolute inset-0 arch-mask-hero border border-[#E4C896]/30 pointer-events-none" />
              </div>

              {/* Signature Floating Badge: "More Visibility. More Bookings. More Business." */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 z-20 bg-gradient-to-r from-[#6B1124] to-[#4A0A17] dark:from-[#8C1C35] dark:to-[#4A0A17] text-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl border-2 border-[#C59A58]/60 max-w-[280px] sm:max-w-[320px] wine-glow-cta transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#530B1B] border border-[#C59A58]/40 flex items-center justify-center shrink-0 text-[#E4C896]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white tracking-wide leading-tight">
                      More Visibility.
                    </h3>
                    <h3 className="font-bold text-sm sm:text-base text-[#E4C896] tracking-wide leading-tight">
                      More Bookings.
                    </h3>
                    <p className="text-xs text-white/90 font-medium">
                      More Business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Micro Stat Badge: Top Right */}
              <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 bg-white/95 dark:bg-[#1E0C13]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#EADBD2] dark:border-[#3A1B26]">
                <div className="w-3 h-3 rounded-full bg-[#15803D]" />
                <div className="text-left">
                  <p className="text-[10px] text-[#695358] dark:text-[#BCA8AC] font-bold uppercase tracking-wider">Active Wedding Inquiries</p>
                  <p className="text-xs font-extrabold text-[#24060E] dark:text-white">4,850+ This Week</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
