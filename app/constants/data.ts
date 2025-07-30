// Centralized data for the application

export interface MenuItem {
  menuItem: string;
  path: string;
  submenu?: SubMenuItem[];
}

export interface SubMenuItem {
  menuItem: string;
  path: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface VorteilItem {
  src: string;
  alt: string;
  title: string;
  textOne: string;
  textTwo: string;
}

export interface LogoItem {
  src: string;
  alt: string;
  href: string;
}

export interface ContentItem {
  src: string;
  alt: string;
  title: string;
  textOne: string;
  textTwo: string;
}

// Menu data
export const MENU_ITEMS: MenuItem[] = [
  { 
    menuItem: "Hotelausstattung", 
    path: "/hotelausstattung",
    submenu: [
      { menuItem: "Zimmer", path: "/hotelausstattung/zimmer" },
      { menuItem: "Bettwaren", path: "/hotelausstattung/bettwaren" }
    ]
  },
  { menuItem: "Service & Qualität", path: "/service-qualitaet" },
  { menuItem: "Über uns", path: "/ueber-uns" },
  { menuItem: "Kontakt", path: "/kontakt" },
];

// Vorteil data
export const VORTEIL_DATA: VorteilItem[] = [
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_erfahrung_720x720-1-500x500.jpg',
    alt: 'Vorteile Erfahrung',
    title: 'Erfahrung',
    textOne: 'Profitieren Sie bei der Ausstattung Ihres Hotelzimmers von 40 Jahren Erfahrung im Schlafbereich!',
    textTwo: 'allnatura ist Ihr Spezialist für qualitativ hochwertige Produkte rund ums Schlafen – auch Sonderanfertigungen sind für uns kein Problem.'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_nachhaltigkeit_500x500.jpg',
    alt: 'Vorteile Nachhaltigkeit',
    title: 'Nachhaltigkeit',
    textOne: 'allnatura bietet Ihnen hochwertige handwerklich hergestellte Produkte aus Deutschland oder dem benachbarten europäischen Ausland!',
    textTwo: 'Unsere Partner-Manufakturen fertigen Ihre neuen Möbel handwerklich und mit viel Liebe zum Detail.'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_auswahl_500x500.jpg',
    alt: 'Vorteile Auswahl',
    title: 'Auswahl',
    textOne: 'Richten Sie aus unserem Sortiment mit über 1.000 Produkten Ihre neuen Hotelzimmer ein – Ihre Gäste werden es lieben!',
    textTwo: 'Stellen Sie sich Ihre persönliche Individuallösung aus einem großen Gesamtsortiment selbst oder gerne auch mit unserer Hilfe zusammen.'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_qualitaet_500x500.jpg',
    alt: 'Vorteile Qualitaet',
    title: 'Qualität',
    textOne: 'Ökologische Qualität zu fairen Preisen!',
    textTwo: 'Wir legen höchsten Wert auf qualitativ hochwertige, nachhaltige Produktion. Die Ergebnisse unserer Schadstoffprüfungen sowie zahlreiche Testsiege stellen dies unter Beweis – überzeugen Sie sich selbst.'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_beratung_500x500.jpg',
    alt: 'Vorteile Beratung',
    title: 'Beratung',
    textOne: 'Ein starkes Team sorgt für das Wohlbefinden Ihrer Gäste!',
    textTwo: 'Wir lassen Sie mit Ihrer Zimmerplanung nicht alleine! Unsere Experten beraten Sie individuell und kompetent. Kontaktieren Sie uns. Wir sind gerne für Sie da.'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_faire_preise_500x500.jpg',
    alt: 'Vorteile Faire Preise',
    title: 'Faire Preise',
    textOne: 'Hohe Qualität zu fairen Preisen!',
    textTwo: 'Bei allnatura erhalten Sie neben der Best-Preis-Garantie auch attraktive Preisstaffeln und Mengenrabatte.'
  }
];

// Logo data
export const LOGO_DATA: LogoItem[] = [
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/Henriette-300x146.png',
    alt: 'Stadthotel Henriette Vienna',
    href: "https://www.hotelhenriette.at/",
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/Kranzegger_Berheimat_Logo-300x117.png',
    alt: 'Kranzegger_Berheimat',
    href: 'https://www.kranzegger.de/',
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/nordseemuehle_catharina-300x188.png',
    alt: 'nordseemühle_catharina',
    href: 'https://www.nordseemuehle-catharina.de/'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/birkelogo-300x185.jpg',
    alt: 'birkelogo',
    href: 'https://www.hotel-birke.de/'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/1552551048-300x166.png',
    alt: 'bio_hotels',
    href: '#'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/deutsche_umweltstiftung720x465-300x194.jpg',
    alt: 'deutsche_umweltstiftung',
    href: '#'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/stv-fst.jpeg',
    alt: 'stv-fst',
    href: 'https://www.stv-fst.ch/'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/veganresort-300x63.jpg',
    alt: 'veganresort',
    href: 'https://veganresort.de/'
  },
];

// Gallery data
export const GALLERY_HOTELZIMMER: GalleryItem[] = [
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M1_Det_02205_19-1024x576.jpg',
    alt: 'Einzelbett "Dormida"',
    caption: 'Einzelzimmer „Dormida"'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M2_Det_01_02216_19-1024x576.jpg',
    alt: 'Doppelbett "Dormida',
    caption: 'Doppelzimmer „Dormida"'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M2_Det_03_02218_19-1024x576.jpg',
    alt: 'Doppelbett "Verona"',
    caption: 'Doppelzimmer „Verona"'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M3_Bett_01_02186_19-1-1024x724.jpg',
    alt: 'Doppelbett "Svariata',
    caption: 'Suite „Svariata"'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M3_Bett_04_02189_19-1024x724.jpg',
    alt: 'Boxspringbett "Savalis-Comfort"',
    caption: 'Suite „Savalis"'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M3_Bett_05_02190_19-1024x724.jpg',
    alt: 'Doppelbett "Cubus"',
    caption: 'Suite „Cubus"'
  }
];

export const GALLERY_PRODUKTVielfalt: GalleryItem[] = [
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/sanastarComfort_mil02-1024x576.jpg',
    alt: 'sanastarComfort_mil02',
    caption: 'Öko-Naturmatratzen'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/kissen-1024x576.jpg',
    alt: 'kissen',
    caption: 'Kopfkissen aus natürlichen Rohstoffen'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/bettdecken-1024x576.webp',
    alt: 'bettdecken',
    caption: 'Bettdecken aus Naturfasern'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/base_-11352_base_big-1024x576.jpg',
    alt: 'base_-11352_base_big',
    caption: 'Handtücher aus 100% Bio-Baumwolle'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/bademantel-1024x576.webp',
    alt: 'bademantel',
    caption: 'Bademäntel aus 100% Baumwolle (kbA)'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/bettwaesche-1024x576.webp',
    alt: 'bettwäsche',
    caption: 'Bio-Bettwäsche aus 100% Bio-Baumwolle'
  }
]; 