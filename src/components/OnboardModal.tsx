import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Building2, MapPin, Users, IndianRupee, Phone, Mail, User, ShieldCheck, Sparkles } from 'lucide-react';
import { WedEazzyLogo } from './brand/BrandAssets';

interface OnboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCapacity?: number;
  initialPlatePrice?: number;
}

export const OnboardModal: React.FC<OnboardModalProps> = ({
  isOpen,
  onClose,
  initialCapacity = 800,
  initialPlatePrice = 2500,
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Form State
  const [venueName, setVenueName] = useState<string>('');
  const [city, setCity] = useState<string>('Delhi NCR (Gurugram/Noida)');
  const [venueType, setVenueType] = useState<string>('Luxury Banquet Hall');
  const [capacity, setCapacity] = useState<number>(initialCapacity);
  const [platePrice, setPlatePrice] = useState<number>(initialPlatePrice);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    'Central Air Conditioning',
    'In-house Catering',
    'Valet Parking'
  ]);
  const [ownerName, setOwnerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  if (!isOpen) return null;

  const amenityOptions = [
    'Central Air Conditioning',
    'Crystal Chandeliers',
    'Attached Open Lawn',
    'In-house Catering',
    'Valet Parking (200+ Cars)',
    'Bridal Dressing Suites',
    'Alcohol Permit / Bar',
    'DJ & Late-night Sound Permit',
    '40ft LED Stage Backdrop',
    'Hawan & Pheras Permitted'
  ];

  const toggleAmenity = (item: string) => {
    if (selectedAmenities.includes(item)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== item));
    } else {
      setSelectedAmenities([...selectedAmenities, item]);
    }
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!venueName.trim()) {
        alert('Please enter your banquet hall or venue name.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setPhoneError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    setPhoneError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore if canvas not available
      }
    }, 1200);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white dark:bg-[#1E0C13] rounded-3xl overflow-hidden max-w-xl w-full border-2 border-[#C59A58] shadow-2xl relative my-8 transition-colors">
        
        {/* Top Header Bar */}
        <div className="bg-[#FAF4EE] dark:bg-[#250F18] px-6 py-4 border-b border-[#EADBD2] dark:border-[#3A1B26] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <WedEazzyLogo />
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-[#EADBD2]/60 dark:bg-[#3A1B26] hover:bg-[#6B1124] dark:hover:bg-[#8C1C35] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-[#24060E] dark:text-[#FAF4EE]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Container or Success State */}
        <div className="p-6 sm:p-8">
          
          {isSuccess ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="text-center space-y-5 py-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl font-extrabold text-[#24060E] dark:text-white font-serif-royal">
                  Listing Application Submitted!
                </h3>
                <p className="text-sm font-semibold text-[#6B1124] dark:text-[#E4C896]">
                  Welcome to WedEazzy, {ownerName || 'Venue Partner'}!
                </p>
                <p className="text-xs text-[#695358] dark:text-[#BCA8AC] max-w-md mx-auto">
                  We have received the details for <strong className="text-[#24060E] dark:text-white">{venueName}</strong> in {city}.
                </p>
              </div>

              {/* Simulated Dedicated RM Card */}
              <div className="bg-[#FAF4EE] dark:bg-[#250F18] rounded-2xl p-4 border border-[#EADBD2] dark:border-[#3A1B26] text-left space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59A58]">
                    Dedicated Relationship Manager
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                    Assigned
                  </span>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-10 h-10 rounded-full bg-[#6B1124] text-white flex items-center justify-center font-bold text-sm">
                    RS
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#24060E] dark:text-white">Rajesh Sharma</p>
                    <p className="text-xs text-[#695358] dark:text-[#BCA8AC]">Senior Venue Specialist • North & Central India</p>
                  </div>
                </div>
                <p className="text-[11px] text-[#695358] dark:text-[#BCA8AC] pt-1">
                  Rajesh will contact you via WhatsApp (+91 {phone}) within <strong>2 business hours</strong> to schedule your 4K photoshoot and activate your listing.
                </p>
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3.5 rounded-full bg-[#6B1124] hover:bg-[#530B1B] dark:bg-[#8C1C35] text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          ) : (
            /* STEPPED ONBOARDING WIZARD */
            <div>
              {/* Stepper Progress Indicator */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-bold text-[#695358] dark:text-[#BCA8AC] mb-2">
                  <span className={step >= 1 ? 'text-[#6B1124] dark:text-[#E4C896]' : ''}>1. Venue Details</span>
                  <span className={step >= 2 ? 'text-[#6B1124] dark:text-[#E4C896]' : ''}>2. Capacity & Pricing</span>
                  <span className={step >= 3 ? 'text-[#6B1124] dark:text-[#E4C896]' : ''}>3. Direct Verification</span>
                </div>
                <div className="w-full h-1.5 bg-[#EADBD2] dark:bg-[#3A1B26] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C59A58] to-[#6B1124] transition-all duration-300 rounded-full"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: VENUE DETAILS */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold font-serif-royal text-[#24060E] dark:text-white">
                      Tell us about your banquet space
                    </h4>
                    <p className="text-xs text-[#695358] dark:text-[#BCA8AC]">
                      Start attracting verified couples and event planners across India.
                    </p>
                  </div>

                  {/* Field: Venue Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#24060E] dark:text-white flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#C59A58]" />
                      <span>Banquet Hall / Hotel / Lawn Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Royal Grand Ballroom & Mandap"
                      value={venueName}
                      onChange={(e) => setVenueName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] bg-white dark:bg-[#250F18] focus:border-[#6B1124] focus:ring-1 focus:ring-[#6B1124] text-sm text-[#24060E] dark:text-white outline-none"
                    />
                  </div>

                  {/* Field: City */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#24060E] dark:text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C59A58]" />
                      <span>Primary City / Location *</span>
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] focus:border-[#6B1124] focus:ring-1 focus:ring-[#6B1124] text-sm text-[#24060E] dark:text-white outline-none bg-white dark:bg-[#250F18]"
                    >
                      <option value="Delhi NCR (Gurugram/Noida)">Delhi NCR (Gurugram / Noida / Faridabad)</option>
                      <option value="Mumbai & Navi Mumbai">Mumbai & Navi Mumbai</option>
                      <option value="Jaipur & Rajasthan">Jaipur & Rajasthan</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Pune">Pune</option>
                      <option value="Lucknow">Lucknow</option>
                      <option value="Chandigarh & Tricity">Chandigarh & Tricity</option>
                      <option value="Goa Destination">Goa Destination</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Other Indian City">Other Indian City</option>
                    </select>
                  </div>

                  {/* Field: Venue Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#24060E] dark:text-white">
                      Venue Category
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {['Luxury Banquet Hall', 'Heritage Palace / Ballroom', 'Farmhouse & Wedding Lawn', 'Convention Centre'].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setVenueType(type)}
                          className={`p-2.5 rounded-xl border text-left transition-colors font-medium cursor-pointer ${
                            venueType === type
                              ? 'border-[#6B1124] dark:border-[#C59A58] bg-[#F6ECE6] dark:bg-[#2A101B] text-[#6B1124] dark:text-[#E4C896] font-bold'
                              : 'border-[#EADBD2] dark:border-[#3A1B26] text-[#695358] dark:text-[#BCA8AC] hover:bg-[#FAF4EE] dark:hover:bg-[#250F18]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full py-3 rounded-full bg-[#6B1124] hover:bg-[#530B1B] dark:bg-[#8C1C35] dark:hover:bg-[#A52642] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                    >
                      <span>Continue to Capacity & Pricing</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: CAPACITY & AMENITIES */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold font-serif-royal text-[#24060E] dark:text-white">
                      Capacity & Amenities
                    </h4>
                    <p className="text-xs text-[#695358] dark:text-[#BCA8AC]">
                      Help couples immediately understand if your hall fits their guest list.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Capacity */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#24060E] dark:text-white flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#C59A58]" />
                        <span>Max Guest Capacity</span>
                      </label>
                      <input
                        type="number"
                        min="50"
                        max="5000"
                        step="50"
                        value={capacity}
                        onChange={(e) => setCapacity(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] bg-white dark:bg-[#250F18] text-sm text-[#24060E] dark:text-white outline-none"
                      />
                    </div>

                    {/* Plate Price */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#24060E] dark:text-white flex items-center gap-1.5">
                        <IndianRupee className="w-3.5 h-3.5 text-[#C59A58]" />
                        <span>Approx. Plate Price (₹)</span>
                      </label>
                      <input
                        type="number"
                        min="800"
                        max="10000"
                        step="100"
                        value={platePrice}
                        onChange={(e) => setPlatePrice(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] bg-white dark:bg-[#250F18] text-sm text-[#24060E] dark:text-white outline-none"
                      />
                    </div>
                  </div>

                  {/* Amenities Multi-select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#24060E] dark:text-white">
                      Select Available Amenities (Click to toggle)
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {amenityOptions.map((amenity) => {
                        const isChecked = selectedAmenities.includes(amenity);
                        return (
                          <button
                            type="button"
                            key={amenity}
                            onClick={() => toggleAmenity(amenity)}
                            className={`p-2 rounded-xl border text-left transition-colors flex items-center justify-between cursor-pointer ${
                              isChecked
                                ? 'border-[#C59A58] bg-[#FAF4EE] dark:bg-[#250F18] text-[#6B1124] dark:text-[#E4C896] font-bold'
                                : 'border-[#EADBD2] dark:border-[#3A1B26] text-[#695358] dark:text-[#BCA8AC] hover:bg-gray-50 dark:hover:bg-[#250F18]'
                            }`}
                          >
                            <span className="truncate">{amenity}</span>
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-[#C59A58] shrink-0 ml-1" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3 rounded-full border border-[#EADBD2] dark:border-[#3A1B26] text-[#695358] dark:text-[#BCA8AC] hover:bg-gray-50 dark:hover:bg-[#250F18] font-bold text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex-1 py-3 rounded-full bg-[#6B1124] hover:bg-[#530B1B] dark:bg-[#8C1C35] dark:hover:bg-[#A52642] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Continue to Direct Verification</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT & VERIFICATION */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold font-serif-royal text-[#24060E] dark:text-white">
                      Owner or Manager Verification
                    </h4>
                    <p className="text-xs text-[#695358] dark:text-[#BCA8AC]">
                      Direct client enquiries and booking calls will be forwarded to this contact.
                    </p>
                  </div>

                  {/* Owner Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#24060E] dark:text-white flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#C59A58]" />
                      <span>Your Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] bg-white dark:bg-[#250F18] text-sm text-[#24060E] dark:text-white outline-none"
                    />
                  </div>

                  {/* WhatsApp Mobile */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#24060E] dark:text-white flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#C59A58]" />
                      <span>WhatsApp Mobile Number (India +91) *</span>
                    </label>
                    <div className="flex rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] overflow-hidden focus-within:border-[#6B1124]">
                      <span className="bg-[#FAF4EE] dark:bg-[#250F18] px-3.5 py-2.5 text-xs font-bold text-[#695358] dark:text-[#BCA8AC] border-r border-[#EADBD2] dark:border-[#3A1B26] flex items-center">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2.5 text-sm text-[#24060E] dark:text-white bg-white dark:bg-[#250F18] outline-none"
                      />
                    </div>
                    {phoneError && <p className="text-[11px] text-red-600 font-semibold">{phoneError}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#24060E] dark:text-white flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#C59A58]" />
                      <span>Business Email Address</span>
                    </label>
                    <input
                      type="email"
                      placeholder="banquet.sales@yourvenue.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] bg-white dark:bg-[#250F18] text-sm text-[#24060E] dark:text-white outline-none"
                    />
                  </div>

                  <div className="p-3 bg-[#FAF4EE] dark:bg-[#250F18] rounded-xl border border-[#EADBD2] dark:border-[#3A1B26] text-[11px] text-[#695358] dark:text-[#BCA8AC] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Zero spam guaranteed. We only route qualified wedding leads.</span>
                  </div>

                  <div className="pt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-3 rounded-full border border-[#EADBD2] dark:border-[#3A1B26] text-[#695358] dark:text-[#BCA8AC] hover:bg-gray-50 dark:hover:bg-[#250F18] font-bold text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 rounded-full bg-[#6B1124] hover:bg-[#530B1B] dark:bg-[#8C1C35] dark:hover:bg-[#A52642] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg wine-glow-cta disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-[#E4C896]" />
                          <span>Submit & Get Listed Free</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
