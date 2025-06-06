import AirportIcon from "@/public/icons/AirportIcon";
import AlertIcon from "@/public/icons/AlertIcon";
import EyeOffIcon from "@/public/icons/EyeOffIcon";
import HomeIcon from "@/public/icons/HomeIcon";
import RestaurantIcon from "@/public/icons/RestaurantIcon";
import SchoolIcon from "@/public/icons/SchoolIcon";
import ShieldCheckIcon from "@/public/icons/ShieldCheckIcon";
import ShieldIcon from "@/public/icons/ShieldIcon";
import ShoppingCentreIcon from "@/public/icons/ShoppingCentereIcon";
import UsersIcon from "@/public/icons/UsersIcon";
import UtensilsIcon from "@/public/icons/UtensilsIcon";
import ZapIcon from "@/public/icons/ZapIcon";

export const features = [
  {
    icon: <ShieldIcon />,
    title: "Zatrzymuje odłamki",
    description: "Zapobiega rozprzestrzenianiu się stłuczonego szkła",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Certyfikat HACCP",
    description: "Spełnia wymagania dla przemysłu spożywczego",
  },
  {
    icon: <EyeOffIcon />,
    title: "Niewidoczna ochrona",
    description: `Zachowuje przejrzystość i${"\u00A0"}estetykę szkła`,
  },
  {
    icon: <AlertIcon />,
    title: "Ochrona przed zarysowaniami",
    description: "Zabezpiecza szklane powierzchnie przed uszkodzeniami",
  },
  {
    icon: <UsersIcon />,
    title: "Bezpieczeństwo publiczne",
    description: `Chroni przed wypadkami w${"\u00A0"}miejscach użyteczności publicznej`,
  },
  {
    icon: <ZapIcon />,
    title: "Łatwa konserwacja",
    description: `Prosta w${"\u00A0"}czyszczeniu i${"\u00A0"}utrzymaniu w${"\u00A0"}czystości`,
  },
];

export const places = [
  {
    icon: <HomeIcon />,
    title: `Domy z${"\u00A0"}dziećmi`,
    description: `Ochrona przed skaleczeniami w${"\u00A0"}przypadku stłuczenia szyb`,
  },
  {
    icon: <UtensilsIcon />,
    title: "Przemysł spożywczy",
    description:
      "Zgodność z HACCP - zabezpieczenie żywności przed odłamkami szkła",
  },
  {
    icon: <SchoolIcon />,
    title: "Obiekty publiczne",
    description: "Szkoły, przedszkola, urzędy - ochrona wielu osób naraz",
  },
  {
    icon: <RestaurantIcon />,
    title: "Restauracje",
    description: `Bezpieczeństwo gości i${"\u00A0"}spełnienie wymogów sanitarnych`,
  },
  {
    icon: <ShoppingCentreIcon />,
    title: "Obiekty handlowe",
    description: `Ochrona witryn sklepowych i${"\u00A0"}stref gastronomicznych`,
  },
  {
    icon: <AirportIcon />,
    title: "Lotniska/dworce",
    description: `Zabezpieczenie dużych przeszkleń w${"\u00A0"}miejscach publicznych`,
  },
];
