import {
  Shield,
  Home,
  Utensils,
  Building,
  Users,
  AlertTriangle,
  Zap,
  EyeClosed,
  ShieldCheck,
} from "lucide-react";

export const features = [
  {
    icon: <Shield />,
    title: "Zatrzymuje odłamki",
    description: "Zapobiega rozprzestrzenianiu się stłuczonego szkła",
  },
  {
    icon: <ShieldCheck />,
    title: "Certyfikat HACCP",
    description: "Spełnia wymagania dla przemysłu spożywczego",
  },
  {
    icon: <EyeClosed />,
    title: "Niewidoczna ochrona",
    description: "Zachowuje przejrzystość i estetykę szkła",
  },
  {
    icon: <AlertTriangle />,
    title: "Ochrona przed zarysowaniami",
    description: "Zabezpiecza szklane powierzchnie przed uszkodzeniami",
  },
  {
    icon: <Users />,
    title: "Bezpieczeństwo publiczne",
    description: "Chroni przed wypadkami w miejscach użyteczności publicznej",
  },
  {
    icon: <Zap />,
    title: "Łatwa konserwacja",
    description: "Prosta w czyszczeniu i utrzymaniu w czystości",
  },
];

export const places = [
  {
    icon: <Home />,
    title: "Domy z dziećmi",
    description: "Ochrona przed skaleczeniami w przypadku stłuczenia szyb",
  },
  {
    icon: <Utensils />,
    title: "Przemysł spożywczy",
    description:
      "Zgodność z HACCP - zabezpieczenie żywności przed odłamkami szkła",
  },
  {
    icon: <Building />,
    title: "Obiekty publiczne",
    description: "Szkoły, przedszkola, urzędy - ochrona wielu osób naraz",
  },
  {
    icon: <Utensils />,
    title: "Restauracje",
    description: "Bezpieczeństwo gości i spełnienie wymogów sanitarnych",
  },
  {
    icon: <Building />,
    title: "Obiekty handlowe",
    description: "Ochrona witryn sklepowych i stref gastronomicznych",
  },
  {
    icon: <Building />,
    title: "Lotniska/dworce",
    description: "Zabezpieczenie dużych przeszkleń w miejscach publicznych",
  },
];
