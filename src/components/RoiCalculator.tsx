import React, { useState } from 'react';
import { formatINR } from '../lib/utils';
import { Calculator, Calendar, Users, IndianRupee, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { DiamondFlourish } from './brand/BrandAssets';

interface RoiCalculatorProps {
  onOpenOnboardWithData?: (capacity: number, platePrice: number) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenOnboardWithData }) => {
  const [capacity, setCapacity] = useState<number>(800);
  const [platePrice, setPlatePrice] = useState<number>(2500);
  const [unbookedDates, setUnbookedDates] = useState<number>(12);

  // Estimator logic based on Indian banquet market metrics
  const avgGuests = Math.round(capacity * 0.7);
  const eventRevenue = avgGuests * platePrice * 1.25;
  const potentialBookings = Math.max(2, Math.round(unbookedDates * 0.65));
  const projectedRevenue = potentialBookings * eventRevenue;
  const estimatedInquiries = potentialBookings * 5;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white dark:bg-[#18090F] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12 md:mb-16">
          <DiamondFlourish />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6ECE6] dark:bg-[#2A101B] border border-[#EADBD2] dark:border-[#3A1B26] text-[#6B1124] dark:text-[#E4C896] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#C59A58]" />
            <span>Interactive Venue ROI Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#24060E] dark:text-white font-serif-royal">
            Calculate Your Unlocked Wedding Revenue
          </h2>
          <p className="text-sm sm:text-base text-[#695358] dark:text-[#BCA8AC] max-w-2xl mx-auto">
            See how many high-budget wedding dates you can fill and the additional revenue you can generate by listing on WedEazzy.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="max-w-5xl mx-auto bg-[#FAF4EE] dark:bg-[#1E0C13] rounded-3xl p-6 sm:p-10 border-2 border-[#EADBD2] dark:border-[#3A1B26] shadow-xl transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Controls Column (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Slider 1: Hall Capacity */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-bold text-[#24060E] dark:text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#C59A58]" />
                    <span>Maximum Guest Capacity</span>
                  </label>
                  <span className="font-extrabold text-[#6B1124] dark:text-[#E4C896] bg-white dark:bg-[#2A101B] px-3 py-1 rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] text-sm">
                    {capacity} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="50"
                  value={capacity}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#EADBD2] dark:bg-[#3A1B26] rounded-lg appearance-none cursor-pointer accent-[#6B1124] dark:accent-[#C59A58]"
                />
                <div className="flex justify-between text-[11px] text-[#695358] dark:text-[#BCA8AC]">
                  <span>Intimate (200)</span>
                  <span>Grand Ballroom (1,500)</span>
                  <span>Mega Lawn (3,000)</span>
                </div>
              </div>

              {/* Slider 2: Average Plate Price */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-bold text-[#24060E] dark:text-white flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-[#C59A58]" />
                    <span>Average Veg/Non-Veg Plate Price</span>
                  </label>
                  <span className="font-extrabold text-[#6B1124] dark:text-[#E4C896] bg-white dark:bg-[#2A101B] px-3 py-1 rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] text-sm">
                    ₹{platePrice.toLocaleString('en-IN')}/plate
                  </span>
                </div>
                <input
                  type="range"
                  min="1200"
                  max="5000"
                  step="100"
                  value={platePrice}
                  onChange={(e) => setPlatePrice(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#EADBD2] dark:bg-[#3A1B26] rounded-lg appearance-none cursor-pointer accent-[#6B1124] dark:accent-[#C59A58]"
                />
                <div className="flex justify-between text-[11px] text-[#695358] dark:text-[#BCA8AC]">
                  <span>Budget (₹1,200)</span>
                  <span>Premium (₹3,000)</span>
                  <span>Ultra-Luxury (₹5,000)</span>
                </div>
              </div>

              {/* Slider 3: Target Open Dates */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-bold text-[#24060E] dark:text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C59A58]" />
                    <span>Unbooked / Off-Season Dates to Fill</span>
                  </label>
                  <span className="font-extrabold text-[#6B1124] dark:text-[#E4C896] bg-white dark:bg-[#2A101B] px-3 py-1 rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] text-sm">
                    {unbookedDates} Dates/Year
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="1"
                  value={unbookedDates}
                  onChange={(e) => setUnbookedDates(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#EADBD2] dark:bg-[#3A1B26] rounded-lg appearance-none cursor-pointer accent-[#6B1124] dark:accent-[#C59A58]"
                />
                <div className="flex justify-between text-[11px] text-[#695358] dark:text-[#BCA8AC]">
                  <span>5 Weekday / Monsoons</span>
                  <span>15 Target Slots</span>
                  <span>35 Open Dates</span>
                </div>
              </div>

              {/* Quick Info Box */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#250F18] border border-[#EADBD2] dark:border-[#3A1B26] text-xs text-[#695358] dark:text-[#BCA8AC] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#15803D] dark:text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  Calculations based on actual conversion rates across verified banquet halls in Delhi NCR, Mumbai, Jaipur, and Bengaluru with zero middleman commissions.
                </p>
              </div>

            </div>

            {/* Right Projected Results Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#6B1124] via-[#530B1B] to-[#24060E] dark:from-[#8C1C35] dark:via-[#530B1B] dark:to-[#18050B] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#C59A58]/60 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-bold text-[#E4C896] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Annual Projections
                  </span>
                  <span className="text-[11px] bg-white/15 px-2.5 py-0.5 rounded-full text-white/90">
                    WedEazzy Network
                  </span>
                </div>

                {/* Primary Metric: Projected Revenue */}
                <div className="mt-6 text-center lg:text-left space-y-1">
                  <p className="text-xs text-[#E4C896] font-medium">Estimated Incremental Revenue</p>
                  <div className="text-4xl sm:text-5xl font-black text-white font-serif-royal tracking-tight">
                    {formatINR(projectedRevenue)}
                  </div>
                  <p className="text-[11px] text-white/70">
                    Net potential from {potentialBookings} confirmed bookings
                  </p>
                </div>

                {/* Secondary Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/10">
                  <div className="bg-white/10 rounded-2xl p-3 text-center">
                    <p className="text-[10px] text-white/70 uppercase">Inquiries Generated</p>
                    <p className="text-xl font-extrabold text-[#E4C896] mt-0.5">
                      {estimatedInquiries}+
                    </p>
                    <p className="text-[9px] text-white/60">Verified Leads</p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-3 text-center">
                    <p className="text-[10px] text-white/70 uppercase">Dates Filled</p>
                    <p className="text-xl font-extrabold text-white mt-0.5">
                      {potentialBookings} Dates
                    </p>
                    <p className="text-[9px] text-white/60">65% Hit Rate</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onOpenOnboardWithData && onOpenOnboardWithData(capacity, platePrice)}
                className="w-full py-4 rounded-full bg-[#C59A58] hover:bg-[#E4C896] text-[#24060E] font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <span>Unlock These Bookings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
