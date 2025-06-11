import ClockIcon from "@/public/icons/ClockIcon";
import ColorPaletteIcon from "@/public/icons/ColorPaletteIcon";
import DropletsIcon from "@/public/icons/DropletsIcon";
import FarmBuildingIcon from "@/public/icons/FarmBuildingIcon";
import LogisticsCenterIcon from "@/public/icons/LogisticsCenterIcon";
import ProductionFloorIcon from "@/public/icons/ProductionFloorIcon";
import ShieldIcon from "@/public/icons/ShieldIcon";
import ShoppingCentreIcon from "@/public/icons/ShoppingCentereIcon";
import SportHallIcon from "@/public/icons/SportHallIcon";
import StorageIcon from "@/public/icons/StorageIcon";
import ThermometerIcon from "@/public/icons/ThermometerIcon";
import ZapIcon from "@/public/icons/ZapIcon";

export const features = [
  {
    icon: <ThermometerIcon />,
    title: "Redukcja temperatury",
    description: `Obniżenie temperatury wewnątrz hali o${"\u00A0"}3-5°C.`,
  },
  {
    icon: <ShieldIcon />,
    title: "Ochrona UV",
    description: "Zapobieganie żółknięciu poliwęglanu.",
  },
  {
    icon: <ZapIcon />,
    title: "Oszczędność energii",
    description: "Znaczne zmniejszenie kosztów klimatyzacji.",
  },
  {
    icon: <DropletsIcon />,
    title: "Dopasowanie termiczne",
    description: `Mikrospory identyczne jak w${"\u00A0"}poliwęglanie.`,
  },
  {
    icon: <ColorPaletteIcon />,
    title: "Dostępne kolory",
    description: `Biały i${"\u00A0"}srebrny do wyboru.`,
  },
  {
    icon: <ClockIcon />,
    title: "Trwałość",
    description: "Długoletnia ochrona świetlików.",
  },
];

export const places = [
  {
    icon: <ProductionFloorIcon />,
    title: "Hale produkcyjne",
    description:
      "Poprawa warunków pracy poprzez redukcję temperatury pod świetlikami.",
  },
  {
    icon: <StorageIcon />,
    title: "Magazyny",
    description: "Ochrona przechowywanych towarów przed przegrzaniem.",
  },
  {
    icon: <LogisticsCenterIcon />,
    title: "Centra logistyczne",
    description:
      "Zwiększenie komfortu pracy przy zachowaniu naturalnego światła.",
  },
  {
    icon: <ShoppingCentreIcon />,
    title: "Hale handlowe",
    description: "Lepszy klimat dla klientów bez konieczności zaciemniania.",
  },
  {
    icon: <SportHallIcon />,
    title: "Obiekty sportowe",
    description: `Kontrola nasłonecznienia na halach i${"\u00A0"}basenach.`,
  },
  {
    icon: <FarmBuildingIcon />,
    title: "Budynki rolnicze",
    description: `Ochrona zwierząt i${"\u00A0"}roślin przed przegrzaniem.`,
  },
];
