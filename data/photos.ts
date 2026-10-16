export interface PhotoItem {
  id: string;
  src: string;
  title: string;
  category: string;
  description?: string;
}

export const technext24Photos: PhotoItem[] = Array.from({ length: 25 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  const titles = [
    "TechNext'24 Industrial Expo Launch",
    "Student Hardware Innovation Showcase",
    "Industry Dignitaries & Jury Evaluation",
    "Robotics & Embedded Systems Pavilion",
    "Project Demonstration to Industry Mentors",
    "Deep Tech & AI Prototype Display",
    "Inter-University Participant Teams",
    "IoT & Smart Sensors Exhibit",
    "Hands-on Product Testing & Demos",
    "Faculty & Mentor Interaction with Innovators",
    "Autonomous Robotics Arena",
    "Green Technology & Clean Energy Exhibits",
    "Biomedical Instrumentation Stall",
    "Cybersecurity & Software Tools Demonstration",
    "Keynote Jury Reviewing Prototype",
    "Live Coding & Hardware Interfacing",
    "Hardware Accelerator Display",
    "Best Innovation Award Presentation",
    "Excellence in Engineering Project Awards",
    "Dean & Committee Visiting Student Stalls",
    "Industry Partnership & Startup Stalls",
    "Innovators Group Portrait at TechNext",
    "Interactive STEM Demonstrations",
    "Valedictory Ceremony & Cash Prizes",
    "TechNext'24 Concluding Delegation Portrait",
  ];
  return {
    id: `technext24-${num}`,
    src: `/images/technext24/technext_${num}.webp`,
    title: titles[i] || `TechNext'24 Project Showcase #${i + 1}`,
    category: "Industrial Expo & Project Showcase",
    description: "Captured during the TechNext'24 flagship expo and project competition organized at VIT Vellore.",
  };
});

export const bolt20Photos: PhotoItem[] = Array.from({ length: 24 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  const titles = [
    "BOLT 2.0 Grand Inauguration & Problem Statements Release",
    "Hacker Teams Brainstorming Architecture",
    "24-Hour Overnight Hacking in Progress",
    "Technical Mentors Guiding Teams on Hardware & Cloud",
    "Full-Stack Development Sprint Session",
    "AI/ML Model Training & Rapid Prototyping",
    "Mid-Hack Milestone Review with Technical Jury",
    "Team Collaboration at SCORE Labs",
    "Pitch Deck Preparation & Code Finalization",
    "Pre-Dawn Problem Solving & Debugging",
    "Live Demonstration of Working Solutions",
    "Jury Evaluation & Architecture Defense",
    "Top 10 Finalist Presentations on Stage",
    "Keynote Sponsor Feedback from Tech Executives",
    "Crowd Reacting to Revolutionary Project Demos",
    "Grand Finale Judges Scoring Deliberations",
    "Announcing Winners of BOLT 2.0 Hackathon",
    "First Prize Award Handover with Rs. 1,00,000+ Prize",
    "Runner-Up Teams Receiving Mementos & Goodies",
    "Sponsor Special Category Innovation Awards",
    "All-Women Hacker Team Special Recognition",
    "Organizing Committee & Student Leads Celebration",
    "Participants Group Photo with Dignitaries",
    "BOLT 2.0 Banner Group Portrait",
  ];
  return {
    id: `bolt20-${num}`,
    src: `/images/bolt20/bolt_${num}.webp`,
    title: titles[i] || `BOLT 2.0 Hackathon Milestone #${i + 1}`,
    category: "24-Hour National Hackathon",
    description: "Highlights from the BOLT 2.0 national flagship hackathon conducted alongside ic-ETITE.",
  };
});

export const icetite20DrivePhotos: PhotoItem[] = Array.from({ length: 39 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  const titles = [
    "ic-ETITE'20 Inaugural Lamp Lighting Ceremony",
    "Chancellor Dr. G. Viswanathan Address",
    "International Keynote Speakers on Stage",
    "Official Release of IEEE Conference Proceedings",
    "VIP Dignitaries & Academic Leadership",
    "IEEE Section Representative Presentation",
    "Auditorium Packed Plenary Audience",
    "Felicitation of Distinguished Global Scientists",
    "Keynote on Emerging Computational Intelligence",
    "Technical Committee Recognition",
    "International Delegates Traditional Welcome",
    "Tree Plantation Drive with International Guests",
    "Academic Delegation Meeting at VIT Campus",
    "Session Chairs Reviewing Parallel Tracks",
    "Inauguration of Technical Exhibition Stalls",
    "Plenary Lecture on Signal Processing & IT",
    "Audience Q&A with Eminent International Speaker",
    "Dean SCORE Presenting Conference Milestones",
    "Token of Appreciation to IEEE Madras Section",
    "Distinguished Guests Conclave at Conference Hall",
    "Research Scholars Interactive Session",
    "Poster Presentation Evaluations by Expert Jury",
    "Panel Discussion on Industry 4.0 & Engineering",
    "Student Volunteers Group Photograph with Patrons",
    "Conference Secretariat Coordination Desk",
    "Global Keynote Speaker Delivering Insights",
    "Presentation of Best Paper Award in Track 1",
    "Special Session on IoT & Cloud Computing",
    "Delegates Networking Dinner & Colloquium",
    "Campus Tour for International Guests",
    "Tree Plantation by Prof. Abraham & Dr. Barsky",
    "Honorary Memento Handover by Chancellor",
    "Valedictory Function Stage Dignitaries",
    "Closing Remarks by Organizing Chair",
    "Certificate Distribution to Authors & Delegates",
    "International Collaborative Research Discussions",
    "Commemorative Photo with Patron & Co-Patrons",
    "ic-ETITE'20 Organizing Committee Assembly",
    "Official Group Photograph of ic-ETITE'20",
  ];
  return {
    id: `icetite20-${num}`,
    src: `/images/icetite20_drive/icetite20_${num}.webp`,
    title: titles[i] || `ic-ETITE'20 Official Photo #${i + 1}`,
    category: "ic-ETITE'20 Inauguration & Sessions",
    description: "Official archival photograph from the first IEEE ic-ETITE conference organized at VIT Vellore.",
  };
});

export const icetite24Photos: PhotoItem[] = [
  {
    id: "icetite24-01",
    src: "/images/gallery/icetite24_inauguration.webp",
    title: "ic-ETITE'24 Grand Inaugural Ceremony",
    category: "Inaugural Ceremony",
    description: "Official inaugural stage at Anna Auditorium, VIT Vellore with Chancellor Dr. G. Viswanathan and global keynote guests.",
  },
  {
    id: "icetite24-02",
    src: "/images/gallery/icetite24_dignitaries.webp",
    title: "Dignitaries on Stage & Proceedings Release",
    category: "Leadership & Dignitaries",
    description: "Formal unveiling of the ic-ETITE'24 IEEE Xplore proceedings volume and conference schedule.",
  },
  {
    id: "icetite24-03",
    src: "/images/gallery/icetite24_keynote.webp",
    title: "Global Keynote Address",
    category: "Keynote Plenary",
    description: "Keynote presentation by international scientist on frontier trends in information technology and computer engineering.",
  },
  {
    id: "icetite24-04",
    src: "/images/004A3218.webp",
    title: "Anna Auditorium Main Plenary Session",
    category: "Conference Plenary",
    description: "Distinguished scholars and attendees gathered during the opening plenary track.",
  },
  {
    id: "icetite24-05",
    src: "/images/004A3344.webp",
    title: "Conference Plenary Discussions",
    category: "Academic Conclave",
    description: "Engaging discussions during the technical session at VIT Vellore campus.",
  },

  {
    id: "icetite24-07",
    src: "/images/ic-etite24.webp",
    title: "ic-ETITE'24 Delegates & Paper Presenters",
    category: "Technical Tracks",
    description: "Paper presentation sessions attended by 1,088+ participants from 19 countries.",
  },
  {
    id: "icetite24-08",
    src: "/images/ic-etite24-preview.webp",
    title: "ic-ETITE'24 Official Banner Stage",
    category: "Conference Heritage",
    description: "Second edition milestone celebration at School of Computer Science Engineering (SCORE).",
  },
];
