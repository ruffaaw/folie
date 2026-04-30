import type { Metadata } from "next";

export const SITE_URL = "https://dragonfolie.com";

export type SeoEntry = {
  title: string;
  description: string;
  path: string;
};

export const SEO_MAP: Record<string, SeoEntry> = {
  "/": {
    title:
      "Montaż folii okiennych Kraków - Dragon Folie | Folie na szyby",
    description:
      "Profesjonalny montaż folii okiennych w Krakowie i Małopolsce. Folie przeciwsłoneczne, dekoracyjne, matowe, anty-UV i antywłamaniowe z fachowym doradztwem.",
    path: "/",
  },
  "/oferta": {
    title: "Oferta folii okiennych i dekoracyjnych - Dragon Folie Kraków",
    description:
      "Sprawdź pełną ofertę Dragon Folie: folie przeciwsłoneczne, anty-UV, bezpieczne, antywłamaniowe, lustro weneckie, matowe i mrożone z montażem w Krakowie.",
    path: "/oferta",
  },
  "/oferta/folie-anty-uv": {
    title: "Folie anty-UV Kraków - ochrona przed promieniowaniem UV",
    description:
      "Folie anty-UV chronią wnętrza, meble i wyposażenie przed blaknięciem. Profesjonalny montaż folii UV w Krakowie, Małopolsce i na terenie całej Polski.",
    path: "/oferta/folie-anty-uv",
  },
  "/oferta/folie-przeciwsloneczne": {
    title: "Folie przeciwsłoneczne Kraków - redukcja nagrzewania pomieszczeń",
    description:
      "Folie przeciwsłoneczne na szyby ograniczają ciepło, olśnienie i koszty klimatyzacji. Skuteczny montaż folii przeciwsłonecznych dla domów i firm w Krakowie.",
    path: "/oferta/folie-przeciwsloneczne",
  },
  "/oferta/folie-przeciwsloneczne-na-swietliki-z-poliweglanu": {
    title:
      "Folie na świetliki z poliwęglanu - montaż i doradztwo | Dragon Folie",
    description:
      "Specjalistyczne folie na świetliki z poliwęglanu dla hal i magazynów. Ograniczenie temperatury, promieni UV i olśnienia przy zachowaniu światła dziennego.",
    path: "/oferta/folie-przeciwsloneczne-na-swietliki-z-poliweglanu",
  },
  "/oferta/folie-antywlamaniowe": {
    title: "Folie antywłamaniowe Kraków - wzmocnienie szyb i bezpieczeństwo",
    description:
      "Folie antywłamaniowe wzmacniają szyby i utrudniają wtargnięcie. Zwiększ bezpieczeństwo domu, biura lub lokalu dzięki profesjonalnemu montażowi w Krakowie.",
    path: "/oferta/folie-antywlamaniowe",
  },
  "/oferta/folie-bezpieczne": {
    title: "Folie bezpieczne na szyby Kraków - ochrona przed odłamkami",
    description:
      "Folie bezpieczne chronią przed rozpryskiem szkła i podnoszą bezpieczeństwo użytkowników. Montaż folii ochronnych dla domów, biur i obiektów usługowych.",
    path: "/oferta/folie-bezpieczne",
  },
  "/oferta/folie-lustro-weneckie": {
    title: "Folie lustro weneckie Kraków - prywatność w dzień",
    description:
      "Folie lustro weneckie zapewniają prywatność i nowoczesny wygląd przeszkleń. Profesjonalny montaż folii refleksyjnych w Krakowie i okolicach.",
    path: "/oferta/folie-lustro-weneckie",
  },
  "/oferta/folie-matowe": {
    title: "Folie matowe na szyby Kraków - prywatność i estetyka",
    description:
      "Folie matowe do biur, gabinetów i wnętrz mieszkalnych. Skuteczne przesłonięcie szyb bez utraty światła dziennego oraz precyzyjny montaż w Krakowie.",
    path: "/oferta/folie-matowe",
  },
  "/oferta/folie-mrozone": {
    title: "Folie mrożone Kraków - efekt mlecznej szyby i prywatność",
    description:
      "Folie mrożone to elegancki efekt szkła mlecznego i większa prywatność. Oklejanie szyb folią mrożoną w domach, biurach i lokalach usługowych.",
    path: "/oferta/folie-mrozone",
  },
  "/oferta/folie-dekoracyjne": {
    title: "Folie dekoracyjne Kraków - oklejanie mebli, drzwi i ram",
    description:
      "Profesjonalne folie dekoracyjne do mebli, drzwi i ram okiennych. Szybka metamorfoza wnętrz bez kosztownej wymiany elementów wyposażenia.",
    path: "/oferta/folie-dekoracyjne",
  },
  "/artykuly": {
    title: "Artykuły i poradniki o foliach okiennych - Dragon Folie",
    description:
      "Praktyczne poradniki o foliach okiennych: wybór folii, montaż, efekty i najczęstsze pytania. Wiedza ekspertów Dragon Folie dla domu i biznesu.",
    path: "/artykuly",
  },
  "/artykuly/faq-folie-dekoracyjne": {
    title: "FAQ: folie dekoracyjne, okleiny i laminaty - Dragon Folie",
    description:
      "Najczęściej zadawane pytania o folie dekoracyjne: trwałość, zastosowania, oklejanie mebli i drzwi oraz koszty wykonania.",
    path: "/artykuly/faq-folie-dekoracyjne",
  },
  "/artykuly/faq-folie-na-swietliki-z-poliweglanu": {
    title: "FAQ: folie na świetliki z poliwęglanu - Dragon Folie",
    description:
      "Odpowiedzi ekspertów na pytania o folie na świetliki z poliwęglanu: temperatura, UV, montaż i trwałość w obiektach przemysłowych.",
    path: "/artykuly/faq-folie-na-swietliki-z-poliweglanu",
  },
  "/artykuly/folia-mrozona-czy-matowa": {
    title: "Folia mrożona czy matowa - którą wybrać? Poradnik",
    description:
      "Porównanie folii mrożonej i matowej: różnice, zastosowania, poziom prywatności i rekomendacje do domu, biura oraz lokali usługowych.",
    path: "/artykuly/folia-mrozona-czy-matowa",
  },
  "/artykuly/folie-przeciwsloneczne-na-swietliki-z-poliweglanu-efekty-montazu": {
    title:
      "Folie na świetliki z poliwęglanu - efekty montażu i case study",
    description:
      "Zobacz konkretne efekty montażu folii na świetlikach z poliwęglanu: niższa temperatura, mniejsze olśnienie i poprawa komfortu pracy.",
    path: "/artykuly/folie-przeciwsloneczne-na-swietliki-z-poliweglanu-efekty-montazu",
  },
  "/kontakt": {
    title: "Kontakt - Dragon Folie | Wycena i doradztwo",
    description:
      "Skontaktuj się z Dragon Folie i otrzymaj wycenę montażu folii okiennych. Obsługujemy Kraków, Małopolskę oraz większe realizacje w całej Polsce.",
    path: "/kontakt",
  },
  "/montaz-i-wycena": {
    title: "Montaż i wycena folii okiennych - Dragon Folie",
    description:
      "Poznaj proces pomiaru, doboru i montażu folii okiennych. Szybka wycena oraz profesjonalna realizacja dla klientów indywidualnych i firm.",
    path: "/montaz-i-wycena",
  },
  "/nasze-realizacje": {
    title: "Nasze realizacje folii okiennych - Dragon Folie",
    description:
      "Galeria realizacji Dragon Folie: folie przeciwsłoneczne, dekoracyjne i ochronne. Zobacz efekty naszych montaży w domach i obiektach komercyjnych.",
    path: "/nasze-realizacje",
  },
  "/o-nas": {
    title: "O nas - Dragon Folie | Doświadczenie i jakość montażu",
    description:
      "Poznaj Dragon Folie: doświadczenie, standard pracy i podejście do klienta. Specjalizujemy się w montażu folii okiennych oraz oklejaniu powierzchni.",
    path: "/o-nas",
  },
  "/polityka-prywatnosci": {
    title: "Polityka prywatności - Dragon Folie",
    description:
      "Informacje o przetwarzaniu danych osobowych i zasadach prywatności w serwisie dragonfolie.com.",
    path: "/polityka-prywatnosci",
  },
};

export function buildMetadata(path: string): Metadata {
  const entry = SEO_MAP[path] ?? SEO_MAP["/"];
  const canonical = `${SITE_URL}${entry.path}`;

  return {
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: entry.path,
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: canonical,
      siteName: "Dragon Folie",
      locale: "pl_PL",
      type: "website",
      images: [
        {
          url: "/logo-szare.webp",
          alt: entry.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: ["/logo-szare.webp"],
    },
  };
}
