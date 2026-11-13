import React from 'react';
import { testimonialData } from '../data/content';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { DiamondFlourish } from './brand/BrandAssets';

export const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-[#18090F] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12 md:mb-16">
          <DiamondFlourish />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#24060E] dark:text-white font-serif-royal">
            Trusted by India’s Leading Banquet Owners
          </h2>
          <p className="text-sm sm:text-base text-[#695358] dark:text-[#BCA8AC] max-w-2xl mx-auto">
            Hear how venue sales heads and banquet general managers turn unbooked dates into peak celebration revenue.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialData.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-7 bg-[#FAF4EE] dark:bg-[#1E0C13] border border-[#EADBD2] dark:border-[#3A1B26] hover:border-[#C59A58] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#C59A58]/30" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#24060E] dark:text-[#FAF4EE] italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Profile & Verified Stat */}
              <div className="mt-6 pt-5 border-t border-[#EADBD2]/70 dark:border-[#3A1B26]/70 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C59A58]"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-[#24060E] dark:text-white">{item.name}</h4>
                    <p className="text-xs text-[#695358] dark:text-[#BCA8AC]">{item.role}</p>
                    <p className="text-[11px] font-semibold text-[#6B1124] dark:text-[#E4C896]">{item.venue}</p>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#250F18] border border-[#EADBD2] dark:border-[#3A1B26] flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{item.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
