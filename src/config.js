export const trainer = {
  name: "YOUR NAME",
  gymName: "Your Gym Name",
  tagline: "Certified Personal Trainer",
  phone: "+91 99999 99999",
  whatsapp: "919999999999",
  whatsappMessage: "Hi, I want to book a free session",
  badge: "Certified Fitness Coach",
  heroTitleTop: "BUILD YOUR BODY",
  heroTitleAccent: "STRONGER EVERY DAY",
  heroDescription:
    "Personal training, weight loss and muscle gain programs designed for you. Start your fitness journey with a coach who keeps you on track.",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "200+", label: "Clients Trained" },
    { value: "50+", label: "Transformations" },
  ],
};

// Right side la varra images + background scroll images (rendumkum idhe use aagum)
export const heroImages = [
  "https://i.pinimg.com/1200x/85/22/b3/8522b339f4f97982a48626cf0e03ef43.jpg",
  "https://i.pinimg.com/1200x/55/42/f3/5542f378f21820596125e8bba4ee56f2.jpg",
  "https://i.pinimg.com/1200x/ff/71/54/ff7154aaa7fc5f307d701cc27e08b7c5.jpg",
  "https://i.pinimg.com/736x/cf/ea/71/cfea719b29faa06ec4a718490bb9a17a.jpg",
];

// Background video venum-na link podunga (example: "/gym.mp4"). Illa-na "" vittudunga.
export const heroVideo = "";

export const marqueeItems = [
  ...trainer.stats.map((s) => `${s.value} ${s.label}`),
  "Weight Loss",
  "Muscle Gain",
  "Personal Training",
  "Diet Plans",
];

export const about = {
  label: "ABOUT ME",
  title: "Hi, I'm",
  text: [
    "I am a certified fitness trainer with years of experience helping people lose fat, build muscle and live healthier lives.",
    "My training is simple: the right workout, the right food and daily discipline. Whether you are a beginner or already training, I will guide you step by step until you reach your goal.",
  ],
  // Demo photo. Real-a "/about.jpg" nu public folder la podunga
  image: heroImages[1],
  highlights: [
    "Personal one-to-one training",
    "Custom diet and workout plans",
    "Beginner friendly programs",
    "Online and offline coaching",
  ],
  certifications: [
    { title: "Certified Personal Trainer", sub: "Add certificate name" },
    { title: "Nutrition Coach", sub: "Add certificate name" },
    { title: "First Aid and CPR", sub: "Add certificate name" },
  ],
};

// ---------- Services section (friend details vandha inga maathunga) ----------
export const services = {
  label: "WHAT I OFFER",
  title: "My Services",
  subtitle:
    "Pick the program that fits your goal. Every plan is customised for you.",
  items: [
    {
      icon: "🔥",
      title: "Weight Loss",
      text: "Fat loss programs with simple workouts and a practical diet plan that fits your daily life.",
    },
    {
      icon: "💪",
      title: "Muscle Gain",
      text: "Strength and hypertrophy training with proper progression to build size safely.",
    },
    {
      icon: "🏋️",
      title: "Personal Training",
      text: "One-to-one coaching with full attention on your form, goals and progress.",
    },
    {
      icon: "🥗",
      title: "Diet Plans",
      text: "Easy meal plans using food you already eat. No crash diets, only results.",
    },
    {
      icon: "📱",
      title: "Online Coaching",
      text: "Train from anywhere with video guidance, weekly check-ins and WhatsApp support.",
    },
    {
      icon: "🧘",
      title: "Flexibility and Mobility",
      text: "Stretching and mobility sessions to improve posture and prevent injuries.",
    },
  ],
};

// ---------- Results / Client achievements (friend details vandha inga maathunga) ----------
export const results = {
  label: "RESULTS",
  title: "Client Achievements",
  subtitle: "Real people, real effort, real change.",
  counters: [
    { value: "200+", label: "Clients Trained" },
    { value: "50+", label: "Transformations" },
    { value: "1000+", label: "Kg Lost Together" },
    { value: "98%", label: "Happy Clients" },
  ],
  // Demo photos. Real before/after photos vandhaa "/before1.jpg" maadhiri maathunga
  transformations: [
    {
      name: "Client Name",
      result: "Lost 12 kg in 3 months",
      before: heroImages[0],
      after: heroImages[1],
    },
    {
      name: "Client Name",
      result: "Gained 6 kg lean muscle in 5 months",
      before: heroImages[2],
      after: heroImages[3],
    },
    {
      name: "Client Name",
      result: "Lost 18 kg in 6 months",
      before: heroImages[1],
      after: heroImages[0],
    },
  ],
  testimonials: [
    {
      name: "Client Name",
      role: "Weight loss program",
      text: "Add the client's real feedback here.",
    },
    {
      name: "Client Name",
      role: "Muscle gain program",
      text: "Add the client's real feedback here.",
    },
    {
      name: "Client Name",
      role: "Online coaching",
      text: "Add the client's real feedback here.",
    },
  ],
};
export const contact = {
  label: "GET IN TOUCH",
  title: "Start Your Journey",
  subtitle: "Message me on WhatsApp or fill the form. I will reply as soon as possible.",
  email: "yourname@gmail.com",
  instagram: "https://instagram.com/yourname",
  instagramHandle: "@yourname",
  address: "Your Gym Name, Street, City, Tamil Nadu",
  timings: "Mon - Sat: 5:30 AM - 9:00 PM",
  // Google Maps la gym search panni Share > Embed a map > src link mattum paste pannunga
  mapEmbed:
    "https://www.google.com/maps?q=Coimbatore&output=embed",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export const whatsappLink = () =>
  `https://wa.me/${trainer.whatsapp}?text=${encodeURIComponent(
    trainer.whatsappMessage
  )}`;



