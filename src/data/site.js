export const SITE_URL = "https://www.boostech.in";

export const CONTACT = {
  email: "singhvikas2000a@gmail.com",
  phone: "+91 91930 98235",
  phoneHref: "+919193098235",
  whatsapp: "919193098235",
  reviewUrl: "https://g.page/r/CTduq35iFXocEBI/review",
  address: "Mannat Complex, Khadri Road, Shyampur, Rishikesh, Uttarakhand",
  locality: "Rishikesh, Uttarakhand",
};

export const wa = (message = "Hi boostech, I want to discuss a project.") =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const founder = {
  name: "Subodh Uniyal Ji",
  role: "Public representative, Narendra Nagar",
  image: "/subodh-uniyal.jpeg",
  imageAlt:
    "Subodh Uniyal Ji being felicitated with a bouquet by students and staff at a school event in Uttarakhand",
  eyebrow: "The guidance behind the studio",
  headline: "Public service taught us to think beyond the next campaign.",
  paragraphs: [
    "Subodh Uniyal Ji has spent decades in public life in Uttarakhand — first as a student leader, then as the MLA from Narendra Nagar, and as a Cabinet Minister in the state government. His work has carried portfolios including Medical Education, Technical Education, Forest and Parliamentary Affairs.",
    "Across that work, one idea has stayed constant: opportunity should reach people where they already live. Better schools, accessible healthcare and a fair chance for young people are not abstract promises — they are the foundation a local economy is built on.",
    "Boostech carries that idea into business. A restaurant in Rishikesh, a gym in Dehradun or an institute in Haridwar should be able to present itself as clearly online as a brand in a metro — and be found by the customers already looking for it.",
  ],
  work: [
    { label: "Public life", value: "MLA, Narendra Nagar" },
    { label: "Government", value: "Cabinet Minister, Uttarakhand" },
    { label: "Portfolios", value: "Medical & Technical Education, Forest, Parliamentary Affairs" },
    { label: "Focus", value: "Education access, healthcare and opportunity for young people" },
  ],
  caption: "Felicitated by students and staff at a school event in Uttarakhand.",
  note: "A guiding force behind Boostech's belief that local businesses deserve a serious digital presence.",
};

export const services = [
  {
    no: "01",
    slug: "website-design",
    title: "Website Design & Development",
    short: "Websites",
    copy: "Professional, responsive websites that explain your offer clearly and make the next step obvious.",
    tags: ["Business websites", "Landing pages", "WhatsApp integration", "SEO-friendly structure"],
    path: "/services/website-design/",
    icon: "monitor",
  },
  {
    no: "02",
    slug: "seo",
    title: "SEO & Google Business Profile",
    short: "Search",
    copy: "Help nearby customers discover your business through useful pages, clean structure and accurate local information.",
    tags: ["Technical SEO", "Local SEO", "Google Maps", "Profile optimisation"],
    path: "/services/seo/",
    icon: "search",
  },
  {
    no: "03",
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Marketing",
    copy: "A joined-up plan for content, campaigns and measurement — not a pile of disconnected activity.",
    tags: ["Strategy", "Campaign planning", "Content", "Reporting"],
    path: "/services/digital-marketing/",
    icon: "trending",
    featured: true,
  },
  {
    no: "04",
    slug: "google-meta-ads",
    title: "Paid Advertising",
    short: "Paid media",
    copy: "Facebook, Instagram and Google campaign management built around real business goals and clean tracking.",
    tags: ["Lead generation", "WhatsApp enquiries", "Local targeting", "Optimisation"],
    path: "/services/google-meta-ads/",
    icon: "target",
  },
  {
    no: "05",
    slug: "social-media-marketing",
    title: "Social Media Management",
    short: "Social",
    copy: "Keep your brand active, recognisable and consistent across the platforms your customers actually use.",
    tags: ["Facebook", "Instagram", "Posts & reels", "Captions & hashtags"],
    path: "/services/social-media-marketing/",
    icon: "camera",
  },
  {
    no: "06",
    slug: "photography-video",
    title: "Photo & Video Marketing",
    short: "Content",
    copy: "Visual content that makes your products, services, people and place easier to understand and remember.",
    tags: ["Business photography", "Promotional videos", "Product videos", "Reels editing"],
    path: "/services/digital-marketing/",
    icon: "palette",
  },
];

export const packages = [
  {
    id: "basic",
    no: "01",
    name: "Basic",
    label: "Build your online presence",
    intro:
      "A practical starting point for businesses that need consistent social media activity and a more complete Google presence.",
    posts: "8 designed posts",
    reels: "2 reels",
    social: "Facebook & Instagram page management",
    google: "Google Business Profile basic setup / optimisation",
    extra: [
      "Captions and hashtags",
      "Festival and occasion creatives",
      "Business details and contact information",
      "Basic monthly content plan",
    ],
    suitable: "New businesses and local shops starting their digital journey.",
  },
  {
    id: "growth",
    no: "02",
    name: "Growth",
    label: "Stay visible and generate interest",
    intro:
      "A stronger monthly presence with regular content, Google profile management and paid campaign support.",
    posts: "12 designed posts",
    reels: "4 reels",
    social: "Facebook & Instagram page management",
    google: "Google Business Profile management",
    extra: [
      "Captions, hashtags and content planning",
      "Festival creatives",
      "Business photos and profile updates",
      "Customer review response support",
      "Paid campaign management",
      "Local audience and WhatsApp enquiry campaigns",
    ],
    suitable: "Growing businesses that want consistent content and structured promotion.",
  },
  {
    id: "premium",
    no: "03",
    name: "Premium",
    label: "A complete marketing engine",
    intro:
      "Higher-volume content, stronger profile management and paid campaign execution with clear monthly reporting.",
    posts: "20 designed posts",
    reels: "8 reels",
    social: "Full Facebook & Instagram management",
    google: "Ongoing Google Business Profile management",
    extra: [
      "Captions, hashtags and monthly calendar",
      "Festival and promotional creatives",
      "Lead generation and WhatsApp campaigns",
      "Facebook / Instagram ad management",
      "Local audience targeting",
      "Monthly performance report",
      "Promotional / product video editing",
    ],
    suitable: "Established businesses ready for a more active marketing system.",
  },
  {
    id: "maha",
    no: "04",
    name: "Maha Package",
    label: "Your complete digital presence",
    intro:
      "The all-in-one combination: everything in Premium, plus a professional business website built around your products or services.",
    posts: "20 designed posts",
    reels: "8 reels",
    social: "Full Facebook & Instagram management",
    google: "Ongoing Google Business Profile management",
    extra: [
      "Everything included in Premium",
      "Professional responsive website",
      "Products / services information pages",
      "WhatsApp integration",
      "Contact and enquiry form",
      "SEO-friendly website structure",
      "Basic on-page SEO and launch setup",
      "Website aligned with your brand and campaigns",
    ],
    suitable: "Businesses that want marketing, visibility and their own website under one plan.",
    featured: true,
  },
];

export const projects = [
  { name: "Anna’s Mess", url: "https://annas-mess.vercel.app/", category: "Food & hospitality", type: "Restaurant website", mark: "AM" },
  { name: "Photo Shoot Sample", url: "https://photoshootsample.vercel.app/", category: "Creative", type: "Photography showcase", mark: "PS" },
  { name: "Vicky Mehandi Tattoo", url: "https://vicky-mehandi-tattoo.vercel.app/", category: "Creative", type: "Artist business website", mark: "VM" },
  { name: "Saraswati Institution", url: "https://saraswati-institution.vercel.app/", category: "Education", type: "Institution website", mark: "SI" },
  { name: "Bulls Gym", url: "https://bulls-gym-azure.vercel.app/", category: "Fitness", type: "Fitness website", mark: "BG" },
  { name: "Fi-ca", url: "https://fi-ca.vercel.app/", category: "Business", type: "Business website", mark: "FC" },
  { name: "Cozy Chapters Stays", url: "https://cozychapterstays.vercel.app/", category: "Food & hospitality", type: "Stay & hospitality website", mark: "CC" },
  { name: "Vikas Institute", url: "https://vikas-institute.vercel.app/", category: "Education", type: "Institute website", mark: "VI" },
  { name: "TRIOFIT", url: "https://triofit-gold.vercel.app/", category: "Fitness", type: "Fitness & wellness website", mark: "TF" },
  { name: "Rishikesh Greens Cafe", url: "https://rishikesh-greens-cafe.vercel.app/", category: "Food & hospitality", type: "Cafe website", mark: "RG" },
  { name: "Kaafe Rishikesh", url: "https://kaafe-rishikesh.vercel.app/", category: "Food & hospitality", type: "Cafe website", mark: "KR" },
];

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Responsive UI",
  "Vite",
  "SEO foundations",
  "Web performance",
  "React Native / Expo",
  "Supabase",
];

export const faqs = [
  {
    q: "What is included in each package?",
    a: "Each package lists the regular deliverables and management scope. We first understand your business, goals and current online presence, then confirm the exact working scope before starting.",
  },
  {
    q: "Are advertising costs included?",
    a: "No. The advertising budget paid to Google or Meta is separate from campaign management. We agree on the budget and targeting before campaigns go live.",
  },
  {
    q: "Is website development included in every package?",
    a: "Website development is included in the Maha Package. The other packages focus on social media, Google Business Profile and digital promotion. A separate website project can also be discussed.",
  },
  {
    q: "Are photography, video shoots and travel included?",
    a: "On-location shoots, additional production, travel, domain registration and website hosting are scoped separately according to what the business needs.",
  },
  {
    q: "Can a package be customised?",
    a: "Yes. The package is a starting structure. After understanding your business, audience, competition and monthly goals, we can confirm the right combination of deliverables.",
  },
  {
    q: "Do you guarantee Google first-page rankings or a fixed number of leads?",
    a: "No responsible agency can guarantee a specific Google position or fixed leads. We work on sound optimisation, relevant content, campaign management and transparent measurement.",
  },
];

export const processSteps = [
  {
    no: "01",
    title: "Understand",
    copy: "Learn about your business, audience, current online presence and goals — before recommending anything.",
  },
  {
    no: "02",
    title: "Plan & design",
    copy: "Choose the right package and map the message, content and user journey around what customers need.",
  },
  {
    no: "03",
    title: "Build & manage",
    copy: "Create the website and content, manage profiles and run the agreed campaigns with a clear schedule.",
  },
  {
    no: "04",
    title: "Review & improve",
    copy: "Share performance, discuss enquiries and improve the next cycle based on what the work actually produced.",
  },
];

export const servicePages = {
  "/services/digital-marketing/": {
    title: "Digital Marketing",
    eyebrow: "Plan with purpose",
    lead: "Marketing that earns attention — and turns it into enquiries.",
    desc: "Digital marketing for brands that need a clearer message, consistent execution and honest measurement. One team across content, social, search and paid media.",
    bullets: [
      "Audience and competitor research",
      "Positioning, offers and messaging",
      "Content and campaign planning",
      "Performance tracking and reporting",
    ],
  },
  "/services/seo/": {
    title: "SEO & Local Search",
    eyebrow: "Be visible when people search",
    lead: "Build a durable search foundation — technically clean, locally relevant, genuinely useful.",
    desc: "SEO for businesses in Rishikesh and Uttarakhand that want to be found by the people already looking for what they offer.",
    bullets: [
      "Technical SEO and crawlability",
      "On-page structure and useful content",
      "Google Business Profile optimisation",
      "Local search measurement",
    ],
  },
  "/services/social-media-marketing/": {
    title: "Social Media Management",
    eyebrow: "Stay recognisable",
    lead: "A consistent content system, with a clear voice and a reason for every post.",
    desc: "We manage Facebook and Instagram so your business stays active, recognisable and consistent — without adding another job to your week.",
    bullets: [
      "Facebook and Instagram management",
      "Post design, reels and festival creatives",
      "Captions, hashtags and content planning",
      "Monthly performance review",
    ],
  },
  "/services/google-meta-ads/": {
    title: "Google & Meta Ads",
    eyebrow: "Campaigns with a clear job",
    lead: "Paid campaigns planned around objectives, not boosted posts and guesswork.",
    desc: "Facebook, Instagram and Google campaign management with clean tracking, agreed budgets and continuous optimisation.",
    bullets: [
      "Facebook and Instagram ad campaigns",
      "Google Ads campaign management",
      "Lead and WhatsApp enquiry campaigns",
      "Local audience targeting and optimisation",
    ],
  },
  "/services/website-design/": {
    title: "Website Design & Development",
    eyebrow: "Turn visitors into enquiries",
    lead: "Websites that communicate clearly, load efficiently and make the next action obvious.",
    desc: "Responsive business websites built around your services, your customers and the way people actually enquire today.",
    bullets: [
      "Professional business websites",
      "Product and service information",
      "WhatsApp integration and contact forms",
      "Responsive and SEO-friendly structure",
    ],
  },
};

export const marketingCapabilities = [
  {
    no: "01",
    title: "Social media management",
    copy: "Designed posts, reels and festival creatives with captions, hashtags and a monthly content plan — published consistently on Facebook and Instagram.",
    items: ["8–20 designed posts", "2–8 reels", "Captions & hashtags", "Monthly content plan"],
  },
  {
    no: "02",
    title: "SEO & online visibility",
    copy: "Clean page structure, useful content and an accurate Google Business Profile so nearby customers can find and trust your business.",
    items: ["Technical SEO", "On-page optimisation", "Google Business Profile", "Local search measurement"],
  },
  {
    no: "03",
    title: "Content & creative production",
    copy: "Business photography, promotional videos, product clips and reel editing that make your offer easier to understand at a glance.",
    items: ["Business photography", "Promotional videos", "Product videos", "Reels editing"],
  },
  {
    no: "04",
    title: "Advertising & campaigns",
    copy: "Facebook, Instagram and Google campaigns built around lead generation, WhatsApp enquiries and local audiences — with agreed budgets and continuous optimisation.",
    items: ["Meta campaigns", "Google Ads", "Lead & WhatsApp campaigns", "Local targeting"],
  },
  {
    no: "05",
    title: "Strategy & measurement",
    copy: "Research, positioning and a campaign calendar, followed by a clear review of what ran and what it produced. No vanity dashboards.",
    items: ["Audience research", "Offer & messaging", "Campaign calendar", "Monthly reporting"],
  },
  {
    no: "06",
    title: "Complete digital presence",
    copy: "The Maha Package brings the website and marketing together: one brand, one message, one team managing the whole picture.",
    items: ["Responsive website", "WhatsApp integration", "Enquiry form", "Brand-aligned campaigns"],
  },
];

export const marketingDeliverables = [
  "A content calendar you can plan around, not a surprise post every few days.",
  "Designed posts, reels and festival creatives that look like one brand.",
  "A Google Business Profile with accurate information and review support.",
  "Campaigns with agreed budgets, targeting and a clear enquiry path.",
  "A monthly review of what ran, what was learned and what changes next.",
];

export const marketingReasons = [
  {
    title: "One team, not three vendors",
    copy: "Website, search, social and ads sit under one plan — so the message stays consistent and nobody blames the other agency.",
  },
  {
    title: "Local context, real businesses",
    copy: "We work with restaurants, institutes, gyms, stays and service businesses around Rishikesh and Uttarakhand. We understand how customers here enquire.",
  },
  {
    title: "Transparent by default",
    copy: "Clear scope, separate ad budgets and no guaranteed rankings or lead counts. You always know what is being done and why.",
  },
];

export const marketingFaqs = [
  {
    q: "Do you guarantee first-page rankings or a fixed number of leads?",
    a: "No. No responsible agency can guarantee a specific Google position or a fixed lead count. We work on sound optimisation, relevant content, campaign management and transparent measurement.",
  },
  {
    q: "Is the advertising budget included in your fee?",
    a: "No. The budget paid to Google or Meta is separate from campaign management. We agree the budget and targeting before any campaign goes live.",
  },
  {
    q: "Which platforms do you manage?",
    a: "Facebook, Instagram and Google — including Google Business Profile, Google Ads and Meta ad campaigns. The right mix depends on where your customers actually are.",
  },
  {
    q: "Do you create the content too?",
    a: "Yes. Posts, captions, hashtags, festival creatives, reels editing and promotional videos are part of the marketing packages. Business photography and video shoots are scoped separately based on requirements.",
  },
  {
    q: "Can we start with one service?",
    a: "Yes. Many businesses begin with social media management, a Google profile or a website, then add campaigns once the foundation is in place.",
  },
  {
    q: "How do we get started?",
    a: "Share your business, current online presence and what you want to improve. We will discuss the scope and recommend a package or a custom combination.",
  },
];
