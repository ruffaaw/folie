import { BookOpen, Brush, Building, Hospital, House, User } from "lucide-react";

export const places = [
  {
    icon: <Building />,
    title: "Biura i urzędy",
    description:
      "Jako dekoracja lub podział przestrzeni, zachowując dostęp światła dziennego.",
  },
  {
    icon: <Hospital />,
    title: "Szpitale i gabinety",
    description: `Na salach operacyjnych i${"\u00A0"}w${"\u00A0"}gabinetach lekarskich dla zachowania prywatności.`,
  },
  {
    icon: <House />,
    title: "Mieszkania",
    description: `Na balkonach i${"\u00A0"}tarasach - popularne rozwiązanie zapewniające prywatność.`,
  },
  {
    icon: <Brush />,
    title: "Salony piękności",
    description: `W strefach zabiegowych i${"\u00A0"}przebieralniach dla komfortu klientów.`,
  },
  {
    icon: <User />,
    title: "Pomieszczenia użytkowe",
    description: `W${"\u00A0"}toaletach, szatniach i${"\u00A0"}pomieszczeniach gospodarczych.`,
  },
  {
    icon: <BookOpen />,
    title: "Obiekty kulturalne",
    description: `W muzeach i${"\u00A0"}galeriach jako element wystawienniczy.`,
  },
];
