import React from 'react';
import { featureSuiteData } from '../data/content';
import { Gem, Camera, MapPin, Star, MessageSquare, BarChart3, Check } from 'lucide-react';
import { DiamondFlourish } from './brand/BrandAssets';

const iconMap: Record<string, React.ReactNode> = {
  Gem: <Gem className="w-5 h-5" />,
  Camera: <Camera className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Star: <Star className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
};

interface FeatureSuiteProps {
  onOpenOnboard: () => void;
}

export const FeatureSuite: React.FC<FeatureSuiteProps> = ({ onOpenOnboard }) => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-[#18090F] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Diamond Header */}
        <div className="text-center space-y-3 mb-12 md:mb-16">
          <DiamondFlourish />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#24060E] dark:text-white font-serif-royal">
            Everything You Need to Succeed
          </h2>
          <p className="text-sm sm:text-base text-[#695358] dark:text-[#BCA8AC] max-w-2xl mx-auto">
            A comprehensive banquet intelligence and listing ecosystem engineered to convert curious browsers into signed wedding banquet contracts.
          </p>
        </div>

        {/* 6 Icons Feature Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {featureSuiteData.map((item) => (
            <div
              key={item.id}
              className="group p-5 rounded-2xl bg-[#FAF4EE] dark:bg-[#1E0C13] hover:bg-white dark:hover:bg-[#250F18] border border-[#EADBD2] dark:border-[#3A1B26] hover:border-[#C59A58] transition-all duration-300 hover:shadow-lg text-center flex flex-col items-center justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#2A101B] group-hover:bg-[#6B1124] dark:group-hover:bg-[#8C1C35] text-[#6B1124] dark:text-[#E4C896] group-hover:text-[#E4C896] border border-[#EADBD2] dark:border-[#3A1B26] flex items-center justify-center transition-colors duration-300 shadow-sm mb-3">
                {iconMap[item.iconName]}
              </div>

              <h3 className="font-bold text-xs sm:text-sm text-[#24060E] dark:text-white group-hover:text-[#6B1124] dark:group-hover:text-[#E4C896] transition-colors mb-1.5 leading-snug">
                {item.title}
              </h3>

              <p className="text-[11px] text-[#695358] dark:text-[#BCA8AC] leading-tight mb-3">
                {item.shortDesc}
              </p>

              <span className="text-[10px] font-bold text-[#C59A58] bg-white dark:bg-[#2A101B] px-2 py-0.5 rounded-full border border-[#EADBD2] dark:border-[#3A1B26] flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                {item.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 bg-gradient-to-r from-[#F6ECE6] dark:from-[#250F18] via-white dark:via-[#1E0C13] to-[#F6ECE6] dark:to-[#250F18] p-6 sm:p-8 rounded-3xl border border-[#EADBD2] dark:border-[#3A1B26] grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#6B1124] dark:bg-[#8C1C35] text-white flex items-center justify-center shrink-0 font-bold text-sm">
              1
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#24060E] dark:text-white">Zero Commission on Leads</h4>
              <p className="text-xs text-[#695358] dark:text-[#BCA8AC] mt-0.5">
                Keep 100% of your booking contract values. Unlike aggregators, we do not cut into your catering margins.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#6B1124] dark:bg-[#8C1C35] text-white flex items-center justify-center shrink-0 font-bold text-sm">
              2
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#24060E] dark:text-white">Direct WhatsApp Pipeline</h4>
              <p className="text-xs text-[#695358] dark:text-[#BCA8AC] mt-0.5">
                Inquiries land directly into your sales team’s WhatsApp inbox, cutting response time to under 2 minutes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#6B1124] dark:bg-[#8C1C35] text-white flex items-center justify-center shrink-0 font-bold text-sm">
              3
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#24060E] dark:text-white">Verified Trust Badge</h4>
              <p className="text-xs text-[#695358] dark:text-[#BCA8AC] mt-0.5">
                Our in-person verification badge reassures families investing ₹20L to ₹1Cr in their grand celebrations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onOpenOnboard}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF4EE] dark:bg-[#1E0C13] hover:bg-[#6B1124] dark:hover:bg-[#8C1C35] text-[#6B1124] dark:text-[#E4C896] hover:text-white dark:hover:text-white border border-[#EADBD2] dark:border-[#3A1B26] hover:border-[#6B1124] text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer"
          >
            <span>Activate All 6 Features for Your Venue Free →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
