import type { Locale } from "./site";

type Difficulty = "easy" | "moderate" | "active";

type TourStop = {
  time: string;
  title: string;
  text: string;
};

type LocalTourContent = {
  title: string;
  tagline: string;
  region: string;
  summary: string;
  stops: TourStop[];
};

export type Tour = {
  slug: string;
  destinationSlug: string;
  category: "coast" | "culture" | "mountains" | "food";
  image: string;
  video: string;
  videoCredit: { name: string; url: string };
  duration: string;
  departure: string;
  distance: string;
  difficulty: Difficulty;
  coordinates: [number, number];
  price: number;
  originalPrice?: number;
  rating: number | null;
  reviewCount: number;
  reviewText: string[];
  newActivity?: boolean;
  languages: string[];
  maxGroup?: number;
  groupStyle: string;
  wheelchairAccessible?: boolean;
  privateGroupAvailable?: boolean;
  pickupCities: string[];
  pickupDetails: string;
  freeCancellation: string;
  hotelPickupIncluded: boolean;
  highlights: string[];
  inclusions: string[];
  notIncluded: string[];
  bring: string[];
  restrictions: string[];
  notAllowed: string[];
  notes: string[];
  optionalExtra?: string;
  content: Record<Locale, LocalTourContent>;
};

export const labelSets = {
  en: {
    difficulty: { easy: "Easy", moderate: "Moderate", active: "Active" },
    category: { coast: "Coast", culture: "Culture", mountains: "Mountains", food: "Food & nature" },
  },
  sq: {
    difficulty: { easy: "E lehtë", moderate: "Mesatare", active: "Aktive" },
    category: { coast: "Bregdet", culture: "Kulturë", mountains: "Male", food: "Ushqim & natyrë" },
  },
  de: {
    difficulty: { easy: "Leicht", moderate: "Mittel", active: "Aktiv" },
    category: { coast: "Küste", culture: "Kultur", mountains: "Berge", food: "Essen & Natur" },
  },
  fr: {
    difficulty: { easy: "Facile", moderate: "Modérée", active: "Active" },
    category: { coast: "Côte", culture: "Culture", mountains: "Montagnes", food: "Cuisine & nature" },
  },
} as const;

const freeCancellation = "Free cancellation up to 24 hours before the tour.";
const commonNotIncluded = ["Lunch", "Additional drinks and snacks", "Souvenirs", "Personal spending"];

function localize(
  en: LocalTourContent,
  translations: Record<Exclude<Locale, "en">, Omit<LocalTourContent, "stops">>,
): Record<Locale, LocalTourContent> {
  return {
    en,
    sq: { ...translations.sq, stops: en.stops },
    de: { ...translations.de, stops: en.stops },
    fr: { ...translations.fr, stops: en.stops },
  };
}

export const tours: Tour[] = [
  {
    slug: "from-tirana-or-durres-vineyard-tour-and-wine-tasting",
    destinationSlug: "durres",
    category: "food",
    image: "/vineyard.webp",
    video: "/video/vineyard.mp4",
    videoCredit: { name: "ROMAN ODINTSOV · Pexels", url: "https://www.pexels.com/video/drone-footage-of-a-vineyard-8191095/" },
    duration: "4–4.5 hours",
    departure: "Pickup confirmed",
    distance: "Tirana · Durrës · Golem",
    difficulty: "easy",
    coordinates: [19.5559, 41.3936],
    price: 69,
    originalPrice: 100,
    rating: null,
    reviewCount: 0,
    reviewText: [],
    languages: ["Albanian", "English"],
    maxGroup: 8,
    groupStyle: "Private or small group",
    wheelchairAccessible: true,
    privateGroupAvailable: true,
    pickupCities: ["Tirana", "Durrës", "Golem"],
    pickupDetails: "Hotel pickup and drop-off in Tirana, Durrës or Golem.",
    freeCancellation,
    hotelPickupIncluded: true,
    highlights: [
      "Small-group vineyard tour through Albania’s winemaking heritage",
      "Learn the process from a third-generation winemaker",
      "Taste wines paired with local cheese, bread and snacks",
      "Hotel pickup and drop-off included",
      "Explore the vineyard and wine cellar with a local guide",
    ],
    inclusions: ["Winery tour", "Wine tasting", "Local snacks", "Appetizer with meatballs, cheese and byrek", "Hotel pickup and drop-off"],
    notIncluded: commonNotIncluded,
    bring: ["Cash"],
    restrictions: [],
    notAllowed: ["Outside alcohol", "Drugs"],
    notes: [],
    content: localize(
      {
        title: "From Tirana or Durrës: Vineyard Tour and Wine Tasting",
        tagline: "Meet a third-generation winemaking family and taste Albania from vine to bottle.",
        region: "Tirana · Durrës · Kokomani Winery",
        summary: "Pickup from your hotel in Tirana or Durrës, then travel to a vineyard in the Albanian countryside overlooking the Adriatic hinterland. Meet a third-generation winemaking family and learn about Albanian winemaking dating back to the Bronze Age—more than 100 native grape varieties including Kallmet, Shesh i Zi, Shesh i Bardhë, Vlosh and Pula. Your host guides you through the cellar, vine to bottle, followed by a relaxed tasting of whites, reds and rosé paired with homemade cheese, pickled vegetables, hand-baked bread and seasonal snacks.",
        stops: [
          { time: "Pickup", title: "Hotel pickup", text: "Start from your confirmed hotel or meeting point in Tirana, Durrës or Golem." },
          { time: "50 min", title: "Countryside drive", text: "Travel through the Adriatic hinterland toward the vineyard." },
          { time: "2.5 h", title: "Kokomani Winery", text: "Guided vineyard and cellar visit, wine tasting, local pairings, scenic views and unhurried free time." },
          { time: "50 min", title: "Return and drop-off", text: "Relax on the drive back to your confirmed drop-off point." },
        ],
      },
      {
        sq: { title: "Nga Tirana ose Durrësi: Tur në vresht dhe degustim vere", tagline: "Takoni një familje verëtarësh të brezit të tretë dhe shijoni Shqipërinë nga hardhia në shishe.", region: "Tiranë · Durrës · Kantina Kokomani", summary: "Nisuni nga hoteli në Tiranë ose Durrës drejt një vreshti në fshatin shqiptar. Njihuni me traditën e lashtë të verës, vizitoni kantinën dhe provoni verëra të shoqëruara me djathë, bukë dhe ushqime vendase." },
        de: { title: "Ab Tirana oder Durrës: Weingut-Tour und Weinprobe", tagline: "Treffen Sie eine Winzerfamilie in dritter Generation und erleben Sie Albanien vom Rebstock bis zur Flasche.", region: "Tirana · Durrës · Weingut Kokomani", summary: "Die Abholung erfolgt am Hotel in Tirana oder Durrës. Auf dem familiengeführten Weingut lernen Sie Albaniens alte Weintradition kennen, besuchen Keller und Reben und verkosten Weiß-, Rot- und Roséweine mit lokalen Spezialitäten." },
        fr: { title: "Depuis Tirana ou Durrës : visite d’un vignoble et dégustation", tagline: "Rencontrez une famille de vignerons de troisième génération et découvrez l’Albanie de la vigne à la bouteille.", region: "Tirana · Durrës · Domaine Kokomani", summary: "Départ de votre hôtel à Tirana ou Durrës vers un vignoble de la campagne albanaise. Découvrez l’ancienne tradition viticole, visitez les vignes et la cave, puis dégustez blancs, rouges et rosés avec fromage, pain et produits locaux." },
      },
    ),
  },
  {
    slug: "from-tirana-durres-wine-tasting-cooking-class-and-goat-milking",
    destinationSlug: "berat",
    category: "food",
    image: "/farm.webp",
    video: "/video/farm.mp4",
    videoCredit: { name: "Kany Dajy · Pexels", url: "https://www.pexels.com/video/goats-in-the-farm-4066782/" },
    duration: "4.5–5 hours",
    departure: "Pickup confirmed",
    distance: "Tirana · Belsh · Hani i Qerosit",
    difficulty: "easy",
    coordinates: [19.8811, 40.975],
    price: 84,
    originalPrice: 90,
    rating: null,
    reviewCount: 0,
    reviewText: [],
    languages: ["Albanian", "English"],
    maxGroup: 8,
    groupStyle: "Small group",
    wheelchairAccessible: true,
    pickupCities: ["Tirana", "Durrës", "Golem"],
    pickupDetails: "Pickup in Tirana, Durrës or Golem; the exact point is confirmed after your reservation request.",
    freeCancellation,
    hotelPickupIncluded: true,
    highlights: [
      "Countryside escape from the city",
      "Choose a cooking class, goat milking or wine tasting",
      "Scenic drive through the central lowlands with a Lake Belshi stop",
      "Albanian culture and traditions from a local guide",
      "Round-trip transport from central Tirana",
    ],
    inclusions: ["Round-trip transport", "Welcome drink: homemade juice or raki", "20-minute coffee stop at Lake Belshi", "Your chosen activity, or all activities at once", "Local guide throughout"],
    notIncluded: [...commonNotIncluded, "Gratuities"],
    bring: ["Cash", "Comfortable clothes"],
    restrictions: [],
    notAllowed: [],
    notes: ["Choose the cooking class, goat milking, wine tasting or all activities when booking.", "Pickup point is confirmed after booking."],
    content: localize(
      {
        title: "From Tirana/Durres: Wine Tasting, Cooking Class & Goat Milking",
        tagline: "Choose your farm experience—or combine all three—at a family-run agritourism.",
        region: "Tirana · Belshi Lake · Hani i Qerosit",
        summary: "Travel south through the central lowlands with an optional coffee and photo stop at Lake Belshi. At Hani i Qerosit, choose one experience or enjoy all three: a hands-on Albanian cooking class making byrek, tavë kosi or tavë me perime; the farm’s daily goat-milking routine and an introduction to djathë i bardhë, kos and kaçkavall; or a tasting of Albanian wines from the Myzeqe plain and Berat region paired with artisan cheeses, olives and seasonal farm produce.",
        stops: [
          { time: "Pickup", title: "Confirmed pickup", text: "Meet your guide in Tirana, Durrës, Golem or Ali Demi." },
          { time: "1.5 h", title: "Drive through the central lowlands", text: "Leave the city for open countryside." },
          { time: "30 min", title: "Belshi Lake", text: "Optional coffee, comfort break and photos by the lake." },
          { time: "20 min", title: "Continue to the farm", text: "A short rural drive to Hani i Qerosit." },
          { time: "2.5 h", title: "Hani i Qerosit", text: "Chosen activity, wine, local snacks, a farm walk and free time." },
          { time: "1.5 h", title: "Return and drop-off", text: "Travel back to your confirmed city or hotel stop." },
        ],
      },
      {
        sq: { title: "Nga Tirana/Durrësi: Verë, gatim dhe mjelje dhish", tagline: "Zgjidhni përvojën në fermë—ose bashkojini të tria—në një agroturizëm familjar.", region: "Tiranë · Liqeni i Belshit · Hani i Qerosit", summary: "Udhëtoni nëpër ultësirën qendrore me një ndalesë opsionale në Liqenin e Belshit. Në Hani i Qerosit zgjidhni klasën e gatimit, mjeljen e dhive, degustimin e verës ose të tria bashkë." },
        de: { title: "Ab Tirana/Durrës: Weinprobe, Kochkurs & Ziegenmelken", tagline: "Wählen Sie Ihr Hoferlebnis—oder kombinieren Sie alle drei—auf einem Familienbetrieb.", region: "Tirana · Belsh-See · Hani i Qerosit", summary: "Fahren Sie durch das zentrale Tiefland mit optionaler Pause am Belsh-See. Auf dem Familienhof wählen Sie Kochkurs, Ziegenmelken, Weinprobe oder alle drei Erlebnisse zusammen." },
        fr: { title: "Depuis Tirana/Durrës : vin, cuisine et traite des chèvres", tagline: "Choisissez votre expérience à la ferme—ou combinez les trois—dans un agritourisme familial.", region: "Tirana · Lac de Belsh · Hani i Qerosit", summary: "Traversez les plaines centrales avec un arrêt facultatif au lac de Belsh. À Hani i Qerosit, choisissez le cours de cuisine, la traite des chèvres, la dégustation de vins ou les trois expériences." },
      },
    ),
  },
  {
    slug: "from-tirana-durres-golem-permet-canyon-and-thermal-baths",
    destinationSlug: "permet-vjosa",
    category: "mountains",
    image: "/permet-bridge.webp",
    video: "/video/vjosa.mp4",
    videoCredit: { name: "Mathijs Oggel · Pexels", url: "https://www.pexels.com/video/albania-drone-shots-15559203/" },
    duration: "8.5 hours",
    departure: "07:30 · 08:00 · 08:30",
    distance: "Përmet · Benja · Langarica",
    difficulty: "moderate",
    coordinates: [20.434, 40.244],
    price: 165,
    rating: null,
    reviewCount: 0,
    reviewText: [],
    languages: ["English"],
    maxGroup: 8,
    groupStyle: "Small group",
    pickupCities: ["Tirana", "Durrës", "Golem"],
    pickupDetails: "Tirana 07:30 · Durrës 08:00 · Golem 08:30.",
    freeCancellation,
    hotelPickupIncluded: true,
    highlights: ["Përmet Thermal Baths and Canyon", "Pickup from Tirana, Durrës or Golem", "Cultural heritage of Përmet city", "Swim in the Benja Natural Hot Baths year-round"],
    inclusions: ["Transport", "Professional tour leader", "Hotel pickup and drop-off", "Tourist taxes", "Car insurance", "Road taxes", "Petrol"],
    notIncluded: commonNotIncluded,
    bring: ["Comfortable shoes", "Camera", "Comfortable clothes", "Beachwear", "Cash"],
    restrictions: ["Not suitable for people with altitude sickness", "Not suitable for babies under 1", "Not suitable for people over 95"],
    notAllowed: ["Pets", "Alcohol", "Drugs"],
    notes: [],
    content: localize(
      {
        title: "From Tirana/Durres/Golem: Përmet, Canyon & Thermal Baths",
        tagline: "Follow the protected Vjosa to Përmet, mineral-rich hot baths and a river-cut canyon.",
        region: "Tepelenë · Përmet · Benja Thermal Baths",
        summary: "Pickup from your accommodation with coffee and restroom stops en route. Visit Tepelena Castle and the cold-water springs of Tepelenë, then follow the protected Vjosa River toward Përmet. Explore the town centre before swimming in the warm mineral-rich waters of the Benja Natural Hot Baths. Continue into the dramatic Langarica canyon landscape while your guide explains the region’s history, geology and ecology.",
        stops: [
          { time: "Pickup", title: "Hotel pickup", text: "Tirana at 07:30, Durrës at 08:00 or Golem at 08:30." },
          { time: "3.5 h", title: "Road south", text: "Coffee and comfort stops are arranged during the drive." },
          { time: "15 min", title: "Uji i Ftohtë, Tepelenë", text: "Pause beside the cold-water springs." },
          { time: "15 min", title: "Tepelena Castle", text: "Ancient fortress walls and panoramic valley views." },
          { time: "45 min", title: "Vjosa road", text: "Continue through the protected river landscape." },
          { time: "1 h", title: "Përmet", text: "Walk through the city centre and learn its cultural story." },
          { time: "2.5 h", title: "Benja thermal baths", text: "Swimming and time in the Langarica canyon landscape." },
          { time: "3.5 h", title: "Return and drop-off", text: "Comfort stops are arranged on the journey back." },
        ],
      },
      {
        sq: { title: "Nga Tirana/Durrësi/Golemi: Përmet, kanion dhe llixha", tagline: "Ndiqni Vjosën e mbrojtur drejt Përmetit, ujërave termale dhe kanionit.", region: "Tepelenë · Përmet · Llixhat e Bënjës", summary: "Vizitoni Kalanë e Tepelenës, ndiqni Vjosën drejt Përmetit dhe notoni në ujërat e ngrohta të Bënjës pranë Kanionit të Langaricës." },
        de: { title: "Ab Tirana/Durrës/Golem: Përmet, Canyon & Thermalbäder", tagline: "Folgen Sie der geschützten Vjosa nach Përmet, zu warmen Mineralquellen und einer Flussschlucht.", region: "Tepelenë · Përmet · Thermalbäder von Benja", summary: "Besuchen Sie die Burg von Tepelena, folgen Sie der Vjosa nach Përmet und baden Sie im warmen Mineralwasser von Benja an der Langarica-Schlucht." },
        fr: { title: "Depuis Tirana/Durrës/Golem : Përmet, canyon et thermes", tagline: "Suivez la Vjosa protégée vers Përmet, les bains minéraux et un canyon sculpté par la rivière.", region: "Tepelenë · Përmet · Thermes de Benja", summary: "Visitez la forteresse de Tepelena, suivez la Vjosa vers Përmet et baignez-vous dans les eaux minérales chaudes de Benja près du canyon de Langarica." },
      },
    ),
  },
  {
    slug: "from-tirana-durres-golem-kruja-castle-and-old-bazaar-tour",
    destinationSlug: "kruja-bovilla",
    category: "culture",
    image: "/kruja.webp",
    video: "/video/kruja.mp4",
    videoCredit: { name: "Sergey Guk · Pexels", url: "https://www.pexels.com/video/drone-view-of-traditional-albanian-architecture-29135772/" },
    duration: "6.5 hours",
    departure: "Pickup confirmed",
    distance: "Krujë Castle · Old Bazaar",
    difficulty: "moderate",
    coordinates: [19.7947, 41.509],
    price: 43,
    rating: null,
    reviewCount: 0,
    reviewText: [],
    languages: ["English"],
    maxGroup: 8,
    groupStyle: "Private group available",
    privateGroupAvailable: true,
    pickupCities: ["Tirana", "Durrës", "Golem"],
    pickupDetails: "Hotel pickup and drop-off in Tirana, Durrës or Golem.",
    freeCancellation,
    hotelPickupIncluded: true,
    highlights: ["Souvenirs and handcrafts by local artists at the Old Bazaar", "Kruja Castle, a symbol of Albanian resistance", "The history of Skanderbeg, Albania’s national hero"],
    inclusions: ["Skanderbeg Museum entry ticket", "Castle entry ticket", "Transportation", "Professional tour leader", "Hotel pickup and drop-off", "Tourist and road taxes", "Petrol"],
    notIncluded: commonNotIncluded,
    bring: ["Passport or ID card"],
    restrictions: ["Not suitable for people with recent surgeries"],
    notAllowed: ["Alcohol", "Drugs"],
    notes: [],
    content: localize(
      {
        title: "From Tirana/Durres/Golem: Kruja Castle & Old Bazaar Tour",
        tagline: "Walk the bazaar, castle walls and Skanderbeg story in Albania’s historic hill town.",
        region: "Krujë · Castle · Skanderbeg Museum · Old Bazaar",
        summary: "A guided day in Krujë covering the Old Bazaar, Kruja Castle and Skanderbeg Museum. Begin among centuries-old cobblestone lanes lined with traditional Albanian crafts, souvenirs and local delicacies. Continue to the fortress—an enduring symbol of resistance against Ottoman rule—then enter the museum to see artifacts, weaponry and historical documents connected to Skanderbeg’s life and military career.",
        stops: [
          { time: "Pickup", title: "Hotel pickup", text: "Start from Tirana, Durrës or Golem." },
          { time: "100 min", title: "Scenic drive", text: "Travel through hills and countryside toward Krujë." },
          { time: "105 min", title: "Krujë town", text: "Guided walk, shopping and sightseeing in the historic centre." },
          { time: "1 h", title: "Kruja Castle", text: "Explore ancient walls, towers and views over the plain." },
          { time: "1 h", title: "Skanderbeg Museum", text: "Artifacts, weaponry and documents on Albania’s national hero." },
          { time: "45 min", title: "Old Bazaar of Kruja", text: "Browse local handcrafts and traditional shops." },
          { time: "85 min", title: "Return and drop-off", text: "Travel back to your confirmed hotel or city stop." },
        ],
      },
      {
        sq: { title: "Nga Tirana/Durrësi/Golemi: Kalaja dhe Pazari i Krujës", tagline: "Ecni në pazarin, muret e kalasë dhe historinë e Skënderbeut në qytetin historik.", region: "Krujë · Kala · Muzeu i Skënderbeut · Pazari i Vjetër", summary: "Një ditë me guidë në Krujë: Pazari i Vjetër, Kalaja e Krujës dhe Muzeu i Skënderbeut, me zeje, histori dhe pamje mbi ultësirë." },
        de: { title: "Ab Tirana/Durrës/Golem: Burg Kruja & Alter Basar", tagline: "Entdecken Sie Basar, Burgmauern und die Geschichte Skanderbegs in Albaniens historischer Bergstadt.", region: "Krujë · Burg · Skanderbeg-Museum · Alter Basar", summary: "Eine geführte Tour durch den Alten Basar, die Burg von Kruja und das Skanderbeg-Museum mit Handwerk, Geschichte und weitem Blick über das Land." },
        fr: { title: "Depuis Tirana/Durrës/Golem : château et bazar de Krujë", tagline: "Parcourez le bazar, les remparts et l’histoire de Skanderbeg dans la ville historique.", region: "Krujë · Château · Musée Skanderbeg · Vieux bazar", summary: "Une journée guidée au vieux bazar, au château de Krujë et au musée Skanderbeg, entre artisanat, histoire et vues sur la plaine." },
      },
    ),
  },
  {
    slug: "from-tirana-durres-sarande-blue-eye-ksamil-lekursi-castle",
    destinationSlug: "gjirokaster-blue-eye",
    category: "coast",
    image: "/blue-eye.webp",
    video: "/video/blue-eye.mp4",
    videoCredit: { name: "Mathijs Oggel · Pexels", url: "https://www.pexels.com/video/albania-drone-shots-15559203/" },
    duration: "12–12.5 hours",
    departure: "07:00 · 08:00 · 08:30",
    distance: "Ksamil · Sarandë · Blue Eye",
    difficulty: "moderate",
    coordinates: [20.0087, 39.865],
    price: 168,
    rating: null,
    reviewCount: 0,
    reviewText: [],
    newActivity: true,
    languages: ["Albanian", "English"],
    maxGroup: 8,
    groupStyle: "Small group, limited to 8 participants",
    pickupCities: ["Tirana", "Durrës", "Golem"],
    pickupDetails: "Tirana 07:00 · Durrës 08:00 · Golem 08:30 · return in the evening.",
    freeCancellation,
    hotelPickupIncluded: true,
    highlights: ["Blue Eye Spring and its crystal-clear blue waters", "Ksamil Islands and a swim in turquoise water", "Lekuresi Castle with views over Saranda", "Round-trip transportation"],
    inclusions: ["Transport", "Professional tour leader", "Hotel pickup and drop-off", "Tourist taxes", "Car insurance", "Road taxes", "Petrol"],
    notIncluded: commonNotIncluded,
    bring: ["Comfortable shoes", "Sun protection", "Beachwear", "Cash"],
    restrictions: [],
    notAllowed: [],
    notes: ["Return to your pickup city is in the evening."],
    content: localize(
      {
        title: "From Tirana, Durres: Sarandë, Blue Eye, Ksamil, Lekursi Castle",
        tagline: "A full Riviera day of turquoise water, a forest spring and a castle above the Ionian.",
        region: "Ksamil · Sarandë · Blue Eye · Lekursi Castle",
        summary: "Travel along coastal roads past villages, olive groves and vineyards. Arrive at Ksamil for pristine beaches and turquoise water, then continue to Sarandë and its waterfront promenade of cafés, restaurants and shops. Head inland to the Blue Eye, a natural spring with striking blue and green depths. Finish at Lekursi Castle above Sarandë and the Ionian Sea for ruins, panoramic views and local history.",
        stops: [
          { time: "Pickup", title: "Morning departure", text: "Tirana 07:00, Durrës 08:00 or Golem 08:30." },
          { time: "Drive", title: "Albanian Riviera road", text: "Pass coastal villages, olive groves and vineyards." },
          { time: "Visit", title: "Ksamil", text: "Beach time and swimming in turquoise water." },
          { time: "Visit", title: "Sarandë", text: "Explore the lively waterfront promenade." },
          { time: "Visit", title: "Blue Eye Spring", text: "Walk through the forest to the spring’s vivid blue depths." },
          { time: "Visit", title: "Lekursi Castle", text: "Panoramic views over Sarandë and the Ionian Sea." },
          { time: "Evening", title: "Return and drop-off", text: "Travel back to your confirmed pickup city." },
        ],
      },
      {
        sq: { title: "Nga Tirana, Durrësi: Sarandë, Syri i Kaltër, Ksamil, Kalaja e Lëkurësit", tagline: "Një ditë në Rivierë me ujëra të kaltër, burim pyjor dhe kala mbi Jon.", region: "Ksamil · Sarandë · Syri i Kaltër · Kalaja e Lëkurësit", summary: "Udhëtoni përgjatë bregdetit drejt plazheve të Ksamilit, shëtitores së Sarandës, burimit të Syrit të Kaltër dhe pamjeve nga Kalaja e Lëkurësit." },
        de: { title: "Ab Tirana, Durrës: Sarandë, Blue Eye, Ksamil, Burg Lekursi", tagline: "Ein ganzer Riviera-Tag mit türkisfarbenem Wasser, Waldquelle und Burg über dem Ionischen Meer.", region: "Ksamil · Sarandë · Blue Eye · Burg Lekursi", summary: "Fahren Sie entlang der Küste zu den Stränden von Ksamil, der Promenade von Sarandë, der Quelle Blue Eye und dem Panoramablick von der Burg Lekursi." },
        fr: { title: "Depuis Tirana, Durrës : Sarandë, Œil Bleu, Ksamil, château de Lekursi", tagline: "Une journée complète sur la Riviera entre eau turquoise, source forestière et château au-dessus de l’Ionienne.", region: "Ksamil · Sarandë · Œil Bleu · Château de Lekursi", summary: "Suivez la côte vers les plages de Ksamil, la promenade de Sarandë, la source de l’Œil Bleu et les vues panoramiques depuis le château de Lekursi." },
      },
    ),
  },
  {
    slug: "from-tirana-durres-golem-berat-unesco-and-belshi-lake-tour",
    destinationSlug: "berat",
    category: "culture",
    image: "/berat.png",
    video: "/video/berat.mp4",
    videoCredit: { name: "Sergey Guk · Pexels", url: "https://www.pexels.com/video/drone-aerial-view-of-berat-albania-s-historic-landscape-28988218/" },
    duration: "6.5–7.5 hours",
    departure: "Pickup confirmed",
    distance: "Berat · Belshi Lake",
    difficulty: "moderate",
    coordinates: [19.9437, 40.7058],
    price: 50,
    rating: null,
    reviewCount: 0,
    reviewText: [],
    languages: ["Albanian", "English"],
    maxGroup: 8,
    groupStyle: "Private group available",
    privateGroupAvailable: true,
    pickupCities: ["Tirana", "Durrës", "Golem"],
    pickupDetails: "Hotel pickup and drop-off in Tirana, Durrës or Golem.",
    freeCancellation,
    hotelPickupIncluded: true,
    highlights: ["Albania’s most important UNESCO World Heritage site", "Berat’s history and architecture from your guide", "Walk Mangalem and Gorica", "Carved iconostasis at the Onufri Museum inside the castle", "Berat Castle, one of Albania’s largest inhabited castles"],
    inclusions: ["English-speaking guide", "Pickup and drop-off", "Transportation by car or van", "Castle entrance fee", "Petrol"],
    notIncluded: commonNotIncluded,
    bring: ["Comfortable shoes", "Sun protection", "Camera", "Cash"],
    restrictions: ["Not suitable for people over 95"],
    notAllowed: [],
    notes: [],
    content: localize(
      {
        title: "From Tirana/Durres/Golem: Berat (UNESCO) & Belshi Lake Tour",
        tagline: "Walk the city of a thousand windows, its lived-in castle and the quiet lake at Belsh.",
        region: "Berat · Mangalem · Gorica · Belshi Lake",
        summary: "Discover master painter Onufri’s work in Berat’s churches and visit Berat Castle, the Onufri Museum, Mangalem, Gorica and the Gorica Bridge. UNESCO protects Berat for its unique architecture. The castle is remarkable because families still live within its walls in traditional houses, as their ancestors did for centuries. End the day at Belsh, a small lakeside town on the road back.",
        stops: [
          { time: "Pickup", title: "Hotel pickup", text: "Start from Tirana, Durrës or Golem." },
          { time: "80 min", title: "Road to Berat", text: "Travel south toward Albania’s UNESCO city." },
          { time: "45 min", title: "Berat orientation", text: "Meet the city’s history, river and layered architecture." },
          { time: "10 min", title: "Gorica Bridge", text: "Cross the historic bridge over the Osumi River." },
          { time: "20 min", title: "Gorica quarter", text: "Walk the quieter old neighbourhood." },
          { time: "20 min", title: "Mangalem quarter", text: "See the famous white façades and stacked windows." },
          { time: "15 min", title: "Bachelors’ Mosque", text: "A compact stop in Berat’s historic centre." },
          { time: "1.5 h", title: "Berat Castle", text: "Explore the inhabited fortress and Onufri Museum." },
          { time: "45 min", title: "Belsh lake town", text: "Pause by the lake before your final drop-off." },
        ],
      },
      {
        sq: { title: "Nga Tirana/Durrësi/Golemi: Berat (UNESCO) dhe Liqeni i Belshit", tagline: "Ecni në qytetin e një mbi një dritareve, kalanë e banuar dhe liqenin e qetë të Belshit.", region: "Berat · Mangalem · Goricë · Liqeni i Belshit", summary: "Zbuloni Kalanë e Beratit, Muzeun Onufri, Mangalemin, Goricën dhe Urën e Goricës, pastaj ndaloni pranë liqenit në Belsh." },
        de: { title: "Ab Tirana/Durrës/Golem: Berat (UNESCO) & Belsh-See", tagline: "Gehen Sie durch die Stadt der tausend Fenster, ihre bewohnte Burg und zum ruhigen See von Belsh.", region: "Berat · Mangalem · Gorica · Belsh-See", summary: "Entdecken Sie die Burg von Berat, das Onufri-Museum, Mangalem, Gorica und die Gorica-Brücke, bevor Sie am See von Belsh pausieren." },
        fr: { title: "Depuis Tirana/Durrës/Golem : Berat (UNESCO) et lac de Belsh", tagline: "Parcourez la ville aux mille fenêtres, sa citadelle habitée et le lac paisible de Belsh.", region: "Berat · Mangalem · Gorica · Lac de Belsh", summary: "Découvrez la citadelle de Berat, le musée Onufri, Mangalem, Gorica et le pont de Gorica, puis faites une pause au bord du lac de Belsh." },
      },
    ),
  },
  {
    slug: "from-tirana-durres-golem-cape-of-rodon-and-wine-tasting-tour",
    destinationSlug: "durres",
    category: "coast",
    image: "/cape-rodon.webp",
    video: "/video/cape-rodon.mp4",
    videoCredit: { name: "Mathijs Oggel · Pexels", url: "https://www.pexels.com/video/albania-drone-shots-15559204/" },
    duration: "7.5 hours",
    departure: "08:30 · 09:00",
    distance: "Cape of Rodon · Duka Winery",
    difficulty: "active",
    coordinates: [19.4556, 41.5836],
    price: 68,
    originalPrice: 75,
    rating: null,
    reviewCount: 0,
    reviewText: [],
    languages: ["English"],
    maxGroup: 8,
    groupStyle: "Small group available",
    pickupCities: ["Tirana", "Durrës", "Golem"],
    pickupDetails: "Tirana 09:00 · Durrës and Golem 08:30.",
    freeCancellation,
    hotelPickupIncluded: true,
    highlights: ["Walk to Skanderbeg Castle at the Cape of Rodon and visit St. Anthony Church", "Scenic coastal journey with a swim at a public beach", "Spectacular Cape of Rodon coastal views", "Optional wine tasting at Duka Winery"],
    inclusions: ["Transport", "Professional tour leader", "Hotel pickup and drop-off", "Tourist taxes", "Road taxes", "Petrol"],
    notIncluded: [...commonNotIncluded, "Duka Winery lunch, guided tour and wine tasting"],
    bring: ["Sun hat", "Biodegradable sunscreen", "Comfortable clothes", "Beachwear", "Cash"],
    restrictions: ["Not suitable for babies under 1", "Not suitable for people over 95"],
    notAllowed: ["Alcohol", "Drugs"],
    notes: [],
    optionalExtra: "Duka Winery is optional and costs extra. Lunch, the guided winery tour and wine tasting are not included in the tour price and are paid separately at the winery.",
    content: localize(
      {
        title: "From Tirana/Durres/Golem: Cape of Rodon & Wine Tasting Tour",
        tagline: "Walk a wild Adriatic cape, swim below the cliffs and choose an optional winery visit.",
        region: "Cape of Rodon · St. Anthony Church · Duka Winery",
        summary: "Travel to the Cape of Rodon for dramatic cliffs, clear water and Rodon Castle, the medieval Skanderbeg fortress above the Adriatic. The return walk to the castle takes about 1.5 hours. Visit the Church of St. Anthony and enjoy around an hour of free time to swim. Afterwards, you may add an optional visit to Duka Winery for lunch, a guided tour and Albanian wine tasting—all paid separately at the winery.",
        stops: [
          { time: "Pickup", title: "Hotel pickup", text: "Tirana at 09:00; Durrës and Golem at 08:30." },
          { time: "100 min", title: "Adriatic road", text: "Drive through the coastal countryside." },
          { time: "15 min", title: "Cape approach", text: "Walk from the vehicle area toward the cape." },
          { time: "2 h 45", title: "Cape of Rodon", text: "Guided visit, swimming and the walk to Rodon/Skanderbeg Castle." },
          { time: "15 min", title: "Church of St. Anthony", text: "Visit the historic church near the coast." },
          { time: "45 min", title: "Drive to Duka Winery", text: "Continue only if you select the optional winery experience." },
          { time: "1 h 45", title: "Duka Winery — optional, extra fee", text: "Lunch, guided winery tour and wine tasting are not included and are paid separately." },
          { time: "105 min", title: "Return and drop-off", text: "Travel back to your confirmed hotel or city stop." },
        ],
      },
      {
        sq: { title: "Nga Tirana/Durrësi/Golemi: Kepi i Rodonit dhe degustim vere", tagline: "Ecni në kepin e egër të Adriatikut, notoni poshtë shkëmbinjve dhe zgjidhni një vizitë opsionale në kantinë.", region: "Kepi i Rodonit · Kisha e Shën Ndout · Kantina Duka", summary: "Zbuloni Kepin e Rodonit, Kalanë e Skënderbeut dhe Kishën e Shën Ndout. Vizita në Kantinën Duka është opsionale dhe paguhet veçmas." },
        de: { title: "Ab Tirana/Durrës/Golem: Kap Rodon & Weinprobe", tagline: "Wandern Sie am wilden Adriatischen Kap, baden Sie unter den Klippen und wählen Sie optional einen Weingutbesuch.", region: "Kap Rodon · Antoniuskirche · Weingut Duka", summary: "Entdecken Sie Kap Rodon, Skanderbegs Burg und die Antoniuskirche. Der Besuch im Weingut Duka ist optional und wird separat bezahlt." },
        fr: { title: "Depuis Tirana/Durrës/Golem : cap Rodon et dégustation", tagline: "Marchez sur un cap sauvage de l’Adriatique, baignez-vous sous les falaises et choisissez une visite facultative du domaine.", region: "Cap Rodon · Église Saint-Antoine · Domaine Duka", summary: "Découvrez le cap Rodon, le château de Skanderbeg et l’église Saint-Antoine. La visite du domaine Duka est facultative et payée séparément." },
      },
    ),
  },
  {
    slug: "from-tirana-explore-durres-museum-amphitheater-and-coastal",
    destinationSlug: "durres",
    category: "coast",
    image: "/durres.webp",
    video: "/video/durres.mp4",
    videoCredit: { name: "Sergey Guk · Pexels", url: "https://www.pexels.com/video/aerial-view-of-durres-albania-coastal-city-28988164/" },
    duration: "5.5 hours",
    departure: "09:00",
    distance: "Durrës Museum · Amphitheatre · Currila",
    difficulty: "easy",
    coordinates: [19.454, 41.313],
    price: 50,
    rating: null,
    reviewCount: 0,
    reviewText: [],
    languages: ["Albanian"],
    maxGroup: 8,
    groupStyle: "Small group",
    wheelchairAccessible: true,
    pickupCities: ["Tirana", "Durrës", "Golem"],
    pickupDetails: "Departure from Tirana, Durrës or Golem; the exact pickup time is confirmed after your reservation request.",
    freeCancellation,
    hotelPickupIncluded: true,
    highlights: ["National Archaeological Museum", "Durrës Amphitheater, one of the largest in the Balkans", "History of the Venetian Tower", "Adriatic Sea views from the seaside promenade"],
    inclusions: ["Museum ticket", "Transportation", "Professional tour leader", "The Durrës promenade", "The Venetian Tower", "Durrës Amphitheater visit", "Hotel pickup and drop-off", "Tourist and road taxes"],
    notIncluded: commonNotIncluded,
    bring: ["Sun hat", "Beachwear"],
    restrictions: [],
    notAllowed: [],
    notes: ["Free time is provided for lunch at a local restaurant; lunch is not included."],
    content: localize(
      {
        title: "From Tirana: Explore Durres Museum, Amphitheater & Coastal",
        tagline: "Meet Roman Durrës, its maritime museum story and an afternoon beside the Adriatic.",
        region: "Venetian Tower · Amphitheatre · Museum · Currila",
        summary: "Drive from Tirana to Albania’s oldest port city. Visit the Durrës Amphitheater, one of the largest and best-preserved Roman amphitheaters in the Balkans, the Venetian Tower and the National Archaeological Museum. Walk through the city centre and along the Adriatic promenade, with additional context on the Byzantine Forum and Durrës Castle. Finish with free time and swimming at Currila beach.",
        stops: [
          { time: "09:00", title: "Confirmed pickup", text: "Departure is available from Tirana, Durrës or Golem; your exact time is confirmed before the tour." },
          { time: "45 min", title: "Drive to Durrës", text: "Travel west to the Adriatic coast." },
          { time: "25 min", title: "Venetian Tower", text: "Learn about the city’s medieval fortifications." },
          { time: "10 min", title: "Walk through the old centre", text: "Continue on foot between the historic sites." },
          { time: "30 min", title: "Durrës Amphitheatre", text: "Explore one of the Balkans’ largest Roman amphitheatres." },
          { time: "10 min", title: "Museum walk", text: "Continue toward the waterfront collection." },
          { time: "45 min", title: "National Archaeological Museum", text: "Discover the city’s Greek, Roman and later cultural heritage." },
          { time: "15 min", title: "Drive to Currila", text: "Follow the seaside toward the beach." },
          { time: "105 min", title: "Currila beach", text: "Free time and swimming by the Adriatic." },
          { time: "1 h", title: "Return to Tirana", text: "Drop-off at your confirmed point." },
        ],
      },
      {
        sq: { title: "Nga Tirana: Muzeu, Amfiteatri dhe Bregdeti i Durrësit", tagline: "Zbuloni Durrësin romak, historinë detare dhe një pasdite pranë Adriatikut.", region: "Kulla Veneciane · Amfiteatri · Muzeu · Currila", summary: "Vizitoni Amfiteatrin e Durrësit, Kullën Veneciane dhe Muzeun Arkeologjik, ecni në shëtitore dhe përfundoni me kohë të lirë në plazhin e Currilave." },
        de: { title: "Ab Tirana: Museum, Amphitheater & Küste von Durrës", tagline: "Erleben Sie das römische Durrës, seine maritime Geschichte und einen Nachmittag an der Adria.", region: "Venezianischer Turm · Amphitheater · Museum · Currila", summary: "Besuchen Sie Amphitheater, Venezianischen Turm und Archäologisches Museum, spazieren Sie an der Promenade und genießen Sie freie Zeit am Strand von Currila." },
        fr: { title: "Depuis Tirana : musée, amphithéâtre et côte de Durrës", tagline: "Découvrez la Durrës romaine, son histoire maritime et un après-midi au bord de l’Adriatique.", region: "Tour vénitienne · Amphithéâtre · Musée · Currila", summary: "Visitez l’amphithéâtre, la tour vénitienne et le musée archéologique, marchez sur la promenade et terminez par du temps libre à la plage de Currila." },
      },
    ),
  },
  {
    slug: "from-tirana-and-shkoder-theth-and-blue-eye-full-day-tour",
    destinationSlug: "albanian-alps-theth",
    category: "mountains",
    image: "/theth.png",
    video: "/video/albanian-alps.mp4",
    videoCredit: { name: "Sergey Guk · Pexels", url: "https://www.pexels.com/video/aerial-view-of-the-albanian-alps-mountains-29136332/" },
    duration: "12 hours",
    departure: "06:00 · 07:30",
    distance: "Qafë Thorë · Theth · Blue Eye",
    difficulty: "active",
    coordinates: [19.7747, 42.395],
    price: 123,
    rating: null,
    reviewCount: 0,
    reviewText: [],
    languages: ["English"],
    maxGroup: 8,
    groupStyle: "Small group, limited to 8 participants",
    pickupCities: ["Tirana", "Durrës", "Golem"],
    pickupDetails: "Departure from Tirana, Durrës or Golem; the exact early-morning pickup time is confirmed after your reservation request.",
    freeCancellation,
    hotelPickupIncluded: true,
    highlights: ["The Albanian Alps, Theth and the Blue Eye in one day", "Theth’s Lock-in Tower and church", "Hike to the Blue Eye through mountain landscapes and forest trails", "Pickup from Tirana, Durrës or Golem"],
    inclusions: ["Hotel pickup and drop-off", "Professional tour guide", "Transport", "Tourist taxes, road taxes and petrol", "Theth National Park entry"],
    notIncluded: commonNotIncluded,
    bring: ["Hiking shoes", "Water", "Sun protection", "Light layer", "Camera", "Cash"],
    restrictions: ["The 6.2 km hike requires some hiking experience", "About 700 m of elevation gain", "Not suitable for travellers unable to complete an easy-to-moderate mountain hike"],
    notAllowed: [],
    notes: ["Blue Eye water is around 5°C.", "Tipping the guide and driver is recommended as standard practice."],
    content: localize(
      {
        title: "From Tirana and Shkoder: Theth & Blue Eye Full Day Tour",
        tagline: "Cross Qafë Thorë, meet Theth’s mountain heritage and hike to the glacial Blue Eye.",
        region: "Shkodër · Qafë Thorë · Theth · Blue Eye",
        summary: "Depart Tirana at 06:00 and drive north past fields, rivers, Shkodra Lake and mountains, changing to local transport in Shkodër around 07:30. Climb to Qafë Thorë at 1,700 m for a sweeping view of the Albanian Alps, then visit Theth’s Old Church and Lock-in Tower. Around midday, hike to the Blue Eye through mountain and forest scenery. The route is roughly 6.2 km round trip, about 700 m of elevation gain and around 1.5 hours each way. It is rated easy to moderate but requires some hiking experience; the water is around 5°C.",
        stops: [
          { time: "06:00", title: "Depart Tirana", text: "Drive north past fields, rivers, Shkodra Lake and mountain landscapes." },
          { time: "07:30", title: "Local transport from Shkodër", text: "Change to the vehicle suited to the mountain road." },
          { time: "2 h 20", title: "Mountain road", text: "Climb through increasingly rural northern Albania." },
          { time: "40 min", title: "Qafë Thorë viewpoint", text: "Pause at 1,700 m for a complete view of the Albanian Alps." },
          { time: "1 h", title: "Theth National Park", text: "Visit the Old Church and meet the valley landscape." },
          { time: "2.5 h", title: "Blue Eye hike", text: "A 6.2 km round trip with about 700 m of elevation gain; approximately 1.5 hours each way." },
          { time: "30 min", title: "Lock-in Tower", text: "Learn the cultural history behind Theth’s most recognised symbol." },
          { time: "2 h 20", title: "Return toward Shkodër", text: "Descend the mountain road." },
          { time: "20 min", title: "Shkodër County break", text: "A short comfort stop before the final drive." },
          { time: "105 min", title: "Return and drop-off", text: "Continue to your confirmed drop-off point." },
        ],
      },
      {
        sq: { title: "Nga Tirana dhe Shkodra: Theth dhe Syri i Kaltër", tagline: "Kaloni Qafën e Thorës, njihni trashëgiminë e Thethit dhe ecni drejt Syrit të Kaltër.", region: "Shkodër · Qafë Thorë · Theth · Syri i Kaltër", summary: "Nisuni herët drejt Qafës së Thorës dhe Thethit, vizitoni kishën dhe Kullën e Ngujimit, pastaj bëni ecjen 6.2 km vajtje-ardhje drejt Syrit të Kaltër." },
        de: { title: "Ab Tirana und Shkodër: Theth & Blue Eye Tagestour", tagline: "Überqueren Sie Qafë Thorë, entdecken Sie Theths Bergkultur und wandern Sie zum glazialen Blue Eye.", region: "Shkodër · Qafë Thorë · Theth · Blue Eye", summary: "Fahren Sie früh nach Qafë Thorë und Theth, besuchen Sie Kirche und Lock-in Tower und wandern Sie 6,2 km hin und zurück zum Blue Eye." },
        fr: { title: "Depuis Tirana et Shkodër : Theth et Œil Bleu", tagline: "Franchissez Qafë Thorë, découvrez le patrimoine montagnard de Theth et marchez jusqu’à l’Œil Bleu.", region: "Shkodër · Qafë Thorë · Theth · Œil Bleu", summary: "Partez tôt vers Qafë Thorë et Theth, visitez l’église et la tour d’isolement, puis effectuez la randonnée de 6,2 km aller-retour jusqu’à l’Œil Bleu." },
      },
    ),
  },
];

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function tourContent(tour: Tour, locale: Locale) {
  return tour.content[locale];
}

export function tourLabels(locale: Locale) {
  return labelSets[locale];
}

export function tourPickupCities(tour: Tour, locale: Locale) {
  return tour.pickupCities
    .map((city) => (locale === "sq" && city === "Tirana" ? "Tiranë" : city))
    .join(" / ");
}

export function tourGroupRange(locale: Locale, maximum = 8) {
  return {
    en: `Minimum 2 · Maximum ${maximum} people`,
    sq: `Minimumi 2 · Maksimumi ${maximum} persona`,
    de: `Mindestens 2 · Maximal ${maximum} Personen`,
    fr: `Minimum 2 · Maximum ${maximum} personnes`,
  }[locale];
}
