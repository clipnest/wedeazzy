import React, { useState } from 'react';
import { audienceData } from '../data/content';
import { HeartHandshake, Briefcase, Users, Building2, Sparkles, MoreHorizontal, Search, MapPin, ChevronRight, Laptop, Smartphone } from 'lucide-react';
import { DiamondFlourish } from './brand/BrandAssets';

const iconMap: Record<string, React.ReactNode> = {
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

interface AudienceReachProps {
  onOpenOnboard: () => void;
}

export const AudienceReach: React.FC<AudienceReachProps> = ({ onOpenOnboard }) => {
  const [selectedAudience, setSelectedAudience] = useState<string>('couples');
  const [activeDeviceView, setActiveDeviceView] = useState<'laptop' | 'mobile'>('laptop');

  const currentSegment = audienceData.find(a => a.id === selectedAudience) || audienceData[0];

  return (
    <section id="audience" className="py-16 md:py-24 bg-[#FAF4EE] dark:bg-[#120509] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12 md:mb-16">
          <DiamondFlourish />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#24060E] dark:text-white font-serif-royal">
            Reach the Right Audience
          </h2>
          <p className="text-sm sm:text-base text-[#695358] dark:text-[#BCA8AC] max-w-2xl mx-auto">
            Your venue is shown precisely to clients with confirmed wedding dates and vetted booking budgets ready to sign contracts.
          </p>
        </div>

        {/* Content Layout: Left Audience Segments + Right Cross-Device Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 6 Audience Tags (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C59A58] mb-2">
              High-Ticket Buyer Segments
            </p>

            {audienceData.map((item) => {
              const isSelected = selectedAudience === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedAudience(item.id)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-[#1E0C13] border-[#6B1124] dark:border-[#C59A58] shadow-lg translate-x-2'
                      : 'bg-[#FAF4EE] dark:bg-[#18090F] hover:bg-white dark:hover:bg-[#1E0C13] border-[#EADBD2] dark:border-[#3A1B26] hover:border-[#C59A58]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#6B1124] dark:bg-[#8C1C35] text-white shadow-md'
                          : 'bg-[#F6ECE6] dark:bg-[#2A101B] text-[#6B1124] dark:text-[#E4C896]'
                      }`}
                    >
                      {iconMap[item.iconName] || <Users className="w-5 h-5" />}
                    </div>

                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-[#24060E] dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#695358] dark:text-[#BCA8AC]">
                        Avg. Budget: <span className="font-semibold text-[#4A0A17] dark:text-[#F0D4A0]">{item.annualBudget}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#F6ECE6] dark:bg-[#2A101B] text-[#6B1124] dark:text-[#E4C896]">
                      {item.share}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-[#C59A58] transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              );
            })}

            {/* And More Pill */}
            <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-[#1E0C13]/60 border border-dashed border-[#C59A58] flex items-center justify-between text-xs text-[#695358] dark:text-[#BCA8AC]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF4EE] dark:bg-[#2A101B] flex items-center justify-center text-[#6B1124] dark:text-[#E4C896]">
                  <MoreHorizontal className="w-4 h-4" />
                </div>
                <span className="font-bold text-[#24060E] dark:text-white">Destination NRI Weddings & Galas</span>
              </div>
              <span className="text-[#C59A58] font-bold">Pan-India & Global</span>
            </div>

            {/* Context callout for selected audience */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#F6ECE6] dark:from-[#250F18] to-white dark:to-[#1E0C13] border border-[#EADBD2] dark:border-[#3A1B26] text-xs text-[#4A0A17] dark:text-[#F0D4A0] mt-4">
              <span className="font-bold">Target Match: </span>
              {currentSegment.description}
            </div>

          </div>

          {/* Right Column: Interactive Multi-Device Mockup Showcase (7 cols) */}
          <div className="lg:col-span-7">
            
            {/* View Switcher Pills */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 bg-white dark:bg-[#1E0C13] p-1 rounded-full border border-[#EADBD2] dark:border-[#3A1B26] shadow-sm">
                <button
                  onClick={() => setActiveDeviceView('laptop')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeDeviceView === 'laptop'
                      ? 'bg-[#6B1124] dark:bg-[#8C1C35] text-white shadow-sm'
                      : 'text-[#695358] dark:text-[#BCA8AC] hover:text-[#24060E] dark:hover:text-white'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>Desktop Marketplace</span>
                </button>
                <button
                  onClick={() => setActiveDeviceView('mobile')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeDeviceView === 'mobile'
                      ? 'bg-[#6B1124] dark:bg-[#8C1C35] text-white shadow-sm'
                      : 'text-[#695358] dark:text-[#BCA8AC] hover:text-[#24060E] dark:hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile Couple View</span>
                </button>
              </div>

              <span className="text-[11px] text-[#695358] dark:text-[#BCA8AC] font-medium hidden sm:inline">
                Live Preview of WedEazzy Discovery Interface
              </span>
            </div>

            {/* Device Container with Realistic Shadow */}
            <div className="relative bg-[#24060E] dark:bg-[#100307] rounded-3xl p-3 sm:p-5 shadow-2xl border-2 border-[#C59A58]/50 overflow-hidden">
              
              {/* Laptop Display Shell */}
              {activeDeviceView === 'laptop' ? (
                <div className="bg-white dark:bg-[#1A0B11] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-inner">
                  
                  {/* Browser Bar */}
                  <div className="bg-[#FAF4EE] dark:bg-[#220D16] px-4 py-2 border-b border-[#EADBD2] dark:border-[#3A1B26] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="px-4 py-0.5 rounded-md bg-white dark:bg-[#1A0B11] border border-[#EADBD2] dark:border-[#3A1B26] text-[10px] text-[#695358] dark:text-[#BCA8AC] font-mono">
                      https://wedeazzy.com/venues/explore
                    </div>
                    <span className="text-[10px] font-bold text-[#C59A58]">Verified SSL</span>
                  </div>

                  {/* Mockup Inside Page */}
                  <div className="p-4 sm:p-6 bg-[#FAF4EE]/50 dark:bg-[#15060C] space-y-4">
                    {/* Mock Search Header */}
                    <div className="text-center py-2 space-y-2">
                      <h4 className="text-lg sm:text-xl font-bold font-serif-royal text-[#6B1124] dark:text-[#E4C896]">
                        Find The Perfect Banquet Hall
                      </h4>
                      <p className="text-[11px] text-[#695358] dark:text-[#BCA8AC]">
                        Discover 1,200+ verified luxury ballrooms with verified pricing & virtual 3D tours
                      </p>

                      {/* Mock Search Bar */}
                      <div className="max-w-md mx-auto bg-white dark:bg-[#1E0C13] rounded-full p-1.5 border border-[#EADBD2] dark:border-[#3A1B26] flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-2 pl-3 text-xs text-[#695358] dark:text-[#BCA8AC]">
                          <Search className="w-3.5 h-3.5 text-[#C59A58]" />
                          <span>Delhi NCR • 500-1500 Guests • Nov-Dec</span>
                        </div>
                        <button className="px-3 py-1 bg-[#6B1124] dark:bg-[#8C1C35] text-white rounded-full text-xs font-bold">
                          Search
                        </button>
                      </div>
                    </div>

                    {/* Venue Cards Grid Preview */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="bg-white dark:bg-[#1E0C13] rounded-xl overflow-hidden border border-[#EADBD2] dark:border-[#3A1B26] shadow-sm">
                        <img
                          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80"
                          alt="Crystal Hall"
                          className="h-20 w-full object-cover"
                        />
                        <div className="p-2 space-y-1">
                          <p className="text-[11px] font-bold text-[#24060E] dark:text-white truncate">The Grand Imperial</p>
                          <p className="text-[9px] text-[#695358] dark:text-[#BCA8AC] flex items-center gap-1">
                            <MapPin className="w-2.5 h-2.5 text-[#C59A58]" /> Gurugram
                          </p>
                          <p className="text-[10px] font-bold text-[#6B1124] dark:text-[#E4C896]">₹2,800/plate</p>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-[#1E0C13] rounded-xl overflow-hidden border border-[#EADBD2] dark:border-[#3A1B26] shadow-sm">
                        <img
                          src="https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=400&q=80"
                          alt="Palace Mandap"
                          className="h-20 w-full object-cover"
                        />
                        <div className="p-2 space-y-1">
                          <p className="text-[11px] font-bold text-[#24060E] dark:text-white truncate">Rajwada Grand Lawn</p>
                          <p className="text-[9px] text-[#695358] dark:text-[#BCA8AC] flex items-center gap-1">
                            <MapPin className="w-2.5 h-2.5 text-[#C59A58]" /> Jaipur
                          </p>
                          <p className="text-[10px] font-bold text-[#6B1124] dark:text-[#E4C896]">₹3,400/plate</p>
                        </div>
                      </div>

                      <div className="hidden sm:block bg-white dark:bg-[#1E0C13] rounded-xl overflow-hidden border border-[#EADBD2] dark:border-[#3A1B26] shadow-sm">
                        <img
                          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80"
                          alt="Velvet Royale"
                          className="h-20 w-full object-cover"
                        />
                        <div className="p-2 space-y-1">
                          <p className="text-[11px] font-bold text-[#24060E] dark:text-white truncate">The Velvet Royale</p>
                          <p className="text-[9px] text-[#695358] dark:text-[#BCA8AC] flex items-center gap-1">
                            <MapPin className="w-2.5 h-2.5 text-[#C59A58]" /> Mumbai
                          </p>
                          <p className="text-[10px] font-bold text-[#6B1124] dark:text-[#E4C896]">₹3,200/plate</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ) : (
                /* Mobile Phone Screen Shell */
                <div className="max-w-xs mx-auto bg-white dark:bg-[#1A0B11] rounded-2xl overflow-hidden border-4 border-gray-800 shadow-inner">
                  {/* Phone Header */}
                  <div className="bg-[#6B1124] dark:bg-[#8C1C35] text-white p-3 flex items-center justify-between">
                    <span className="font-bold text-xs tracking-wide">WedEazzy</span>
                    <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full font-semibold">Delhi NCR</span>
                  </div>

                  <div className="p-3 space-y-2.5 bg-[#FAF4EE] dark:bg-[#15060C]">
                    <div className="rounded-xl overflow-hidden shadow-sm border border-[#EADBD2] dark:border-[#3A1B26] bg-white dark:bg-[#1E0C13]">
                      <img
                        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80"
                        alt="Venue"
                        className="h-32 w-full object-cover"
                      />
                      <div className="p-3 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#24060E] dark:text-white">The Grand Imperial</span>
                          <span className="text-[10px] text-amber-500 font-bold flex items-center">
                            ★ 4.9
                          </span>
                        </div>
                        <p className="text-[10px] text-[#695358] dark:text-[#BCA8AC]">Cap: 400 - 1,500 Guests • AC Hall</p>
                        <p className="text-xs font-bold text-[#6B1124] dark:text-[#E4C896]">₹2,800/veg plate</p>
                        <button className="w-full mt-2 py-1.5 rounded-lg bg-[#6B1124] dark:bg-[#8C1C35] text-white text-[11px] font-bold">
                          Direct WhatsApp Enquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Tagline */}
              <div className="mt-3 flex items-center justify-between text-white/80 text-[11px] px-2">
                <span>Verified by 50,000+ Couples Monthly</span>
                <button
                  onClick={onOpenOnboard}
                  className="text-[#E4C896] hover:underline font-bold cursor-pointer"
                >
                  Feature Your Hall Here →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
