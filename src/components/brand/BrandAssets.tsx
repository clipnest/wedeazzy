import React from 'react';

export const WedEazzyLogo: React.FC<{ className?: string; light?: boolean }> = ({ className = '', light = false }) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-1.5 font-bold tracking-tight">
        <span className={`text-2xl md:text-3xl font-extrabold ${light ? 'text-white' : 'text-[#6B1124] dark:text-[#E4C896]'}`}>
          W<span className="relative inline-block">
            e
            {/* Diamond ring accent */}
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
              <svg className="w-3.5 h-3.5 text-[#C59A58]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 8H9L12 2Z" />
                <path d="M8 9H16L19 14H5L8 9Z" fillOpacity="0.8"/>
                <path d="M5 15H19L12 22L5 15Z" />
              </svg>
            </span>
          </span>d
        </span>
        <span className={`text-2xl md:text-3xl font-light ${light ? 'text-[#E4C896]' : 'text-[#24060E] dark:text-white'}`}>
          Eazzy
        </span>
      </div>
      <span className={`text-[9px] md:text-[10px] tracking-widest uppercase font-medium mt-0.5 ${light ? 'text-[#FAF4EE]/80' : 'text-[#695358] dark:text-[#BCA8AC]'}`}>
        Connecting Vendors, Creating Celebrations
      </span>
    </div>
  );
};

export const DiamondFlourish: React.FC<{ className?: string; light?: boolean }> = ({ className = '', light = false }) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className={`h-[1px] w-8 md:w-16 ${light ? 'bg-gradient-to-r from-transparent to-[#C59A58]' : 'bg-gradient-to-r from-transparent to-[#C59A58]'}`} />
      <div className="flex items-center gap-1 text-[#C59A58]">
        <span className="w-1.5 h-1.5 rotate-45 border border-[#C59A58] bg-[#C59A58]" />
        <span className="w-2.5 h-2.5 rotate-45 border border-[#C59A58] bg-transparent" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#C59A58] bg-[#C59A58]" />
      </div>
      <div className={`h-[1px] w-8 md:w-16 ${light ? 'bg-gradient-to-l from-transparent to-[#C59A58]' : 'bg-gradient-to-l from-transparent to-[#C59A58]'}`} />
    </div>
  );
};

export const BotanicalFiligree: React.FC<{ className?: string; position?: 'left' | 'right' }> = ({
  className = '',
  position = 'left'
}) => {
  return (
    <svg
      className={`w-16 h-16 md:w-24 md:h-24 text-[#C59A58]/30 pointer-events-none ${position === 'right' ? '-scale-x-100' : ''} ${className}`}
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <path d="M10 90 Q 25 60 50 50 Q 75 40 90 10 Q 70 30 50 45 Q 30 60 10 90 Z" opacity="0.6" />
      <path d="M20 90 Q 30 75 45 70 Q 60 65 75 45 Q 60 60 45 68 Q 30 75 20 90 Z" opacity="0.4" />
      <circle cx="90" cy="10" r="3" />
      <circle cx="75" cy="45" r="2.5" />
      <circle cx="50" cy="50" r="2" />
    </svg>
  );
};
