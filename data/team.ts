export interface TeamMember {
  name: string;
  role?: string;
  title?: string;
  affiliation: string;
  image?: string;
  portfolioUrl?: string;
  badge?: string;
}

export const ieeeItsLeadership: TeamMember[] = [
  {
    name: "Dr. John Singh K",
    role: "Faculty Advisor",
    title: "Professor, School of Computer Science Engineering & Information Systems (SCORE)",
    affiliation: "VIT Vellore",
    badge: "Faculty Advisor",
  },
  {
    name: "Dr. Sumangali. K",
    role: "Associate Professor",
    title: "SCORE",
    affiliation: "VIT, Vellore",
    badge: "Faculty Advisor",
  },
  {
    name: "Dr. Asha. N",
    role: "Associate Professor",
    title: "SCORE",
    affiliation: "VIT, Vellore",
    badge: "Faculty Advisor",
  },

  {
    name: "Likhith Medarametla",
    affiliation: "SCORE, VIT Vellore",
    portfolioUrl: "https://www.linkedin.com/in/likhithmedarametla/",
    badge: "Project Lead",
  },
  {
    name: "Judson Daniel",
    affiliation: "SCORE, VIT Vellore",
    badge: "Project Lead",
  },
  {
    name: "M.J.V.Maheswara Reddy",
    affiliation: "SCORE, VIT Vellore",
    badge: "Web Development Lead",
  },
];