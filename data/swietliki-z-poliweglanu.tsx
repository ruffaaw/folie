import {
  Thermometer,
  Factory,
  CloudSun,
  Shield,
  Droplets,
  Zap,
  Clock,
} from "lucide-react";

export const features = [
  {
    icon: <Thermometer />,
    title: "Redukcja temperatury",
    description: `Obniżenie temperatury wewnątrz hali o${"\u00A0"}3-5°C`,
  },
  {
    icon: <Shield />,
    title: "Ochrona UV",
    description: "Zapobieganie żółknięciu poliwęglanu",
  },
  {
    icon: <Zap />,
    title: "Oszczędność energii",
    description: "Znaczne zmniejszenie kosztów klimatyzacji",
  },
  {
    icon: <Droplets />,
    title: "Dopasowanie termiczne",
    description: `Mikrospory identyczne jak w${"\u00A0"}poliwęglanie`,
  },
  {
    icon: <CloudSun />,
    title: "Dostępne kolory",
    description: `Biały i${"\u00A0"}srebrny do wyboru`,
  },
  {
    icon: <Clock />,
    title: "Trwałość",
    description: "Długoletnia ochrona świetlików",
  },
];

export const places = [
  {
    icon: <Factory />,
    title: "Hale produkcyjne",
    description:
      "Poprawa warunków pracy poprzez redukcję temperatury pod świetlikami.",
  },
  {
    icon: <Factory />,
    title: "Magazyny",
    description: "Ochrona przechowywanych towarów przed przegrzaniem.",
  },
  {
    icon: <Factory />,
    title: "Centra logistyczne",
    description:
      "Zwiększenie komfortu pracy przy zachowaniu naturalnego światła.",
  },
  {
    icon: <Factory />,
    title: "Hale handlowe",
    description: "Lepszy klimat dla klientów bez konieczności zaciemniania.",
  },
  {
    icon: <Factory />,
    title: "Obiekty sportowe",
    description: `Kontrola nasłonecznienia na halach i${"\u00A0"}basenach.`,
  },
  {
    icon: <Factory />,
    title: "Budynki rolnicze",
    description: `Ochrona zwierząt i${"\u00A0"}roślin przed przegrzaniem.`,
  },
];
