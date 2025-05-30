import {
  Thermometer,
  Home,
  Building,
  Snowflake,
  Shield,
  Droplets,
  Zap,
  Leaf,
  Clock,
} from "lucide-react";

export const features = [
  {
    icon: <Thermometer />,
    title: "Obniżenie temperatury",
    description: "Redukcja nagrzewania pomieszczeń",
  },
  {
    icon: <Zap />,
    title: "Oszczędność energii",
    description: "Znaczne zmniejszenie kosztów klimatyzacji",
  },
  {
    icon: <Shield />,
    title: "Ochrona UV",
    description: "Ochrona przed szkodliwymi promieniami UV",
  },
  {
    icon: <Leaf />,
    title: "Ochrona wnętrz",
    description: `Zapobiega blaknięciu mebli i${"\u00A0"}podłóg`,
  },
  {
    icon: <Droplets />,
    title: "Eliminacja refleksów",
    description: `Poprawa widoczności w${"\u00A0"}słoneczne dni`,
  },
  {
    icon: <Clock />,
    title: "Długotrwałość",
    description: `Żywotność 5-10 lat w${"\u00A0"}zależności od produktu`,
  },
];

export const places = [
  {
    icon: <Building />,
    title: "Nowoczesne biurowce",
    description:
      "Rozwiązanie problemu przegrzewania się przeszklonych powierzchni bez konieczności montażu żaluzji.",
  },
  {
    icon: <Home />,
    title: `Domy i${"\u00A0"}mieszkania`,
    description: `Ochrona przed nadmiernym nagrzewaniem pomieszczeń od strony południowej i${"\u00A0"}zachodniej.`,
  },
  {
    icon: <Snowflake />,
    title: "Zabytkowe budynki",
    description:
      "Efekt odświeżenia elewacji przy zachowaniu charakteru budynku.",
  },
  {
    icon: <Building />,
    title: "Obiekty handlowe",
    description: `Ochrona towarów przed blaknięciem i${"\u00A0"}zmniejszenie kosztów klimatyzacji.`,
  },
  {
    icon: <Home />,
    title: `Restauracje i${"\u00A0"}hotele`,
    description:
      "Zapewnienie komfortu termicznego gościom bez ograniczania widoku na zewnątrz.",
  },
  {
    icon: <Building />,
    title: `Szkoły i${"\u00A0"}przedszkola`,
    description: `Tworzenie komfortowych warunków do nauki i${"\u00A0"}zabawy w słoneczne dni.`,
  },
];
