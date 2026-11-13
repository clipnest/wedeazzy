import React from 'react';
import { Phone, Globe, Mail, ShieldCheck } from 'lucide-react';
import { WedEazzyLogo, BotanicalFiligree } from './brand/BrandAssets';

interface FooterProps {
  onOpenOnboard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOnboard }) => {
  return (
    <footer className="relative bg-[#6B1124] text-white overflow-hidden pt-16 pb-12">
      {/* Corner Botanical Filigrees */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-40">
        <BotanicalFiligree position="left" />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none opacity-40">
        <BotanicalFiligree position="right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <WedEazzyLogo light={true} />
            <p className="text-xs text-[#FAF4EE]/80 leading-relaxed max-w-sm">
              WedEazzy is India's dedicated technology platform empowering luxury banquet halls, hotel ballrooms, and wedding lawns to maximize occupancy, connect with high-budget families, and streamline event bookings.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#E4C896] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Wedding Venue Discovery Network</span>
            </div>
          </div>

          {/* Col 2: Top Indian Wedding Hubs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#E4C896] uppercase tracking-wider">
              Top Venue Locations
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF4EE]/80">
              <li><a href="#gallery" className="hover:text-white transition-colors">Banquet Halls in Delhi NCR & Gurugram</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Luxury Ballrooms in Mumbai & Navi Mumbai</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Heritage Palaces & Lawns in Jaipur</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Wedding Venues in Bengaluru</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Convention Centres in Hyderabad</a></li>
            </ul>
          </div>

          {/* Col 3: For Venue Partners (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-[#E4C896] uppercase tracking-wider">
              For Banquet Owners
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF4EE]/80">
              <li>
                <button onClick={onOpenOnboard} className="hover:text-white transition-colors text-left font-semibold text-[#E4C896]">
                  Get Listed Today
                </button>
              </li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Revenue Calculator</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Partner Benefits</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Feature Suite</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Owner Reviews</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Verification Helpline (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-[#E4C896] uppercase tracking-wider">
              Direct Helpline Desk
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF4EE]/90">
              <a
                href="tel:7498987620"
                className="flex items-center gap-2.5 hover:text-[#E4C896] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C59A58]" />
                <span className="font-bold text-sm">+91 7498987620</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#C59A58]" />
                <span>WedEazzy.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C59A58]" />
                <span>partner@wedeazzy.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Primary Contact Bar from the Reference Flyer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center border-b border-white/10">
          <a
            href="tel:7498987620"
            className="flex items-center gap-3 text-lg sm:text-2xl font-black text-white hover:text-[#E4C896] transition-colors group"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-[#E4C896]" />
            </div>
            <span>7498987620</span>
          </a>

          <span className="hidden sm:inline text-[#C59A58] text-2xl font-light">|</span>

          <a
            href="https://wedeazzy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg sm:text-2xl font-black text-white hover:text-[#E4C896] transition-colors group"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Globe className="w-5 h-5 text-[#E4C896]" />
            </div>
            <span>WedEazzy.com</span>
          </a>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF4EE]/60 gap-3">
          <p>© {new Date().getFullYear()} WedEazzy Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Partner Code of Conduct</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
