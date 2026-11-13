import React from 'react';
import { benefitsData } from '../data/content';
import { Eye, ShieldCheck, CalendarDays, Image as ImageIcon, Settings, Headphones, ArrowUpRight } from 'lucide-react';
import { DiamondFlourish } from './brand/BrandAssets';

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-6 h-6 text-[#6B1124] dark:text-[#E4C896]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#6B1124] dark:text-[#E4C896]" />,
  CalendarDays: <CalendarDays className="w-6 h-6 text-[#6B1124] dark:text-[#E4C896]" />,
  Image: <ImageIcon className="w-6 h-6 text-[#6B1124] dark:text-[#E4C896]" />,
  Settings: <Settings className="w-6 h-6 text-[#6B1124] dark:text-[#E4C896]" />,
  Headphones: <Headphones className="w-6 h-6 text-[#6B1124] dark:text-[#E4C896]" />,
};

interface WhyChooseUsProps {
  onOpenOnboard: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenOnboard }) => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white dark:bg-[#18090F] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Burgundy Pill & Gold Flourish */}
        <div className="text-center space-y-4 mb-14 md:mb-16">
          <DiamondFlourish />
          
          <div className="inline-block">
            <span className="px-6 py-2 rounded-full bg-[#6B1124] dark:bg-[#8C1C35] text-white text-sm sm:text-base font-bold tracking-wide shadow-md">
              Why Banquet Halls Choose WedEazzy
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#24060E] dark:text-white font-serif-royal">
            Built Exclusively to Fill Your Luxury Event Calendar
          </h2>
          <p className="text-sm sm:text-base text-[#695358] dark:text-[#BCA8AC] max-w-2xl mx-auto">
            Traditional directories charge exorbitant upfront fees for poor-quality leads. WedEazzy gives you direct client connections, verified profiles, and effortless bookings.
          </p>
        </div>

        {/* 6 Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#FAF4EE]/70 dark:bg-[#1E0C13]/80 hover:bg-white dark:hover:bg-[#250F18] rounded-3xl p-7 border border-[#EADBD2] dark:border-[#3A1B26] hover:border-[#C59A58] transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Header of Card: Icon + Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#F6ECE6] dark:bg-[#2A101B] group-hover:bg-[#6B1124] dark:group-hover:bg-[#8C1C35] flex items-center justify-center transition-colors duration-300 shadow-inner">
                    <span className="group-hover:text-[#E4C896] transition-colors duration-300">
                      {iconMap[item.iconName]}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59A58] bg-white dark:bg-[#2A101B] group-hover:bg-[#F6ECE6] dark:group-hover:bg-[#381624] px-3 py-1 rounded-full border border-[#EADBD2] dark:border-[#3A1B26]">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#24060E] dark:text-white group-hover:text-[#6B1124] dark:group-hover:text-[#E4C896] transition-colors mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#695358] dark:text-[#BCA8AC] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Stat Bar */}
              <div className="mt-6 pt-4 border-t border-[#EADBD2]/60 dark:border-[#3A1B26]/60 flex items-center justify-between">
                <span className="text-xs font-bold text-[#4A0A17] dark:text-[#F0D4A0]">
                  {item.metric}
                </span>
                <span className="text-xs font-semibold text-[#6B1124] dark:text-[#E4C896] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenOnboard}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#6B1124] dark:text-[#E4C896] hover:text-[#530B1B] dark:hover:text-white underline underline-offset-8 decoration-[#C59A58] hover:decoration-[#6B1124] transition-all"
          >
            Ready to showcase your banquet hall? Start your free listing in 3 minutes →
          </button>
        </div>

      </div>
    </section>
  );
};
