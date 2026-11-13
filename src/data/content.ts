export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric: string;
  tag: string;
}

export const benefitsData: Benefit[] = [
  {
    id: "visibility",
    title: "Increase Visibility",
    description: "Get discovered by thousands of couples and event planners actively looking for banquet halls across India.",
    iconName: "Eye",
    metric: "120K+ Monthly Searches",
    tag: "High Intent Demand"
  },
  {
    id: "verified",
    title: "Verified & Trusted",
    description: "Build immediate trust with a verified badge, authentic photos, and genuine client reviews that stand out.",
    iconName: "ShieldCheck",
    metric: "100% Verified Profile",
    tag: "Trust Seal"
  },
  {
    id: "bookings",
    title: "Bookings That Grow",
    description: "Receive direct high-budget wedding enquiries and confirmed dates that fill both peak muhurat and weekday slots.",
    iconName: "CalendarDays",
    metric: "3.4x Average Growth",
    tag: "Zero Middleman Commission"
  },
  {
    id: "showcase",
    title: "Showcase Your Venue",
    description: "Highlight your grand halls, lawn capacity, decor amenities, and veg/non-veg pricing with high-res photo albums and 3D tours.",
    iconName: "Image",
    metric: "4K & 360° Tours",
    tag: "Rich Media"
  },
  {
    id: "manage",
    title: "Manage Easily",
    description: "Intuitive partner dashboard to manage inbound WhatsApp leads, track calendar availability, and adjust seasonal pricing.",
    iconName: "Settings",
    metric: "< 2 Min Lead Response",
    tag: "Smart CRM"
  },
  {
    id: "support",
    title: "Dedicated Support",
    description: "Get a dedicated Relationship Manager to optimize your venue profile, shoot professional photography, and convert leads.",
    iconName: "Headphones",
    metric: "24/7 Priority Desk",
    tag: "Personal RM"
  }
];

export interface AudienceSegment {
  id: string;
  title: string;
  description: string;
  iconName: string;
  annualBudget: string;
  share: string;
}

export const audienceData: AudienceSegment[] = [
  {
    id: "couples",
    title: "Engaged Couples",
    description: "Brides & grooms searching for their dream wedding mandap, sangeet hall, and reception ballroom.",
    iconName: "HeartHandshake",
    annualBudget: "₹15L - ₹80L+",
    share: "48%"
  },
  {
    id: "planners",
    title: "Wedding Planners",
    description: "Certified luxury wedding curators looking for multi-day banquet booking partnerships.",
    iconName: "Briefcase",
    annualBudget: "₹50L - ₹2.5Cr+",
    share: "24%"
  },
  {
    id: "event-managers",
    title: "Event Managers",
    description: "Professional organizers planning high-footfall anniversary galas, exhibitions, and award shows.",
    iconName: "Users",
    annualBudget: "₹20L - ₹1Cr",
    share: "14%"
  },
  {
    id: "corporate",
    title: "Corporate Clients",
    description: "Blue-chip enterprises booking year-end annual banquets, leadership summits, and conferences.",
    iconName: "Building2",
    annualBudget: "₹10L - ₹60L",
    share: "9%"
  },
  {
    id: "gatherings",
    title: "Social Gatherings",
    description: "Families celebrating milestone birthdays, roka ceremonies, engagement dinners, and anniversaries.",
    iconName: "Sparkles",
    annualBudget: "₹5L - ₹25L",
    share: "5%"
  }
];

export interface FeatureSuiteItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  highlight: string;
}

export const featureSuiteData: FeatureSuiteItem[] = [
  {
    id: "premium-listing",
    title: "Premium Listing",
    shortDesc: "Top spot placement in your city's search results and targeted couple recommendation feeds.",
    iconName: "Gem",
    highlight: "Top Search Rank"
  },
  {
    id: "virtual-tour",
    title: "Photo & Virtual Tour Gallery",
    shortDesc: "Ultra HD photo galleries, drone aerials, and interactive 360-degree walk-through tours.",
    iconName: "Camera",
    highlight: "360° Walkthrough"
  },
  {
    id: "service-highlights",
    title: "Service & Area Highlights",
    shortDesc: "Comprehensive filters: AC indoor hall, attached lawn, valet parking, bridal suites, and sound limits.",
    iconName: "MapPin",
    highlight: "Amenity Specs"
  },
  {
    id: "reviews",
    title: "Real Reviews & Ratings",
    shortDesc: "Verified customer testimonials with photo proof to build supreme client confidence.",
    iconName: "Star",
    highlight: "Verified Badges"
  },
  {
    id: "enquiry-mgmt",
    title: "Enquiry Management",
    shortDesc: "Instant WhatsApp and SMS lead notifications with one-tap client dialer and status tracking.",
    iconName: "MessageSquare",
    highlight: "Instant WhatsApp Alerts"
  },
  {
    id: "performance-insights",
    title: "Performance Insights",
    shortDesc: "Real-time analytics on profile views, brochure downloads, phone reveals, and booking conversion.",
    iconName: "BarChart3",
    highlight: "Live ROI Metrics"
  }
];

export interface BallroomItem {
  id: string;
  name: string;
  city: string;
  capacity: string;
  platePrice: string;
  category: string;
  image: string;
  tag: string;
  amenities: string[];
}

export const ballroomGalleryData: BallroomItem[] = [
  {
    id: "hall-1",
    name: "The Imperial Crystal Ballroom",
    city: "Delhi NCR (Gurugram)",
    capacity: "400 - 1,500 Guests",
    platePrice: "₹2,800/plate",
    category: "Grand Chandeliers",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    tag: "Royal Heritage",
    amenities: ["Crystal Chandeliers", "Central AC", "Valet for 400 Cars", "In-house Catering"]
  },
  {
    id: "hall-2",
    name: "Rajwada Grand Mandap & Lawn",
    city: "Jaipur, Rajasthan",
    capacity: "600 - 2,500 Guests",
    platePrice: "₹3,400/plate",
    category: "Floral Mandap",
    image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
    tag: "Palatial Destination",
    amenities: ["Royal Mandap Stage", "Open Lawn 35,000 sq.ft", "Bridal Suites", "Heritage Decor"]
  },
  {
    id: "hall-3",
    name: "The Velvet Royale Lounge & Banquet",
    city: "South Mumbai",
    capacity: "250 - 800 Guests",
    platePrice: "₹3,200/plate",
    category: "Cocktail Lounge",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    tag: "Luxury Modern",
    amenities: ["Cocktail Bar", "Intelligent Mood LED", "Acoustic Soundproofing", "Sea Breeze Deck"]
  },
  {
    id: "hall-4",
    name: "Grand Aurelia Gala Ballroom",
    city: "Bengaluru (Palace Grounds)",
    capacity: "500 - 1,800 Guests",
    platePrice: "₹2,400/plate",
    category: "Gala Dinner",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
    tag: "High Tech Ballroom",
    amenities: ["Round Table Gala Setup", "LED Wall 40ft", "Multiple Green Rooms", "Fine Dining Chef"]
  },
  {
    id: "hall-5",
    name: "Mona Liza Bridal Arch Ballroom",
    city: "Hyderabad (Banjara Hills)",
    capacity: "350 - 1,200 Guests",
    platePrice: "₹2,600/plate",
    category: "Royal Aisle",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    tag: "Bridal Entrance",
    amenities: ["Red Carpet Walkway", "Floral Ceiling Arch", "Pyrotechnic Permits", "VIP Lounge"]
  }
];

export const testimonialData = [
  {
    id: "test-1",
    name: "Vikram Singhania",
    role: "Managing Director",
    venue: "Singhania Heritage Ballrooms, Delhi NCR",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Within 45 days of joining WedEazzy, we received 34 high-budget wedding enquiries and locked 11 prime winter muhurat dates. The direct WhatsApp connection makes lead conversion instantaneous.",
    stats: "11 Bookings Closed (₹85L+ Revenue)"
  },
  {
    id: "test-2",
    name: "Sunita Deshmukh",
    role: "Sales & Events Head",
    venue: "Orchid Grand Banquets, Pune",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "Our biggest headache was unbooked weekday dates. WedEazzy's corporate and social gathering planners consistently book our secondary hall for cocktail nights and sangeets.",
    stats: "38% Increase in Off-Season Occupancy"
  },
  {
    id: "test-3",
    name: "Harshvardhan Rathore",
    role: "Owner",
    venue: "Rathore Palace & Convention Lawn, Jaipur",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "The 360-degree virtual tour created by WedEazzy allows NRI couples in the US and UK to book our royal palace without visiting in person. It has revolutionized our destination wedding business.",
    stats: "6 NRI Destination Weddings Confirmed"
  }
];
