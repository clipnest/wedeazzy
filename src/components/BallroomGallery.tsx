import React, { useState } from 'react';
import { ballroomGalleryData, type BallroomItem } from '../data/content';
import { MapPin, Users, X, Check, Phone, ArrowRight } from 'lucide-react';
import { DiamondFlourish } from './brand/BrandAssets';

interface BallroomGalleryProps {
  onOpenOnboard: () => void;
}

export const BallroomGallery: React.FC<BallroomGalleryProps> = ({ onOpenOnboard }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<BallroomItem | null>(null);

  const categories = ['All', 'Grand Chandeliers', 'Floral Mandap', 'Cocktail Lounge', 'Gala Dinner', 'Royal Aisle'];

  const filteredItems = selectedCategory === 'All'
    ? ballroomGalleryData
    : ballroomGalleryData.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FAF4EE] dark:bg-[#120509] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 md:mb-14">
          <DiamondFlourish />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#24060E] dark:text-white font-serif-royal">
            Exquisite Venues in the Spotlight
          </h2>
          <p className="text-sm sm:text-base text-[#695358] dark:text-[#BCA8AC] max-w-2xl mx-auto">
            From imperial crystal chandeliers to royal open-air mandaps—see how our partner banquet halls capture high-value wedding bookings.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#6B1124] dark:bg-[#8C1C35] text-white shadow-md'
                    : 'bg-white dark:bg-[#1E0C13] text-[#695358] dark:text-[#BCA8AC] border border-[#EADBD2] dark:border-[#3A1B26] hover:border-[#C59A58] hover:text-[#24060E] dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Card Grid (Matching the Flyer Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-[#1E0C13] border border-[#EADBD2] dark:border-[#3A1B26] hover:border-[#C59A58] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3.5] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[#E4C896] text-[10px] font-bold border border-white/20">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <p className="text-[10px] text-white/80 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C59A58]" />
                    <span>{item.city}</span>
                  </p>
                  <p className="font-bold text-xs truncate">{item.name}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <p className="text-[11px] text-[#695358] dark:text-[#BCA8AC] flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-[#C59A58]" />
                    <span>{item.capacity}</span>
                  </p>
                  <p className="text-xs font-black text-[#6B1124] dark:text-[#E4C896]">
                    {item.platePrice}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#EADBD2]/60 dark:border-[#3A1B26]/60 flex items-center justify-between text-[11px] font-bold text-[#C59A58]">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Lightbox Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-[#1A0B11] rounded-3xl overflow-hidden max-w-2xl w-full border-2 border-[#C59A58] shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-video bg-black">
                <img
                  src={activeItem.image}
                  alt={activeItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-bold border border-white/20">
                  {activeItem.category} • {activeItem.tag}
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EADBD2] dark:border-[#3A1B26] pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif-royal text-[#24060E] dark:text-white">
                      {activeItem.name}
                    </h3>
                    <p className="text-xs text-[#695358] dark:text-[#BCA8AC] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C59A58]" />
                      <span>{activeItem.city}</span>
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-xs text-[#695358] dark:text-[#BCA8AC]">Estimated Pricing</p>
                    <p className="text-xl font-black text-[#6B1124] dark:text-[#E4C896]">{activeItem.platePrice}</p>
                  </div>
                </div>

                {/* Capacity & Amenities */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C59A58]">
                    Venue Amenities & Specifications
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#24060E] dark:text-white">
                    {activeItem.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-[#FAF4EE] dark:bg-[#250F18] border border-[#EADBD2] dark:border-[#3A1B26]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action in Lightbox */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setActiveItem(null);
                      onOpenOnboard();
                    }}
                    className="flex-1 py-3 bg-[#6B1124] hover:bg-[#530B1B] dark:bg-[#8C1C35] dark:hover:bg-[#A52642] text-white font-bold text-sm rounded-full flex items-center justify-center gap-2 wine-glow-cta cursor-pointer"
                  >
                    <span>List Similar Hall on WedEazzy</span>
                    <ArrowRight className="w-4 h-4 text-[#E4C896]" />
                  </button>

                  <a
                    href="tel:7498987620"
                    className="px-4 py-3 border border-[#EADBD2] dark:border-[#3A1B26] hover:bg-[#FAF4EE] dark:hover:bg-[#250F18] text-[#6B1124] dark:text-[#E4C896] font-bold text-sm rounded-full flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#C59A58]" />
                    <span className="hidden sm:inline">Call Helpline</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
