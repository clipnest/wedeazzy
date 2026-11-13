import React from 'react';
import { ArrowRight, Users } from 'lucide-react';

interface FinalCtaBannerProps {
  onOpenOnboard: () => void;
}

export const FinalCtaBanner: React.FC<FinalCtaBannerProps> = ({ onOpenOnboard }) => {
  return (
    <section className="py-12 md:py-16 bg-[#FAF4EE] dark:bg-[#120509] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container matching flyer layout */}
        <div className="bg-white dark:bg-[#1E0C13] rounded-3xl p-6 sm:p-10 border-2 border-[#EADBD2] dark:border-[#3A1B26] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 transition-colors">
          
          {/* Left Block with Icon & Headline */}
          <div className="flex items-center gap-4 sm:gap-5 text-center sm:text-left">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#6B1124] dark:bg-[#8C1C35] text-[#E4C896] flex items-center justify-center shrink-0 shadow-lg">
              <Users className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#24060E] dark:text-white font-serif-royal">
                Be Part of India's Most Trusted <br className="hidden sm:inline" />
                <span className="text-[#6B1124] dark:text-[#E4C896]">Wedding Vendor Platform</span>
              </h3>
            </div>
          </div>

          {/* Middle Explanatory Text */}
          <div className="text-center lg:text-left max-w-md">
            <p className="text-xs sm:text-sm text-[#695358] dark:text-[#BCA8AC] leading-relaxed">
              List your banquet hall on WedEazzy and connect with more high-budget opportunities every single day. Fast approval within 24 hours.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 w-full sm:w-auto flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenOnboard}
              className="px-8 py-4 rounded-full bg-[#6B1124] hover:bg-[#530B1B] dark:bg-[#8C1C35] dark:hover:bg-[#A52642] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 wine-glow-cta cursor-pointer group shadow-lg"
            >
              <span>Get Listed Today</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-[#E4C896]" />
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
