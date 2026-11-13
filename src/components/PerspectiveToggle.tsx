import React, { useState } from 'react';
import { LayoutDashboard, Compass, MessageSquare, TrendingUp, CheckCircle, Eye, Phone, Star, Sparkles } from 'lucide-react';
import { DiamondFlourish } from './brand/BrandAssets';

interface PerspectiveToggleProps {
  onOpenOnboard: () => void;
}

export const PerspectiveToggle: React.FC<PerspectiveToggleProps> = ({ onOpenOnboard }) => {
  const [activeTab, setActiveTab] = useState<'owner' | 'couple'>('owner');

  return (
    <section className="py-16 md:py-24 bg-[#FAF4EE] dark:bg-[#120509] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 md:mb-14">
          <DiamondFlourish />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#24060E] dark:text-white font-serif-royal">
            Experience WedEazzy From Both Sides
          </h2>
          <p className="text-sm sm:text-base text-[#695358] dark:text-[#BCA8AC] max-w-2xl mx-auto">
            Switch between the partner portal used by banquet hall general managers and the discovery journey loved by couples.
          </p>

          {/* Interactive Dual Perspective Segmented Switcher */}
          <div className="pt-4 inline-flex items-center p-1.5 rounded-full bg-white dark:bg-[#1E0C13] border-2 border-[#EADBD2] dark:border-[#3A1B26] shadow-md">
            <button
              onClick={() => setActiveTab('owner')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'owner'
                  ? 'bg-[#6B1124] dark:bg-[#8C1C35] text-white shadow-md'
                  : 'text-[#695358] dark:text-[#BCA8AC] hover:text-[#24060E] dark:hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>🏢 Owner Dashboard View</span>
            </button>

            <button
              onClick={() => setActiveTab('couple')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'couple'
                  ? 'bg-[#6B1124] dark:bg-[#8C1C35] text-white shadow-md'
                  : 'text-[#695358] dark:text-[#BCA8AC] hover:text-[#24060E] dark:hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>👰 Couple Discovery View</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Window */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-[#1E0C13] rounded-3xl p-6 sm:p-10 border border-[#EADBD2] dark:border-[#3A1B26] shadow-2xl transition-all duration-500">
          
          {activeTab === 'owner' ? (
            /* OWNER DASHBOARD VIEW */
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Dashboard Top Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EADBD2] dark:border-[#3A1B26] gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#24060E] dark:text-white">
                      The Grand Imperial Banquet Portal
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold">
                      Live
                    </span>
                  </div>
                  <p className="text-xs text-[#695358] dark:text-[#BCA8AC] mt-0.5">
                    Gurugram, Delhi NCR • Partner ID: #WED-88219
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <p className="text-[10px] text-[#695358] dark:text-[#BCA8AC] uppercase font-bold">November Booking Pace</p>
                    <p className="text-sm font-extrabold text-[#6B1124] dark:text-[#E4C896]">86% Dates Filled</p>
                  </div>
                  <button
                    onClick={onOpenOnboard}
                    className="px-4 py-2 bg-[#6B1124] dark:bg-[#8C1C35] text-white text-xs font-bold rounded-xl hover:bg-[#530B1B] cursor-pointer"
                  >
                    Manage Hall Availability
                  </button>
                </div>
              </div>

              {/* 3 Metric Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAF4EE] dark:bg-[#250F18] border border-[#EADBD2] dark:border-[#3A1B26]">
                  <p className="text-xs text-[#695358] dark:text-[#BCA8AC] font-medium flex items-center justify-between">
                    <span>Direct Enquiries (30d)</span>
                    <MessageSquare className="w-4 h-4 text-[#C59A58]" />
                  </p>
                  <p className="text-2xl font-extrabold text-[#24060E] dark:text-white mt-1">42 Inquiries</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">↑ 28% vs previous month</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF4EE] dark:bg-[#250F18] border border-[#EADBD2] dark:border-[#3A1B26]">
                  <p className="text-xs text-[#695358] dark:text-[#BCA8AC] font-medium flex items-center justify-between">
                    <span>Virtual 360° Tours</span>
                    <Eye className="w-4 h-4 text-[#C59A58]" />
                  </p>
                  <p className="text-2xl font-extrabold text-[#24060E] dark:text-white mt-1">1,840 Views</p>
                  <p className="text-[11px] text-[#695358] dark:text-[#BCA8AC] mt-1">Avg. 4.2 mins spent per couple</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF4EE] dark:bg-[#250F18] border border-[#EADBD2] dark:border-[#3A1B26]">
                  <p className="text-xs text-[#695358] dark:text-[#BCA8AC] font-medium flex items-center justify-between">
                    <span>Direct Revenue Tracked</span>
                    <TrendingUp className="w-4 h-4 text-[#C59A58]" />
                  </p>
                  <p className="text-2xl font-extrabold text-[#6B1124] dark:text-[#E4C896] mt-1">₹68.5 Lakhs</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">0% Commission Deducted</p>
                </div>
              </div>

              {/* Live Inbound Leads Feed Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-[#24060E] dark:text-white uppercase tracking-wider">
                    Recent Direct Inquiries (Last 24 Hours)
                  </h4>
                  <span className="text-xs text-[#C59A58] font-bold">Auto-synced to WhatsApp</span>
                </div>

                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] bg-white dark:bg-[#250F18] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#6B1124] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-red-100 dark:bg-red-950 text-[#6B1124] dark:text-red-300 font-bold text-xs flex items-center justify-center">
                        RS
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#24060E] dark:text-white">Rohan Sharma & Sneha Kapoor</p>
                        <p className="text-[11px] text-[#695358] dark:text-[#BCA8AC]">Wedding Reception • 800 Guests • Target: 18 Dec 2026</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                        High Intent Budget: ₹22L
                      </span>
                      <button className="px-3 py-1 bg-[#15803D] text-white text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer">
                        <Phone className="w-3 h-3" /> WhatsApp
                      </button>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] bg-white dark:bg-[#250F18] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#6B1124] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-amber-100 dark:bg-amber-950 text-[#C59A58] dark:text-[#E4C896] font-bold text-xs flex items-center justify-center">
                        AM
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#24060E] dark:text-white">Ananya Mehta (Luxury Wedding Planner)</p>
                        <p className="text-[11px] text-[#695358] dark:text-[#BCA8AC]">Multi-day Sangeet & Reception • 1,200 Guests • Target: 22-24 Jan 2027</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-[10px] font-bold border border-blue-200 dark:border-blue-800">
                        Planner Client: ₹45L
                      </span>
                      <button className="px-3 py-1 bg-[#15803D] text-white text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer">
                        <Phone className="w-3 h-3" /> WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* COUPLE DISCOVERY VIEW */
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Couple View Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 rounded-2xl overflow-hidden relative aspect-video border border-[#EADBD2] dark:border-[#3A1B26] shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
                    alt="Ballroom 360"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 mb-2 cursor-pointer hover:scale-110 transition-transform">
                      <Sparkles className="w-7 h-7 text-[#E4C896]" />
                    </div>
                    <p className="font-bold text-sm text-center">Interactive 360° Virtual Walkthrough</p>
                    <p className="text-[11px] text-white/80">Couples explore chandeliers, mandap view, and table spacing</p>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#6B1124] dark:bg-[#8C1C35] text-white text-[11px] font-bold">
                      Featured Ballroom
                    </span>
                    <span className="text-amber-500 font-bold text-xs flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-500" /> 4.9 (128 Reviews)
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-serif-royal text-[#24060E] dark:text-white">
                    The Imperial Crystal Ballroom
                  </h3>

                  <div className="space-y-1.5 text-xs text-[#695358] dark:text-[#BCA8AC]">
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Capacity: <strong className="text-[#24060E] dark:text-white">400 - 1,500 Guests</strong></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Pure Veg & Non-Veg Multi-Cuisine Available</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Valet Parking: 400 Cars + 2 Bridal Dressing Suites</span>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#EADBD2] dark:border-[#3A1B26] flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-[#695358] dark:text-[#BCA8AC]">Packages Starting At</p>
                      <p className="text-xl font-black text-[#6B1124] dark:text-[#E4C896]">₹2,800 <span className="text-xs font-normal">/plate</span></p>
                    </div>
                    <button className="px-4 py-2 bg-[#15803D] hover:bg-emerald-800 text-white rounded-full text-xs font-bold flex items-center gap-1.5 shadow cursor-pointer">
                      <Phone className="w-3.5 h-3.5" /> Direct WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Couple Testimonial Card */}
              <div className="p-4 rounded-2xl bg-[#FAF4EE] dark:bg-[#250F18] border border-[#EADBD2] dark:border-[#3A1B26] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#C59A58]">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Couple"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-[#24060E] dark:text-white">Aarav & Kriti (Married Nov 2026)</p>
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full font-semibold">
                      Verified Booking
                    </span>
                  </div>
                  <p className="text-xs text-[#695358] dark:text-[#BCA8AC] italic mt-0.5">
                    "Finding this hall on WedEazzy saved us weeks of running around. The virtual tour was 100% true to reality, and connecting directly with the banquet manager gave us the best package."
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
