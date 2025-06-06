import HomeIcon from "@/public/icons/HomeIcon";
import HospitalIcon from "@/public/icons/HospitalIcon";
import OfficeIcon from "@/public/icons/OfficeIcon";
import RestaurantIcon from "@/public/icons/RestaurantIcon";
import ShoppingCentreIcon from "@/public/icons/ShoppingCentereIcon";

export const places = [
  {
    icon: <HomeIcon />,
    title: `Mieszkania i${"\u00A0"}domy`,
    description: `Prywatność bez rezygnacji z${"\u00A0"}widoku na zewnątrz, szczególnie w${"\u00A0"}parterowych lokalizacjach.`,
  },
  {
    icon: <OfficeIcon />,
    title: "Biura",
    description: `Stylowe rozwiązanie dla przestrzeni wymagających dyskrecji i${"\u00A0"}profesjonalnego wyglądu.`,
  },
  {
    icon: <HospitalIcon />,
    title: "Gabinet lekarski/kosmetyczny",
    description: `Komfort pacjentów i${"\u00A0"}klientów przy zachowaniu ich prywatności.`,
  },
  {
    icon: <ShoppingCentreIcon />,
    title: `Sklepy i${"\u00A0"}showroomy`,
    description:
      "Możliwość obserwacji klientów bez naruszania ich przestrzeni.",
  },
  {
    icon: <RestaurantIcon />,
    title: `Restauracje i${"\u00A0"}kawiarnie`,
    description: `Elegancka ochrona przed spojrzeniami z${"\u00A0"}zewnątrz w${"\u00A0"}godzinach dziennych.`,
  },
  {
    icon: <OfficeIcon />,
    title: "Obiekty komercyjne",
    description: `Nowoczesny wygląd fasady połączony z${"\u00A0"}funkcjonalnością.`,
  },
];
