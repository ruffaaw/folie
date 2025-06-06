import ClockIcon from "@/public/icons/ClockIcon";
import DropletsIcon from "@/public/icons/DropletsIcon";
import HomeIcon from "@/public/icons/HomeIcon";
import LeafIcon from "@/public/icons/LeafIcon";
import MonumentIcon from "@/public/icons/MonumentIcon";
import OfficeIcon from "@/public/icons/OfficeIcon";
import RestaurantIcon from "@/public/icons/RestaurantIcon";
import SchoolIcon from "@/public/icons/SchoolIcon";
import ShieldIcon from "@/public/icons/ShieldIcon";
import ShoppingCentereIcon from "@/public/icons/ShoppingCentereIcon";
import ThermometerIcon from "@/public/icons/ThermometerIcon";
import ZapIcon from "@/public/icons/ZapIcon";

export const features = [
  {
    icon: <ThermometerIcon />,
    title: "Obniżenie temperatury",
    description: "Redukcja nagrzewania pomieszczeń",
  },
  {
    icon: <ZapIcon />,
    title: "Oszczędność energii",
    description: "Znaczne zmniejszenie kosztów klimatyzacji",
  },
  {
    icon: <ShieldIcon />,
    title: "Ochrona UV",
    description: "Ochrona przed szkodliwymi promieniami UV",
  },
  {
    icon: <LeafIcon />,
    title: "Ochrona wnętrz",
    description: `Zapobiega blaknięciu mebli i${"\u00A0"}podłóg`,
  },
  {
    icon: <DropletsIcon />,
    title: "Eliminacja refleksów",
    description: `Poprawa widoczności w${"\u00A0"}słoneczne dni`,
  },
  {
    icon: <ClockIcon />,
    title: "Długotrwałość",
    description: `Żywotność 5-10 lat w${"\u00A0"}zależności od produktu`,
  },
];

export const places = [
  {
    icon: <OfficeIcon />,
    title: "Nowoczesne biurowce",
    description:
      "Rozwiązanie problemu przegrzewania się przeszklonych powierzchni bez konieczności montażu żaluzji.",
  },
  {
    icon: <HomeIcon />,
    title: `Domy i${"\u00A0"}mieszkania`,
    description: `Ochrona przed nadmiernym nagrzewaniem pomieszczeń od strony południowej i${"\u00A0"}zachodniej.`,
  },
  {
    icon: <MonumentIcon />,
    title: "Zabytkowe budynki",
    description:
      "Efekt odświeżenia elewacji przy zachowaniu charakteru budynku.",
  },
  {
    icon: <ShoppingCentereIcon />,
    title: "Obiekty handlowe",
    description: `Ochrona towarów przed blaknięciem i${"\u00A0"}zmniejszenie kosztów klimatyzacji.`,
  },
  {
    icon: <RestaurantIcon />,
    title: `Restauracje i${"\u00A0"}hotele`,
    description:
      "Zapewnienie komfortu termicznego gościom bez ograniczania widoku na zewnątrz.",
  },
  {
    icon: <SchoolIcon />,
    title: `Szkoły i${"\u00A0"}przedszkola`,
    description: `Tworzenie komfortowych warunków do nauki i${"\u00A0"}zabawy w słoneczne dni.`,
  },
];
