import BrushIcon from "@/public/icons/BrushIcon";
import HomeIcon from "@/public/icons/HomeIcon";
import HospitalIcon from "@/public/icons/HospitalIcon";
import MuseumIcon from "@/public/icons/MuseumIcon";
import OfficeIcon from "@/public/icons/OfficeIcon";
import UserIcon from "@/public/icons/UserIcon";

export const places = [
  {
    icon: <OfficeIcon />,
    title: "Biura i urzędy",
    description:
      "Jako dekoracja lub podział przestrzeni, zachowując dostęp światła dziennego.",
  },
  {
    icon: <HospitalIcon />,
    title: "Szpitale i gabinety",
    description: `Na salach operacyjnych i${"\u00A0"}w${"\u00A0"}gabinetach lekarskich dla zachowania prywatności.`,
  },
  {
    icon: <HomeIcon />,
    title: "Mieszkania",
    description: `Na balkonach i${"\u00A0"}tarasach - popularne rozwiązanie zapewniające prywatność.`,
  },
  {
    icon: <BrushIcon />,
    title: "Salony piękności",
    description: `W strefach zabiegowych i${"\u00A0"}przebieralniach dla komfortu klientów.`,
  },
  {
    icon: <UserIcon />,
    title: "Pomieszczenia użytkowe",
    description: `W${"\u00A0"}toaletach, szatniach i${"\u00A0"}pomieszczeniach gospodarczych.`,
  },
  {
    icon: <MuseumIcon />,
    title: "Obiekty kulturalne",
    description: `W muzeach i${"\u00A0"}galeriach jako element wystawienniczy.`,
  },
];
