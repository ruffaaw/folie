import {
  Shield,
  Lock,
  Home,
  Briefcase,
  Factory,
  AlertOctagon,
  Zap,
  Clock,
  EyeOff,
  Landmark,
} from "lucide-react";

export const features = [
  {
    icon: <Shield />,
    title: "Odporność na uderzenia",
    description: `Wytrzymałość na rozbicie i${"\u00A0"}rozciąganie`,
  },
  {
    icon: <EyeOff />,
    title: "Niewidoczna ochrona",
    description: `Zachowuje przejrzystość i${"\u00A0"}estetykę okna`,
  },
  {
    icon: <Zap />,
    title: "Ochrona przed wybuchem",
    description: "Zabezpieczenie przed falą uderzeniową",
  },
  {
    icon: <Clock />,
    title: "Długotrwałość",
    description: `Trwałość porównywalna z${"\u00A0"}żywotnością okna`,
  },
  {
    icon: <Lock />,
    title: "Zalecana przez ubezpieczycieli",
    description: "Możliwość obniżenia składek ubezpieczeniowych",
  },
  {
    icon: <AlertOctagon />,
    title: "Psychologiczny efekt",
    description: "Zniechęca włamywaczy do prób sforsowania",
  },
];

export const places = [
  {
    icon: <Landmark />,
    title: "Placówki bankowe",
    description: `Podstawowe zabezpieczenie szyb i${"\u00A0"}witryn w obiektach finansowych.`,
  },
  {
    icon: <Briefcase />,
    title: "Instytucje publiczne",
    description: `Ochrona budynków administracji i${"\u00A0"}obiektów użyteczności publicznej.`,
  },
  {
    icon: <Home />,
    title: `Domy i${"\u00A0"}mieszkania`,
    description: `Niewidoczna ochrona okien parterowych i${"\u00A0"}balkonowych.`,
  },
  {
    icon: <Briefcase />,
    title: `Biura i${"\u00A0"}sklepy`,
    description: `Zabezpieczenie witryn sklepowych i${"\u00A0"}biurowych.`,
  },
  {
    icon: <Factory />,
    title: "Hale produkcyjne",
    description: `Ochrona dużych przeszkleń w${"\u00A0"}obiektach przemysłowych.`,
  },
  {
    icon: <Home />,
    title: "Obiekty komercyjne",
    description: `Apteki, jubilerzy i${"\u00A0"}inne punkty wymagające szczególnej ochrony.`,
  },
];
