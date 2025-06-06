import HomeIcon from "@/public/icons/HomeIcon";
import MuseumIcon from "@/public/icons/MuseumIcon";
import OfficeIcon from "@/public/icons/OfficeIcon";
import PillIcon from "@/public/icons/PillIcon";
import PrintingIcon from "@/public/icons/PrintingIcon";
import ShopIcon from "@/public/icons/ShopIcon";

export const negative = [
  {
    title: "Przedwczesne starzenie skóry",
    description: `Promienie UV niszczą kolagen, prowadząc do utraty elastyczności i${"\u00A0"}głębokich zmarszczek.`,
  },
  {
    title: `Przebarwienia i${"\u00A0"}plamy`,
    description: `Długotrwała ekspozycja powoduje nierównomierną pigmentację i${"\u00A0"}plamy posłoneczne.`,
  },
  {
    title: "Ryzyko nowotworów skóry",
    description: `Zwiększone prawdopodobieństwo czerniaka i${"\u00A0"}innych nowotworów skóry.`,
  },
  {
    title: "Oparzenia słoneczne",
    description: `Nawet przez szyby! UVB powoduje bolesne poparzenia i${"\u00A0"}uszkodzenia naskórka.`,
  },
  {
    title: "Osłabienie odporności",
    description:
      "UV hamuje aktywność komórek Langerhansa, osłabiając lokalną odporność skóry.",
  },
  {
    title: "Problemy ze wzrokiem",
    description: `Może prowadzić do zaćmy i${"\u00A0"}zwyrodnienia plamki żółtej przy długiej ekspozycji.`,
  },
];

export const places = [
  {
    icon: <MuseumIcon />,
    title: `Muzea i${"\u00A0"}biblioteki`,
    description: `Ochrona cennych eksponatów i${"\u00A0"}zbiorów przed żółknięciem i${"\u00A0"}degradacją spowodowaną promieniowaniem UV.`,
  },
  {
    icon: <ShopIcon />,
    title: `Sklepy z${"\u00A0"}odzieżą i${"\u00A0"}obuwiem`,
    description: `Zabezpieczenie witryn przed płowieniem produktów, zachowanie żywych kolorów wystawowej odzieży i${"\u00A0"}obuwia.`,
  },
  {
    icon: <HomeIcon />,
    title: `Mieszkania i${"\u00A0"}domy`,
    description: `Ochrona mebli, podłóg i${"\u00A0"}dzieł sztuki przed blaknięciem w${"\u00A0"}miejscach nasłonecznionych.`,
  },
  {
    icon: <PrintingIcon />,
    title: "Drukarnie",
    description:
      "Zabezpieczenie materiałów drukowanych szczególnie wrażliwych na działanie światła słonecznego.",
  },
  {
    icon: <PillIcon />,
    title: "Przemysł farmaceutyczny",
    description: `Ochrona leków i${"\u00A0"}substancji wrażliwych na światło, które mogą tracić właściwości pod wpływem UV.`,
  },
  {
    icon: <OfficeIcon />,
    title: `Biura i${"\u00A0"}przestrzenie biurowe`,
    description: `Zmniejszenie nagrzewania pomieszczeń i${"\u00A0"}ochrona pracowników przed szkodliwym promieniowaniem.`,
  },
];
