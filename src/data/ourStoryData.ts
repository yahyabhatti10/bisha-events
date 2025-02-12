// data/ourStoryData.ts
import bismaTeam from '../assets/bisma-team.png';
import harrisTeam from '../assets/harris-team.png';

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Value {
  title: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Harris Saeed",
    role: "Catering & Food",
    description:
      "Owner of Red Chilli Restaurant, bringing years of culinary excellence.",
    image: harrisTeam,
  },
  {
    name: "Bisma Harris",
    role: "Décor Designer & Event Planner",
    description:
      "Creative visionary with a passion for transforming spaces into magical settings.",
    image: bismaTeam,
  },
];

export const values: Value[] = [
  {
    title: "Excellence",
    description: "We strive for perfection in every detail of your event.",
  },
  {
    title: "Creativity",
    description: "Each event is uniquely designed to reflect your personal style.",
  },
  {
    title: "Reliability",
    description: "We deliver on our promises, ensuring peace of mind.",
  },
  {
    title: "Passion",
    description: "We pour our heart into making your dreams come true.",
  },
];
