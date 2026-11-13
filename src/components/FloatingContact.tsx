import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Options */}
      {isOpen && (
        <div className="bg-white rounded-2xl p-3 shadow-2xl border-2 border-[#C59A58] mb-1 space-y-2 animate-in slide-in-from-bottom-2 duration-200 w-56">
          <p className="text-[11px] font-bold text-[#6B1124] uppercase tracking-wider border-b border-[#EADBD2] pb-1.5 text-center">
            WedEazzy Venue Desk
          </p>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/917498987620?text=Hello%20WedEazzy%2C%20I%20want%20to%20list%20my%20banquet%20hall."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-emerald-50 text-xs font-bold text-emerald-800 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span>Chat on WhatsApp</span>
          </a>

          {/* Direct Phone Helpline */}
          <a
            href="tel:7498987620"
            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#F6ECE6] text-xs font-bold text-[#6B1124] transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-[#6B1124] text-white flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#E4C896]" />
            </div>
            <span>Call: 7498987620</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-[#6B1124] hover:bg-[#530B1B] text-white shadow-2xl border-2 border-[#C59A58] transition-all duration-300 hover:scale-105 cursor-pointer wine-glow-cta"
        aria-label="Contact WedEazzy Support"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[#E4C896]" />
        ) : (
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C59A58] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E4C896]"></span>
            </span>
            <Phone className="w-4 h-4 text-[#E4C896]" />
            <span className="text-xs font-bold tracking-wide">Enquire / Call</span>
          </div>
        )}
      </button>
    </div>
  );
};
