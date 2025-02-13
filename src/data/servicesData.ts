// servicesData.ts which are being used in EnchantingEvents.tsx
import walimaCover from '../assets/events/walima/walima-cover.jpg';
import baratCover from '../assets/events/barat/barat-cover.jpg';
import mehandiCover from '../assets/events/mehandi/mehandi-cover.jpg';
import nikkahCover from '../assets/events/nikkah/nikkah-cover.jpg';
import engagementCover from '../assets/events/engagement/engagement-cover.jpg';
import anniversaryCover from '../assets/events/anniversary/anniversary-cover.jpg';
import valentineCover from '../assets/events/valentine/valentine-cover.jpg';
import birthdayCover from '../assets/events/birthday/birthday-cover.jpg';
import bridalShowerCover from '../assets/events/bridalShower/bridalShower-cover.jpg';
import qawaliCover from '../assets/events/qawali/qawali-cover.jpg';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "walima-receptions",
    title: "Walima & Receptions",
    description:
      "The grand celebration marking the official reception—lavish and unforgettable.",
    image: walimaCover,
  },
  {
    id: "barat-wedding",
    title: "Barat Wedding Events",
    description:
      "A vibrant celebration of marriage traditions with rich cultural elements.",
    image: baratCover,
  },
  {
    id: "mehandi-dholki-shendi",
    title: "Mehandi, Dholki's & Shendi's",
    description:
      "A colorful pre-wedding celebration filled with music, dance, and traditional henna.",
    image: mehandiCover,
  },
  {
    id: "nikkah-ceremony",
    title: "Nikkah Ceremony",
    description:
      "A solemn and spiritual ceremony marking the union in a traditional setting.",
    image: nikkahCover,
  },
  {
    id: "engagements",
    title: "Engagements",
    description:
      "A romantic occasion celebrating the promise of a lifelong journey together.",
    image: engagementCover,
  },
  {
    id: "qawali-nights",
    title: "Qawali Nights",
    description:
      "An enchanting night of soulful qawali music and cultural celebration.",
    image: qawaliCover,
  },
  {
    id: "bridal-shower",
    title: "Bridal Shower",
    description:
      "A joyful celebration honoring the bride-to-be with love and laughter.",
    image: bridalShowerCover,
  },
  {
    id: "birthday-celebrations",
    title: "Birthday Celebrations",
    description:
      "Fun and festive gatherings to mark another year of life with style.",
    image: birthdayCover,
  },
  {
    id: "wedding-anniversaries",
    title: "Wedding Anniversaries",
    description:
      "A special day to celebrate enduring love and shared memories.",
    image: anniversaryCover,
  },
  {
    id: "valentine-dinners",
    title: "Valentine Dinners",
    description:
      "An intimate and romantic dining experience celebrating love.",
    image: valentineCover,
  },
];
