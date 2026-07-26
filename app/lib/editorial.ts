import type { Locale } from "./site";

type Highlight = {
  title: string;
  text: string;
};

type DestinationContent = {
  name: string;
  kicker: string;
  intro: string;
  story: string;
  bestTime: string;
  pace: string;
  localNote: string;
  highlights: Highlight[];
};

export type Destination = {
  slug: string;
  tourSlug: string;
  image: string;
  video: string;
  accent: "sea" | "clay" | "alpine" | "spring" | "gold" | "river" | "adriatic" | "lagoon" | "lake" | "valley";
  content: Record<Locale, DestinationContent>;
};

type GuideSection = {
  title: string;
  text: string;
};

type GuideContent = {
  title: string;
  kicker: string;
  intro: string;
  sections: GuideSection[];
};

export type TravelGuide = {
  slug: string;
  image: string;
  video: string;
  readTime: number;
  relatedDestinations: string[];
  content: Record<Locale, GuideContent>;
};

export const editorialUi = {
  en: {
    destinationsEyebrow: "Albania, place by place",
    destinationsTitle: "Ten landscapes. One remarkable small country.",
    destinationsIntro: "Choose the Albania that fits your pace—from Durrës and the Adriatic wetlands to Shkodër, Theth, Valbona, stone cities, wild rivers and the Ionian coast.",
    guideEyebrow: "Plan with local context",
    guideTitle: "The Albania travel guide",
    guideIntro: "Clear answers for the questions travellers ask before they book: when to come, what fits in a week and which day trips genuinely work from Tirana.",
    discover: "Discover the destination",
    fieldNotes: "Field notes",
    bestTime: "Best time",
    pace: "Pace",
    localNote: "A local note",
    highlights: "What makes it worth the road",
    matchingJourney: "The journey that takes you there",
    readGuide: "Read the guide",
    minutes: "min read",
    chapters: "In this guide",
    related: "Keep exploring",
    allDestinations: "All destinations",
    allGuides: "All travel guides",
    watch: "A moving postcard",
    videoCredit: "Film",
    playVideo: "Play video",
    pauseVideo: "Pause video",
  },
  sq: {
    destinationsEyebrow: "Shqipëria, vend pas vendi",
    destinationsTitle: "Dhjetë peizazhe. Një vend i vogël i jashtëzakonshëm.",
    destinationsIntro: "Zgjidhni Shqipërinë që i përshtatet ritmit tuaj—nga Durrësi dhe ligatinat e Adriatikut te Shkodra, Thethi, Valbona, qytetet e gurta, lumenjtë e egër dhe bregu Jon.",
    guideEyebrow: "Planifikoni me njohuri vendase",
    guideTitle: "Udhërrëfyesi i udhëtimit në Shqipëri",
    guideIntro: "Përgjigje të qarta për pyetjet para rezervimit: kur të vini, çfarë përfshihet në një javë dhe cilat udhëtime ditore funksionojnë vërtet nga Tirana.",
    discover: "Zbuloni destinacionin",
    fieldNotes: "Shënime nga terreni",
    bestTime: "Koha më e mirë",
    pace: "Ritmi",
    localNote: "Një këshillë vendase",
    highlights: "Pse ia vlen rruga",
    matchingJourney: "Udhëtimi që ju çon atje",
    readGuide: "Lexoni udhërrëfyesin",
    minutes: "min lexim",
    chapters: "Në këtë udhërrëfyes",
    related: "Vazhdoni të eksploroni",
    allDestinations: "Të gjitha destinacionet",
    allGuides: "Të gjithë udhërrëfyesit",
    watch: "Një kartolinë në lëvizje",
    videoCredit: "Film",
    playVideo: "Luaj videon",
    pauseVideo: "Ndalo videon",
  },
  de: {
    destinationsEyebrow: "Albanien, Ort für Ort",
    destinationsTitle: "Zehn Landschaften. Ein bemerkenswertes kleines Land.",
    destinationsIntro: "Finden Sie Ihr Albanien – von Durrës und den adriatischen Feuchtgebieten bis Shkodër, Theth, Valbona, Steinstädten, wilden Flüssen und ionischer Küste.",
    guideEyebrow: "Planen mit lokalem Kontext",
    guideTitle: "Der Albanien-Reiseführer",
    guideIntro: "Klare Antworten auf die Fragen vor der Buchung: wann reisen, was in eine Woche passt und welche Tagesausflüge ab Tirana wirklich funktionieren.",
    discover: "Reiseziel entdecken",
    fieldNotes: "Notizen vor Ort",
    bestTime: "Beste Reisezeit",
    pace: "Tempo",
    localNote: "Ein lokaler Hinweis",
    highlights: "Warum sich die Straße lohnt",
    matchingJourney: "Die passende Reise",
    readGuide: "Reiseführer lesen",
    minutes: "Min. Lesezeit",
    chapters: "In diesem Reiseführer",
    related: "Weiter entdecken",
    allDestinations: "Alle Reiseziele",
    allGuides: "Alle Reiseführer",
    watch: "Eine bewegte Postkarte",
    videoCredit: "Film",
    playVideo: "Video abspielen",
    pauseVideo: "Video pausieren",
  },
  fr: {
    destinationsEyebrow: "L’Albanie, lieu par lieu",
    destinationsTitle: "Dix paysages. Un petit pays remarquable.",
    destinationsIntro: "Choisissez votre Albanie : de Durrës et ses zones humides adriatiques à Shkodër, Theth, Valbona, aux villes de pierre, rivières sauvages et rivages ioniens.",
    guideEyebrow: "Planifier avec un regard local",
    guideTitle: "Le guide de voyage en Albanie",
    guideIntro: "Des réponses claires avant de réserver : quand venir, que faire en une semaine et quelles excursions fonctionnent vraiment depuis Tirana.",
    discover: "Découvrir la destination",
    fieldNotes: "Notes de terrain",
    bestTime: "Meilleure période",
    pace: "Rythme",
    localNote: "Un conseil local",
    highlights: "Pourquoi la route en vaut la peine",
    matchingJourney: "Le voyage qui vous y conduit",
    readGuide: "Lire le guide",
    minutes: "min de lecture",
    chapters: "Dans ce guide",
    related: "Continuer à explorer",
    allDestinations: "Toutes les destinations",
    allGuides: "Tous les guides",
    watch: "Une carte postale en mouvement",
    videoCredit: "Film",
    playVideo: "Lire la vidéo",
    pauseVideo: "Mettre la vidéo en pause",
  },
} as const;

export const destinations: Destination[] = [
  {
    slug: "albanian-riviera-himare",
    tourSlug: "from-tirana-durres-sarande-blue-eye-ksamil-lekursi-castle",
    image: "/albania-riviera.png",
    video: "/video/riviera.mp4",
    accent: "sea",
    content: {
      en: {
        name: "Albanian Riviera & Himarë",
        kicker: "Ionian light, cliff roads and unhurried coves",
        intro: "The road south of Llogara is one of Albania’s great reveals: mountain on one side, impossible blue on the other, and stone villages holding the slope between them.",
        story: "Himarë works best as a rhythm rather than a checklist. Begin above the sea, arrive before lunch, let the wind choose the swimming cove and leave enough time for Porto Palermo in late light.",
        bestTime: "May–June and September for warm water, open roads and gentler beach days.",
        pace: "A long, cinematic road day with easy walking and time to swim.",
        localNote: "The prettiest cove is not always the famous one. Conditions change daily, so local flexibility is part of the value.",
        highlights: [
          { title: "The Llogara reveal", text: "Pines give way to a full Ionian horizon in a single bend." },
          { title: "Himarë beyond the beach", text: "Old-town stone, family kitchens and a coast still connected to village life." },
          { title: "Porto Palermo light", text: "A compact fortress and sheltered bay at their best late in the afternoon." },
        ],
      },
      sq: {
        name: "Riviera Shqiptare & Himarë",
        kicker: "Dritë Joniane, rrugë mbi shkëmbinj dhe gjire pa nxitim",
        intro: "Rruga në jug të Llogarasë është një nga zbulimet më të bukura të Shqipërisë: mal në njërën anë, blu e pabesueshme në tjetrën dhe fshatra guri mes tyre.",
        story: "Himara shijohet më mirë si ritëm, jo si listë. Filloni mbi det, mbërrini para drekës, lëreni erën të zgjedhë gjirin dhe ruani kohë për Porto Palermon në dritën e vonë.",
        bestTime: "Maj–qershor dhe shtator për ujë të ngrohtë, rrugë më të lira dhe plazhe më të qeta.",
        pace: "Një ditë e gjatë panoramike me ecje të lehtë dhe kohë për not.",
        localNote: "Gjiri më i bukur nuk është gjithmonë më i famshmi. Kushtet ndryshojnë çdo ditë dhe fleksibiliteti vendas ka vlerë.",
        highlights: [
          { title: "Hapja e Llogarasë", text: "Pishat kthehen papritur në një horizont të plotë Jonian." },
          { title: "Himara përtej plazhit", text: "Gur, kuzhina familjare dhe një bregdet ende i lidhur me jetën e fshatit." },
          { title: "Drita e Porto Palermos", text: "Kala e vogël dhe gji i mbrojtur në orët e vona të pasdites." },
        ],
      },
      de: {
        name: "Albanische Riviera & Himarë",
        kicker: "Ionisches Licht, Küstenstraßen und stille Buchten",
        intro: "Südlich des Llogara-Passes zeigt sich Albanien plötzlich ganz: Berge auf der einen, unwirkliches Blau auf der anderen Seite und Steindörfer dazwischen.",
        story: "Himarë ist eher ein Rhythmus als eine Liste. Beginnen Sie über dem Meer, kommen Sie vor dem Mittagessen an, lassen Sie den Wind die Badebucht bestimmen und bewahren Sie Zeit für Porto Palermo im späten Licht.",
        bestTime: "Mai–Juni und September für warmes Wasser, freie Straßen und ruhigere Strände.",
        pace: "Ein langer, filmischer Straßentag mit leichten Wegen und Badezeit.",
        localNote: "Die schönste Bucht ist nicht immer die berühmteste. Die Bedingungen ändern sich täglich; lokale Flexibilität gehört zum Erlebnis.",
        highlights: [
          { title: "Der Llogara-Moment", text: "Hinter den Kiefern öffnet sich in einer Kurve der ganze ionische Horizont." },
          { title: "Himarë jenseits des Strands", text: "Altstadtgassen, Familienküchen und eine Küste mit Dorfleben." },
          { title: "Licht in Porto Palermo", text: "Kleine Festung und geschützte Bucht am späten Nachmittag." },
        ],
      },
      fr: {
        name: "Riviera albanaise & Himarë",
        kicker: "Lumière ionienne, routes en balcon et criques tranquilles",
        intro: "Au sud du col de Llogara, l’Albanie se révèle d’un seul coup : montagne d’un côté, bleu irréel de l’autre et villages de pierre suspendus entre les deux.",
        story: "Himarë est un rythme, pas une liste. Commencez au-dessus de la mer, arrivez avant le déjeuner, laissez le vent choisir la crique et gardez du temps pour Porto Palermo dans la lumière tardive.",
        bestTime: "Mai–juin et septembre pour l’eau chaude, les routes fluides et les plages plus douces.",
        pace: "Une longue journée de route très visuelle, avec marche facile et baignade.",
        localNote: "La plus belle crique n’est pas toujours la plus célèbre. Les conditions changent chaque jour : la souplesse locale fait partie du voyage.",
        highlights: [
          { title: "La révélation de Llogara", text: "Les pins s’ouvrent soudain sur tout l’horizon ionien." },
          { title: "Himarë au-delà de la plage", text: "Pierre, cuisines familiales et littoral encore lié à la vie du village." },
          { title: "La lumière de Porto Palermo", text: "Une forteresse compacte et une baie protégée en fin d’après-midi." },
        ],
      },
    },
  },
  {
    slug: "berat",
    tourSlug: "from-tirana-durres-golem-berat-unesco-and-belshi-lake-tour",
    image: "/berat.png",
    video: "/video/berat.mp4",
    accent: "clay",
    content: {
      en: {
        name: "Berat",
        kicker: "A living castle, a thousand windows and the slow table",
        intro: "Berat is not a museum set. Families still live inside its citadel, laundry crosses stone courtyards and the Osum separates two old neighbourhoods with distinct character.",
        story: "The city becomes richer when paired with its countryside. A morning among icons and fortress lanes makes more sense after olive oil, seasonal vegetables and a long table in nearby Roshnik.",
        bestTime: "March–June and September–November; midsummer is beautiful but hot on the castle hill.",
        pace: "Easy walking with stone steps, shaded pauses and a generous lunch.",
        localNote: "Cross the Gorica Bridge and look back. Berat’s famous windows make more sense from the opposite bank.",
        highlights: [
          { title: "A citadel still inhabited", text: "History remains part of ordinary life inside the walls." },
          { title: "Mangalem & Gorica", text: "Two old quarters facing each other across the Osum." },
          { title: "Roshnik’s seasonal table", text: "The countryside supplies the context that the city alone cannot." },
        ],
      },
      sq: {
        name: "Berat",
        kicker: "Kala e gjallë, një mijë dritare dhe tryeza e ngadaltë",
        intro: "Berati nuk është skenë muzeu. Familjet jetojnë ende brenda kalasë, oborret prej guri janë pjesë e përditshmërisë dhe Osumi ndan dy lagje me karakter të ndryshëm.",
        story: "Qyteti bëhet më i pasur kur lidhet me fshatin. Një mëngjes mes ikonave dhe rrugicave kuptohet më mirë pas vajit të ullirit, perimeve të stinës dhe një tryeze në Roshnik.",
        bestTime: "Mars–qershor dhe shtator–nëntor; vera është e bukur, por e nxehtë në kodrën e kalasë.",
        pace: "Ecje e lehtë me shkallë guri, pushime në hije dhe drekë të bollshme.",
        localNote: "Kaloni Urën e Goricës dhe shikoni mbrapa. Dritaret e famshme kuptohen më mirë nga bregu tjetër.",
        highlights: [
          { title: "Kala ende e banuar", text: "Historia vazhdon të jetë pjesë e jetës së zakonshme brenda mureve." },
          { title: "Mangalem & Goricë", text: "Dy lagje të vjetra përballë njëra-tjetrës mbi Osum." },
          { title: "Tryeza e Roshnikut", text: "Fshati jep kontekstin që qyteti i vetëm nuk mund ta japë." },
        ],
      },
      de: {
        name: "Berat",
        kicker: "Bewohnte Burg, tausend Fenster und der langsame Tisch",
        intro: "Berat ist keine Museumskulisse. Familien leben noch in der Zitadelle, Wäsche hängt über Steinhöfen und der Osum trennt zwei alte Viertel mit eigenem Charakter.",
        story: "Reicher wird die Stadt zusammen mit ihrem Umland. Ein Morgen zwischen Ikonen und Festungsgassen bekommt nach Olivenöl, Saisongemüse und einem langen Tisch in Roshnik seinen Zusammenhang.",
        bestTime: "März–Juni und September–November; der Hochsommer ist schön, aber heiß am Burghügel.",
        pace: "Leichte Wege mit Steinstufen, Schattenpausen und großzügigem Mittagessen.",
        localNote: "Überqueren Sie die Gorica-Brücke und blicken Sie zurück. Von dort versteht man die berühmten Fenster am besten.",
        highlights: [
          { title: "Eine bewohnte Zitadelle", text: "Geschichte ist innerhalb der Mauern Teil des Alltags." },
          { title: "Mangalem & Gorica", text: "Zwei alte Viertel blicken sich über den Osum hinweg an." },
          { title: "Der Tisch von Roshnik", text: "Das Land liefert den Kontext, den die Stadt allein nicht geben kann." },
        ],
      },
      fr: {
        name: "Berat",
        kicker: "Citadelle habitée, mille fenêtres et table lente",
        intro: "Berat n’est pas un décor de musée. Des familles vivent encore dans la citadelle, le linge traverse les cours de pierre et l’Osum sépare deux vieux quartiers au caractère distinct.",
        story: "La ville devient plus riche lorsqu’on la relie à sa campagne. Une matinée parmi les icônes et les ruelles prend tout son sens après l’huile d’olive, les légumes de saison et une longue table à Roshnik.",
        bestTime: "Mars–juin et septembre–novembre ; le plein été est beau mais chaud sur la colline.",
        pace: "Marche facile avec marches de pierre, pauses ombragées et déjeuner généreux.",
        localNote: "Traversez le pont de Gorica et retournez-vous. Les célèbres fenêtres se comprennent mieux depuis l’autre rive.",
        highlights: [
          { title: "Une citadelle toujours habitée", text: "L’histoire reste mêlée à la vie quotidienne dans les murs." },
          { title: "Mangalem & Gorica", text: "Deux quartiers anciens se font face de part et d’autre de l’Osum." },
          { title: "La table de Roshnik", text: "La campagne apporte le contexte que la ville seule ne peut donner." },
        ],
      },
    },
  },
  {
    slug: "albanian-alps-theth",
    tourSlug: "from-tirana-and-shkoder-theth-and-blue-eye-full-day-tour",
    image: "/theth.png",
    video: "/video/albanian-alps.mp4",
    accent: "alpine",
    content: {
      en: {
        name: "Albanian Alps & Theth",
        kicker: "Limestone peaks, guesthouse stories and clear mountain water",
        intro: "The road into Theth now moves faster than it once did, but the scale of the valley still slows everyone down. Peaks close around stone homes, small farms and paths shaped by weather.",
        story: "A good day here is not measured by kilometres walked. It is the sequence: Qafë Thore’s first view, coffee with a family, the church in the meadow and a route chosen for the day’s light and conditions.",
        bestTime: "Late May–October. Spring water is dramatic; September brings crisp views and quieter paths.",
        pace: "An early start, a winding mountain road and an adjustable active walk.",
        localNote: "Mountain weather can rewrite the plan. A strong local day keeps the experience and changes the route.",
        highlights: [
          { title: "Qafë Thore", text: "The valley appears below in one of northern Albania’s defining views." },
          { title: "Theth village", text: "Stone houses and a landmark church beneath vertical peaks." },
          { title: "Waterfall paths", text: "Clear water and routes selected around weather, season and group pace." },
        ],
      },
      sq: {
        name: "Alpet Shqiptare & Theth",
        kicker: "Maja gëlqerore, histori bujtinash dhe ujë i kthjellët mali",
        intro: "Rruga drejt Thethit sot është më e shpejtë, por përmasa e luginës ende e ngadalëson këdo. Majat rrethojnë shtëpi guri, ferma të vogla dhe shtigje të formuara nga moti.",
        story: "Një ditë e mirë këtu nuk matet me kilometra. Është radha e momenteve: pamja e Qafë Thores, kafe me një familje, kisha në livadh dhe një shteg i zgjedhur sipas dritës e kushteve.",
        bestTime: "Fundi i majit–tetor. Pranvera ka shumë ujë; shtatori sjell pamje të pastra dhe shtigje më të qeta.",
        pace: "Nisje e hershme, rrugë malore me kthesa dhe ecje aktive që përshtatet.",
        localNote: "Moti malor mund ta ndryshojë planin. Një ditë e mirë vendase ruan përvojën dhe ndryshon vetëm itinerarin.",
        highlights: [
          { title: "Qafë Thore", text: "Lugina shfaqet poshtë në një nga pamjet përcaktuese të veriut." },
          { title: "Fshati Theth", text: "Shtëpi guri dhe kisha e njohur nën maja vertikale." },
          { title: "Shtigjet e ujëvarës", text: "Ujë i pastër dhe rrugë të zgjedhura sipas motit e ritmit." },
        ],
      },
      de: {
        name: "Albanische Alpen & Theth",
        kicker: "Kalkgipfel, Gästehausgeschichten und klares Bergwasser",
        intro: "Die Straße nach Theth ist schneller geworden, doch die Größe des Tals bremst jeden. Gipfel schließen Steinhäuser, kleine Höfe und wettergeformte Wege ein.",
        story: "Ein guter Tag wird nicht in Kilometern gemessen. Entscheidend ist die Folge: der erste Blick vom Qafë Thore, Kaffee mit einer Familie, die Kirche in der Wiese und ein Weg passend zu Licht und Bedingungen.",
        bestTime: "Ende Mai–Oktober. Im Frühling viel Wasser; im September klare Sicht und ruhigere Wege.",
        pace: "Früher Start, kurvige Bergstraße und anpassbare aktive Wanderung.",
        localNote: "Bergwetter kann den Plan neu schreiben. Ein guter lokaler Tag bewahrt das Erlebnis und ändert die Route.",
        highlights: [
          { title: "Qafë Thore", text: "Das Tal liegt plötzlich unten – einer der großen Blicke Nordalbaniens." },
          { title: "Dorf Theth", text: "Steinhäuser und die bekannte Kirche unter senkrechten Gipfeln." },
          { title: "Wasserfallwege", text: "Klares Wasser und Wege nach Wetter, Saison und Gruppentempo." },
        ],
      },
      fr: {
        name: "Alpes albanaises & Theth",
        kicker: "Pics calcaires, récits de maisons d’hôtes et eau claire",
        intro: "La route vers Theth est plus rapide qu’autrefois, mais l’échelle de la vallée ralentit encore tout le monde. Les sommets entourent maisons de pierre, petites fermes et sentiers modelés par la météo.",
        story: "Une bonne journée ne se mesure pas en kilomètres. C’est la séquence : première vue de Qafë Thore, café avec une famille, église dans la prairie et parcours choisi selon la lumière et les conditions.",
        bestTime: "Fin mai–octobre. Beaucoup d’eau au printemps ; vues nettes et sentiers plus calmes en septembre.",
        pace: "Départ matinal, route sinueuse et marche active adaptable.",
        localNote: "La météo de montagne peut réécrire le programme. Une bonne journée locale garde l’expérience et change l’itinéraire.",
        highlights: [
          { title: "Qafë Thore", text: "La vallée apparaît en contrebas dans l’une des grandes vues du Nord." },
          { title: "Village de Theth", text: "Maisons de pierre et église emblématique sous les pics verticaux." },
          { title: "Sentiers de cascade", text: "Eau claire et parcours choisi selon météo, saison et rythme." },
        ],
      },
    },
  },
  {
    slug: "gjirokaster-blue-eye",
    tourSlug: "from-tirana-durres-sarande-blue-eye-ksamil-lekursi-castle",
    image: "/blue-eye.webp",
    video: "/video/blue-eye.mp4",
    accent: "spring",
    content: {
      en: {
        name: "Gjirokastër & the Blue Eye",
        kicker: "Slate roofs, fortress stories and a forest spring",
        intro: "Southern Albania places two completely different worlds on the same road: the steep stone geometry of Gjirokastër and the saturated colour of a spring rising beneath the forest.",
        story: "Arrive in the stone city before the midday heat, climb gradually through the bazaar and leave the afternoon for water and shade. The contrast is what makes the day memorable.",
        bestTime: "April–June and September–October. July and August need an earlier city start.",
        pace: "A long road day with moderate uphill walking and a gentler forest finish.",
        localNote: "Gjirokastër rewards looking up: carved doors, slate roofs and fortress walls reveal themselves above street level.",
        highlights: [
          { title: "The stone bazaar", text: "Steep lanes connect craft shops, old houses and mountain views." },
          { title: "Castle over the Drino", text: "A vast ridge-top fortress makes the geography immediately clear." },
          { title: "The Blue Eye", text: "Cold, intensely coloured water rises through a shaded forest basin." },
        ],
      },
      sq: {
        name: "Gjirokastër & Syri i Kaltër",
        kicker: "Çati guri, histori kalaje dhe një burim pyjor",
        intro: "Jugu vendos dy botë të ndryshme në të njëjtën rrugë: gjeometrinë e pjerrët të Gjirokastrës dhe ngjyrën e thellë të një burimi që ngrihet nën pyll.",
        story: "Mbërrini në qytetin e gurtë para vapës së mesditës, ngjituni ngadalë nëpër pazar dhe lëreni pasditen për ujë e hije. Kontrasti e bën ditën të paharrueshme.",
        bestTime: "Prill–qershor dhe shtator–tetor. Korriku e gushti kërkojnë nisje më të hershme në qytet.",
        pace: "Ditë e gjatë me ecje mesatare përpjetë dhe fund më të qetë në pyll.",
        localNote: "Gjirokastra shpërblen këdo që shikon lart: dyer të gdhendura, çati guri dhe mure kalaje mbi nivelin e rrugës.",
        highlights: [
          { title: "Pazari i gurtë", text: "Rrugicat lidhin zejtarë, shtëpi të vjetra dhe pamje mali." },
          { title: "Kalaja mbi Drino", text: "Fortesa mbi kreshtë e bën gjeografinë menjëherë të qartë." },
          { title: "Syri i Kaltër", text: "Ujë i ftohtë dhe me ngjyrë të thellë ngrihet mes pyllit." },
        ],
      },
      de: {
        name: "Gjirokastër & Blaues Auge",
        kicker: "Schieferdächer, Festungsgeschichten und eine Waldquelle",
        intro: "Südalbanien legt zwei Welten auf dieselbe Straße: die steile Steingeometrie von Gjirokastër und die satte Farbe einer Quelle unter dem Wald.",
        story: "Erreichen Sie die Steinstadt vor der Mittagshitze, steigen Sie langsam durch den Basar und bewahren Sie den Nachmittag für Wasser und Schatten. Der Kontrast macht den Tag.",
        bestTime: "April–Juni und September–Oktober. Im Juli und August früher in der Stadt beginnen.",
        pace: "Langer Straßentag mit moderaten Anstiegen und sanftem Ende im Wald.",
        localNote: "Gjirokastër belohnt den Blick nach oben: geschnitzte Türen, Schieferdächer und Festungsmauern liegen über Straßenniveau.",
        highlights: [
          { title: "Der Steinbasar", text: "Steile Gassen verbinden Handwerk, alte Häuser und Bergblicke." },
          { title: "Burg über dem Drino", text: "Die große Festung auf dem Grat erklärt sofort die Landschaft." },
          { title: "Das Blaue Auge", text: "Kaltes, intensiv gefärbtes Wasser steigt in einem Waldbecken auf." },
        ],
      },
      fr: {
        name: "Gjirokastër & l’Œil Bleu",
        kicker: "Toits de pierre, récits de forteresse et source forestière",
        intro: "Le Sud place deux mondes sur la même route : la géométrie minérale et raide de Gjirokastër puis la couleur saturée d’une source sous la forêt.",
        story: "Arrivez dans la ville de pierre avant la chaleur, montez progressivement dans le bazar et gardez l’après-midi pour l’eau et l’ombre. Le contraste rend la journée mémorable.",
        bestTime: "Avril–juin et septembre–octobre. Juillet et août demandent un départ plus matinal.",
        pace: "Longue journée de route, montée modérée puis fin plus douce en forêt.",
        localNote: "Gjirokastër récompense ceux qui lèvent les yeux : portes sculptées, toits de pierre et murs de forteresse au-dessus de la rue.",
        highlights: [
          { title: "Le bazar de pierre", text: "Ruelles raides, artisans, maisons anciennes et vues de montagne." },
          { title: "La citadelle sur le Drino", text: "Une vaste forteresse de crête explique immédiatement la géographie." },
          { title: "L’Œil Bleu", text: "Une eau froide, intensément colorée, jaillit dans un bassin forestier." },
        ],
      },
    },
  },
  {
    slug: "kruja-bovilla",
    tourSlug: "from-tirana-durres-golem-kruja-castle-and-old-bazaar-tour",
    image: "/mountain-road.webp",
    video: "/video/kruja.mp4",
    accent: "gold",
    content: {
      en: {
        name: "Krujë & Lake Bovilla",
        kicker: "National memory, living craft and Tirana’s mountain horizon",
        intro: "Krujë carries Albania’s best-known resistance story, while Bovilla reveals how quickly the capital gives way to rock, blue water and open air.",
        story: "This pairing works because it is compact but varied. Spend the morning with the bazaar and castle, then exchange stone lanes for a ridge view and a simple lunch above the reservoir.",
        bestTime: "Year-round; spring and autumn give the clearest hiking temperatures.",
        pace: "A shorter drive day with an optional moderate ridge climb.",
        localNote: "The old bazaar is most rewarding when you pause for the makers rather than treating it as a souvenir corridor.",
        highlights: [
          { title: "Krujë’s living bazaar", text: "Wood, textiles and metalwork continue beside the old castle road." },
          { title: "The Skanderbeg story", text: "A fortress setting for the history most Albanians know by heart." },
          { title: "Bovilla from above", text: "A short climb opens a surprisingly wild horizon close to Tirana." },
        ],
      },
      sq: {
        name: "Krujë & Liqeni i Bovillës",
        kicker: "Kujtesë kombëtare, zeje të gjalla dhe horizont malor",
        intro: "Kruja mban historinë më të njohur të qëndresës, ndërsa Bovilla tregon sa shpejt Tirana i lë vendin shkëmbit, ujit blu dhe ajrit të hapur.",
        story: "Ky kombinim funksionon sepse është i shkurtër, por i larmishëm. Mëngjesin kalojeni në pazar e kala, më pas ndërroni gurin me pamjen nga kreshta dhe drekën mbi liqen.",
        bestTime: "Gjatë gjithë vitit; pranvera dhe vjeshta kanë temperaturat më të mira për ecje.",
        pace: "Ditë me më pak rrugë dhe një ngjitje mesatare opsionale.",
        localNote: "Pazari i vjetër ka më shumë vlerë kur ndaloni te zejtarët, jo kur e kaloni vetëm si korridor suveniresh.",
        highlights: [
          { title: "Pazari i gjallë", text: "Druri, tekstilet dhe metali vazhdojnë pranë rrugës së kalasë." },
          { title: "Historia e Skënderbeut", text: "Kalaja vendos në vend historinë që shqiptarët njohin përmendësh." },
          { title: "Bovilla nga lart", text: "Një ngjitje e shkurtër hap horizont të egër pranë Tiranës." },
        ],
      },
      de: {
        name: "Krujë & Bovilla-See",
        kicker: "Nationale Erinnerung, lebendiges Handwerk und Berghorizont",
        intro: "Krujë trägt Albaniens bekannteste Widerstandsgeschichte; Bovilla zeigt, wie schnell Tirana Fels, blauem Wasser und offener Luft weicht.",
        story: "Die Kombination ist kompakt und abwechslungsreich. Am Morgen Basar und Burg, danach statt Steingassen ein Gratblick und ein einfaches Mittagessen über dem Stausee.",
        bestTime: "Ganzjährig; Frühling und Herbst bieten die angenehmsten Wandertemperaturen.",
        pace: "Kürzerer Fahrtag mit optionalem moderatem Gratweg.",
        localNote: "Der alte Basar lohnt sich bei den Handwerkern – nicht als schneller Souvenirkorridor.",
        highlights: [
          { title: "Lebendiger Basar", text: "Holz, Textilien und Metallhandwerk begleiten den alten Burgweg." },
          { title: "Die Skanderbeg-Geschichte", text: "Eine Festung für die Geschichte, die Albaner auswendig kennen." },
          { title: "Bovilla von oben", text: "Ein kurzer Aufstieg öffnet einen überraschend wilden Horizont." },
        ],
      },
      fr: {
        name: "Krujë & lac de Bovilla",
        kicker: "Mémoire nationale, artisanat vivant et horizon de montagne",
        intro: "Krujë porte le grand récit de la résistance albanaise ; Bovilla montre à quelle vitesse Tirana cède la place à la roche, à l’eau bleue et au grand air.",
        story: "L’association fonctionne car elle est compacte et variée. Bazar et citadelle le matin, puis une crête, un déjeuner simple et la vue sur le réservoir.",
        bestTime: "Toute l’année ; printemps et automne offrent les meilleures températures de marche.",
        pace: "Journée de route plus courte avec montée modérée facultative.",
        localNote: "Le vieux bazar est plus intéressant lorsqu’on s’arrête auprès des artisans plutôt que de le traverser comme un couloir de souvenirs.",
        highlights: [
          { title: "Le bazar vivant", text: "Bois, textiles et métal continuent le long de l’ancienne route du château." },
          { title: "Le récit de Skanderbeg", text: "Une forteresse pour l’histoire que les Albanais connaissent par cœur." },
          { title: "Bovilla vu d’en haut", text: "Une courte montée révèle un horizon sauvage tout près de Tirana." },
        ],
      },
    },
  },
  {
    slug: "permet-vjosa",
    tourSlug: "from-tirana-durres-golem-permet-canyon-and-thermal-baths",
    image: "/permet-bridge.webp",
    video: "/video/vjosa.mp4",
    accent: "river",
    content: {
      en: {
        name: "Përmet & the Vjosa",
        kicker: "Wild river, thermal water and Albania’s generous kitchen",
        intro: "Përmet sits in a greener, quieter Albania where the road follows the Vjosa, herbs dry in family kitchens and warm water gathers beside a stone bridge.",
        story: "The distance from Tirana is real, but so is the reward. The day moves between river landscape, the Bënjë bridge, thermal pools and a table built around gliko, cheese and mountain herbs.",
        bestTime: "April–June and September–October. Cooler months make the thermal water especially satisfying.",
        pace: "A long drive with easy walking, bathing time and a slow food finish.",
        localNote: "Bring water shoes. The natural pools and river stones are beautiful, uneven and much easier with the right footwear.",
        highlights: [
          { title: "The Vjosa landscape", text: "One of Europe’s great free-flowing river systems shapes the whole road." },
          { title: "Bënjë bridge & pools", text: "Stone arches, canyon walls and warm water in the same frame." },
          { title: "Përmet’s kitchen", text: "Gliko, herbs, cheese and hospitality define the town as much as scenery." },
        ],
      },
      sq: {
        name: "Përmet & Vjosë",
        kicker: "Lumë i egër, ujëra termale dhe kuzhinë bujare",
        intro: "Përmeti ndodhet në një Shqipëri më të gjelbër e më të qetë, ku rruga ndjek Vjosën, erëzat thahen në kuzhina familjare dhe uji i ngrohtë mblidhet pranë një ure guri.",
        story: "Distanca nga Tirana është e gjatë, por edhe shpërblimi. Dita kalon mes lumit, Urës së Bënjës, ujërave termale dhe tryezës me gliko, djathë e erëza mali.",
        bestTime: "Prill–qershor dhe shtator–tetor. Në muajt e freskët ujërat termale shijohen edhe më shumë.",
        pace: "Rrugë e gjatë me ecje të lehtë, kohë për banjë dhe fund gastronomik.",
        localNote: "Merrni këpucë uji. Gurët e lumit janë të bukur dhe të pabarabartë; pajisja e duhur e bën përvojën më të lehtë.",
        highlights: [
          { title: "Peizazhi i Vjosës", text: "Një nga sistemet e fundit lumore të egra të Evropës formon gjithë rrugën." },
          { title: "Ura e Bënjës & ujërat", text: "Harqe guri, mure kanioni dhe ujë i ngrohtë në të njëjtën pamje." },
          { title: "Kuzhina e Përmetit", text: "Gliko, erëza, djathë dhe mikpritje po aq sa peizazhi." },
        ],
      },
      de: {
        name: "Përmet & Vjosa",
        kicker: "Wilder Fluss, Thermalwasser und großzügige Küche",
        intro: "Përmet liegt in einem grüneren, ruhigeren Albanien. Die Straße folgt der Vjosa, Kräuter trocknen in Familienküchen und warmes Wasser sammelt sich neben einer Steinbrücke.",
        story: "Die Entfernung von Tirana ist lang, die Belohnung ebenso. Der Tag verbindet Flusslandschaft, Bënjë-Brücke, Thermalbecken und einen Tisch mit Gliko, Käse und Bergkräutern.",
        bestTime: "April–Juni und September–Oktober. In kühleren Monaten ist das Thermalwasser besonders angenehm.",
        pace: "Lange Fahrt mit leichten Wegen, Badezeit und langsamem kulinarischem Ende.",
        localNote: "Wasserschuhe mitnehmen. Die Flusssteine sind schön und uneben; passendes Schuhwerk erleichtert alles.",
        highlights: [
          { title: "Die Vjosa-Landschaft", text: "Eines der großen frei fließenden Flusssysteme Europas prägt die Route." },
          { title: "Bënjë-Brücke & Becken", text: "Steinbögen, Canyonwände und warmes Wasser in einem Bild." },
          { title: "Përmets Küche", text: "Gliko, Kräuter, Käse und Gastfreundschaft definieren den Ort." },
        ],
      },
      fr: {
        name: "Përmet & la Vjosa",
        kicker: "Rivière sauvage, eau thermale et cuisine généreuse",
        intro: "Përmet se trouve dans une Albanie plus verte et plus calme, où la route suit la Vjosa, les herbes sèchent dans les cuisines familiales et l’eau chaude se rassemble près d’un pont de pierre.",
        story: "La distance depuis Tirana est réelle, la récompense aussi. La journée relie paysage fluvial, pont de Bënjë, bassins thermaux et table de gliko, fromage et herbes.",
        bestTime: "Avril–juin et septembre–octobre. Les mois frais rendent l’eau thermale particulièrement agréable.",
        pace: "Longue route avec marche facile, baignade et final gourmand.",
        localNote: "Prévoyez des chaussures d’eau. Les pierres de rivière sont belles et irrégulières ; le bon équipement change tout.",
        highlights: [
          { title: "Le paysage de la Vjosa", text: "L’un des grands systèmes fluviaux libres d’Europe façonne toute la route." },
          { title: "Pont de Bënjë & bassins", text: "Arches de pierre, canyon et eau chaude dans le même cadre." },
          { title: "La cuisine de Përmet", text: "Gliko, herbes, fromage et hospitalité définissent la ville." },
        ],
      },
    },
  },
  {
    slug: "durres",
    tourSlug: "from-tirana-explore-durres-museum-amphitheater-and-coastal",
    image: "/durres.webp",
    video: "/video/durres.mp4",
    accent: "adriatic",
    content: {
      en: {
        name: "Durrës",
        kicker: "Roman stone, Adriatic air and Albania’s oldest port city",
        intro: "Durrës has always faced outward. The amphitheatre, Venetian fortifications, busy port and wide promenade belong to different centuries, but all are tied to the same Adriatic horizon.",
        story: "The city is best read in layers. Begin beneath street level among Roman arches, resurface beside Venetian walls and finish with a seafood table where modern Durrës meets the water.",
        bestTime: "April–June and September–October for warm light, comfortable walking and a calmer shoreline.",
        pace: "An easy day with urban walking, a long lunch and optional beach time.",
        localNote: "Look beyond the resort strip. The old centre and port reveal a city that has connected Albania with the Mediterranean for more than two millennia.",
        highlights: [
          { title: "The amphitheatre below the city", text: "Ancient arches survive beneath ordinary streets and houses." },
          { title: "A shoreline that keeps moving", text: "Roman trade, Venetian defence and the modern port share one compact centre." },
          { title: "The Adriatic table", text: "Fresh fish and a slow lunch make the sea part of the story, not just the view." },
        ],
      },
      sq: {
        name: "Durrës",
        kicker: "Gur romak, ajër Adriatiku dhe qyteti-port më i vjetër i Shqipërisë",
        intro: "Durrësi ka parë gjithmonë nga jashtë. Amfiteatri, fortifikimet veneciane, porti i gjallë dhe shëtitorja i përkasin shekujve të ndryshëm, por lidhen me të njëjtin horizont Adriatik.",
        story: "Qyteti lexohet më mirë në shtresa. Filloni nën nivelin e rrugës mes harqeve romake, dilni pranë mureve veneciane dhe përfundoni në një tryezë peshku aty ku Durrësi modern takon ujin.",
        bestTime: "Prill–qershor dhe shtator–tetor për dritë të ngrohtë, ecje të rehatshme dhe breg më të qetë.",
        pace: "Ditë e lehtë me ecje urbane, drekë të gjatë dhe kohë opsionale në plazh.",
        localNote: "Shikoni përtej zonës së resorteve. Qendra e vjetër dhe porti tregojnë një qytet që e ka lidhur Shqipërinë me Mesdheun për më shumë se dy mijëvjeçarë.",
        highlights: [
          { title: "Amfiteatri nën qytet", text: "Harqet e lashta mbijetojnë poshtë rrugëve dhe shtëpive të zakonshme." },
          { title: "Bregu që ndryshon vazhdimisht", text: "Tregtia romake, mbrojtja veneciane dhe porti modern ndajnë një qendër kompakte." },
          { title: "Tryeza e Adriatikut", text: "Peshku i freskët dhe dreka e qetë e bëjnë detin pjesë të historisë." },
        ],
      },
      de: {
        name: "Durrës",
        kicker: "Römischer Stein, Adriakluft und Albaniens älteste Hafenstadt",
        intro: "Durrës blickt seit jeher nach außen. Amphitheater, venezianische Befestigung, geschäftiger Hafen und breite Promenade stammen aus verschiedenen Jahrhunderten und teilen doch denselben Horizont.",
        story: "Die Stadt liest man in Schichten. Beginnen Sie unter Straßenniveau zwischen römischen Bögen, tauchen Sie an venezianischen Mauern wieder auf und enden Sie an einem Fischtisch am Wasser.",
        bestTime: "April–Juni und September–Oktober für warmes Licht, angenehmes Gehen und eine ruhigere Küste.",
        pace: "Ein leichter Tag mit Stadtspaziergang, langem Mittagessen und optionaler Strandzeit.",
        localNote: "Schauen Sie über den Resortstreifen hinaus. Altstadt und Hafen zeigen eine Stadt, die Albanien seit mehr als zwei Jahrtausenden mit dem Mittelmeer verbindet.",
        highlights: [
          { title: "Das Amphitheater unter der Stadt", text: "Antike Bögen überleben unter ganz gewöhnlichen Straßen und Häusern." },
          { title: "Eine Küste in Bewegung", text: "Römischer Handel, venezianische Verteidigung und moderner Hafen liegen nah beieinander." },
          { title: "Der adriatische Tisch", text: "Frischer Fisch und ein langsames Mittagessen machen das Meer zum Teil der Geschichte." },
        ],
      },
      fr: {
        name: "Durrës",
        kicker: "Pierre romaine, air adriatique et plus ancienne ville portuaire d’Albanie",
        intro: "Durrës regarde le large depuis toujours. Amphithéâtre, fortifications vénitiennes, port actif et grande promenade appartiennent à des siècles différents mais au même horizon.",
        story: "La ville se lit par strates. Commencez sous la rue parmi les arches romaines, remontez près des murs vénitiens et terminez à une table marine au bord de l’eau.",
        bestTime: "Avril–juin et septembre–octobre pour une lumière chaude, une marche agréable et un littoral plus calme.",
        pace: "Journée facile avec marche urbaine, long déjeuner et plage facultative.",
        localNote: "Regardez au-delà de la bande balnéaire. Le vieux centre et le port racontent une ville qui relie l’Albanie à la Méditerranée depuis plus de deux millénaires.",
        highlights: [
          { title: "L’amphithéâtre sous la ville", text: "Des arches antiques subsistent sous les rues et maisons ordinaires." },
          { title: "Un littoral en mouvement", text: "Commerce romain, défense vénitienne et port moderne partagent un centre compact." },
          { title: "La table adriatique", text: "Poisson frais et déjeuner lent font de la mer une partie du récit." },
        ],
      },
    },
  },
  {
    slug: "lezhe-shengjin",
    tourSlug: "from-tirana-durres-golem-cape-of-rodon-and-wine-tasting-tour",
    image: "/lezhe.webp",
    video: "/video/lezhe.mp4",
    accent: "lagoon",
    content: {
      en: {
        name: "Lezhë & Shëngjin",
        kicker: "National memory, lagoon stillness and a northern Adriatic table",
        intro: "Lezhë compresses an extraordinary amount of Albania into a small landscape: an ancient hill, Skanderbeg’s political legacy, the Drin plain, protected wetlands and the sea at Shëngjin.",
        story: "Move from the castle’s wide view to the memorial at the heart of town, then follow the plain toward the lagoon. The day softens as history gives way to birdlife, salt air and fish from the northern coast.",
        bestTime: "April–June for green wetlands and birdlife; September–October for warm coast and gentler roads.",
        pace: "Easy walking with one hill, a relaxed lunch and unstructured coastal time.",
        localNote: "The lagoon is not empty land between city and beach. It is the ecological reason the landscape feels so open and different.",
        highlights: [
          { title: "Lezhë from the castle", text: "The Drin plain, mountains and coast become one readable landscape." },
          { title: "The city of the League", text: "National history is anchored here, where Albanian princes united in 1444." },
          { title: "Lagoon to Adriatic", text: "Wetland light, migratory birds and Shëngjin’s fishing tradition shape the afternoon." },
        ],
      },
      sq: {
        name: "Lezhë & Shëngjin",
        kicker: "Kujtesë kombëtare, qetësi lagune dhe tryezë e Adriatikut verior",
        intro: "Lezha përmbledh shumë Shqipëri në një peizazh të vogël: kodër antike, trashëgiminë politike të Skënderbeut, fushën e Drinit, ligatinat e mbrojtura dhe detin në Shëngjin.",
        story: "Lëvizni nga pamja e gjerë e kalasë te memoriali në zemër të qytetit, pastaj ndiqni fushën drejt lagunës. Dita qetësohet ndërsa historia ia lë vendin shpendëve, ajrit të kripur dhe peshkut të bregut verior.",
        bestTime: "Prill–qershor për ligatina të gjelbra e shpendë; shtator–tetor për breg të ngrohtë dhe rrugë më të qeta.",
        pace: "Ecje e lehtë me një kodër, drekë të qetë dhe kohë të lirë në breg.",
        localNote: "Laguna nuk është tokë bosh mes qytetit dhe plazhit. Ajo është arsyeja ekologjike që peizazhi ndihet kaq i hapur dhe i veçantë.",
        highlights: [
          { title: "Lezha nga kalaja", text: "Fusha e Drinit, malet dhe bregu bëhen një peizazh i lexueshëm." },
          { title: "Qyteti i Besëlidhjes", text: "Historia kombëtare rrënjoset këtu, ku princat shqiptarë u bashkuan më 1444." },
          { title: "Nga laguna në Adriatik", text: "Drita e ligatinave, shpendët shtegtarë dhe tradita e peshkimit formojnë pasditen." },
        ],
      },
      de: {
        name: "Lezhë & Shëngjin",
        kicker: "Nationale Erinnerung, stille Lagune und ein Tisch an der nördlichen Adria",
        intro: "Lezhë verdichtet erstaunlich viel Albanien: antiker Hügel, Skanderbegs politisches Erbe, Drin-Ebene, geschützte Feuchtgebiete und das Meer bei Shëngjin.",
        story: "Gehen Sie vom weiten Burgblick zur Gedenkstätte im Stadtzentrum und folgen Sie dann der Ebene zur Lagune. Geschichte weicht Vogelwelt, Salzluft und Fisch von der Nordküste.",
        bestTime: "April–Juni für grüne Feuchtgebiete und Vogelwelt; September–Oktober für warme Küste und ruhigere Straßen.",
        pace: "Leichte Wege mit einem Hügel, entspanntem Mittagessen und freier Küstenzeit.",
        localNote: "Die Lagune ist kein leeres Land zwischen Stadt und Strand. Sie ist der ökologische Grund, warum die Landschaft so offen und anders wirkt.",
        highlights: [
          { title: "Lezhë von der Burg", text: "Drin-Ebene, Berge und Küste werden zu einer lesbaren Landschaft." },
          { title: "Die Stadt der Liga", text: "Hier vereinigten sich 1444 albanische Fürsten – nationale Geschichte ist im Ort verankert." },
          { title: "Von der Lagune zur Adria", text: "Feuchtgebietslicht, Zugvögel und Shëngjins Fischereitradition prägen den Nachmittag." },
        ],
      },
      fr: {
        name: "Lezhë & Shëngjin",
        kicker: "Mémoire nationale, calme de lagune et table du nord de l’Adriatique",
        intro: "Lezhë concentre une Albanie étonnante : colline antique, héritage politique de Skanderbeg, plaine du Drin, zones humides protégées et mer à Shëngjin.",
        story: "Passez de la grande vue de la citadelle au mémorial au cœur de la ville, puis suivez la plaine vers la lagune. L’histoire cède la place aux oiseaux, à l’air salin et aux poissons de la côte nord.",
        bestTime: "Avril–juin pour les zones humides vertes et les oiseaux ; septembre–octobre pour la côte chaude et les routes plus douces.",
        pace: "Marche facile avec une colline, déjeuner détendu et temps libre sur le littoral.",
        localNote: "La lagune n’est pas un vide entre ville et plage. Elle explique écologiquement pourquoi le paysage paraît si ouvert et différent.",
        highlights: [
          { title: "Lezhë depuis la citadelle", text: "Plaine du Drin, montagnes et côte deviennent un seul paysage lisible." },
          { title: "La ville de la Ligue", text: "L’histoire nationale s’ancre ici, où les princes albanais s’unirent en 1444." },
          { title: "De la lagune à l’Adriatique", text: "Lumière des zones humides, oiseaux migrateurs et tradition de pêche façonnent l’après-midi." },
        ],
      },
    },
  },
  {
    slug: "shkoder",
    tourSlug: "from-tirana-and-shkoder-theth-and-blue-eye-full-day-tour",
    image: "/shkoder.webp",
    video: "/video/shkoder.mp4",
    accent: "lake",
    content: {
      en: {
        name: "Shkodër",
        kicker: "Castle legends, bicycle streets and the great lake of the north",
        intro: "Shkodër is Albania’s northern room: open, cultured and framed by water and mountains. Its streets carry Catholic, Muslim and secular histories without losing the easy confidence of a bicycle city.",
        story: "Rozafa gives the geography first—three rivers, the lake and the road into the Alps. The centre then brings the human scale: Marubi photographs, places of worship, cafés and the evening road to Shirokë.",
        bestTime: "April–June and September–October; summer works beautifully when the city walk starts early.",
        pace: "A balanced cultural day with a castle climb, flat city streets and a slow lake finish.",
        localNote: "Do not treat Shkodër only as a transfer point. A night here adds context to every journey into Theth or Valbona.",
        highlights: [
          { title: "Rozafa’s geography", text: "From one wall you can read the rivers, lake, plain and first mountains." },
          { title: "A northern cultural capital", text: "Marubi photography and shared religious architecture give the centre unusual depth." },
          { title: "Lake light at Shirokë", text: "The city exhales where cafés meet reeds, fishing boats and the Montenegro horizon." },
        ],
      },
      sq: {
        name: "Shkodër",
        kicker: "Legjenda kalaje, rrugë biçikletash dhe liqeni i madh i veriut",
        intro: "Shkodra është dhoma veriore e Shqipërisë: e hapur, kulturore dhe e rrethuar nga uji e malet. Rrugët e saj mbajnë histori katolike, myslimane e laike pa humbur qetësinë e një qyteti biçikletash.",
        story: "Rozafa jep së pari gjeografinë—tri lumenj, liqenin dhe rrugën drejt Alpeve. Qendra sjell shkallën njerëzore: fotografitë Marubi, objektet e kultit, kafenetë dhe rrugën e mbrëmjes drejt Shirokës.",
        bestTime: "Prill–qershor dhe shtator–tetor; vera është e bukur kur ecja në qytet nis herët.",
        pace: "Ditë kulturore e balancuar me ngjitje në kala, rrugë të sheshta dhe fund të qetë pranë liqenit.",
        localNote: "Mos e trajtoni Shkodrën vetëm si pikë transferimi. Një natë këtu i jep kontekst çdo udhëtimi drejt Thethit ose Valbonës.",
        highlights: [
          { title: "Gjeografia e Rozafës", text: "Nga një mur lexoni lumenjtë, liqenin, fushën dhe malet e para." },
          { title: "Kryeqytet kulturor i veriut", text: "Fotografia Marubi dhe arkitektura fetare i japin qendrës thellësi të veçantë." },
          { title: "Drita e liqenit në Shirokë", text: "Qyteti merr frymë aty ku kafenetë takojnë kallamat, varkat dhe horizontin e Malit të Zi." },
        ],
      },
      de: {
        name: "Shkodër",
        kicker: "Burglegenden, Fahrradstraßen und der große See des Nordens",
        intro: "Shkodër ist Albaniens nördliches Zimmer: offen, kultiviert und von Wasser und Bergen gerahmt. Katholische, muslimische und weltliche Geschichte lebt in einer entspannten Fahrradstadt zusammen.",
        story: "Rozafa erklärt zuerst die Geografie – drei Flüsse, See und Alpenstraße. Das Zentrum bringt menschlichen Maßstab: Marubi-Fotografie, Gotteshäuser, Cafés und die Abendroute nach Shirokë.",
        bestTime: "April–Juni und September–Oktober; im Sommer beginnt der Stadtspaziergang am besten früh.",
        pace: "Ausgewogener Kulturtag mit Burganstieg, flachen Stadtstraßen und ruhigem See-Finale.",
        localNote: "Shkodër ist nicht nur Umsteigeort. Eine Nacht hier gibt jeder Reise nach Theth oder Valbona mehr Kontext.",
        highlights: [
          { title: "Rozafas Geografie", text: "Von einer Mauer lassen sich Flüsse, See, Ebene und erste Berge lesen." },
          { title: "Kulturhauptstadt des Nordens", text: "Marubi-Fotografie und gemeinsame religiöse Architektur geben dem Zentrum Tiefe." },
          { title: "Seelicht in Shirokë", text: "Die Stadt atmet dort aus, wo Cafés auf Schilf, Fischerboote und Montenegro treffen." },
        ],
      },
      fr: {
        name: "Shkodër",
        kicker: "Légendes de citadelle, rues à vélo et grand lac du Nord",
        intro: "Shkodër est la pièce nord de l’Albanie : ouverte, cultivée et encadrée par l’eau et les montagnes. Histoires catholique, musulmane et laïque cohabitent dans une ville de bicyclettes.",
        story: "Rozafa donne d’abord la géographie—trois rivières, le lac et la route des Alpes. Le centre retrouve l’échelle humaine : photographies Marubi, lieux de culte, cafés et route du soir vers Shirokë.",
        bestTime: "Avril–juin et septembre–octobre ; en été, commencez tôt la marche en ville.",
        pace: "Journée culturelle équilibrée avec montée à la citadelle, rues plates et fin lente au lac.",
        localNote: "Ne réduisez pas Shkodër à un transfert. Une nuit ici donne du contexte à toute route vers Theth ou Valbona.",
        highlights: [
          { title: "La géographie de Rozafa", text: "Depuis un seul mur, on lit rivières, lac, plaine et premières montagnes." },
          { title: "Capitale culturelle du Nord", text: "Photographie Marubi et architecture religieuse partagée donnent au centre une profondeur rare." },
          { title: "Lumière du lac à Shirokë", text: "La ville expire là où cafés, roseaux, bateaux de pêche et horizon monténégrin se rencontrent." },
        ],
      },
    },
  },
  {
    slug: "valbona-valley",
    tourSlug: "from-tirana-and-shkoder-theth-and-blue-eye-full-day-tour",
    image: "/valbona.webp",
    video: "/video/valbona.mp4",
    accent: "valley",
    content: {
      en: {
        name: "Valbona Valley",
        kicker: "Limestone walls, glacial water and the deep quiet of the Alps",
        intro: "Valbona feels less like a destination than an entrance. The road narrows beneath pale peaks, the river moves through the forest and each village seems to borrow its scale from the mountains.",
        story: "The famous trail to Theth is only one way to understand the valley. A slower day around Rragam, the river and a family guesthouse reveals how northern hospitality and alpine geography belong together.",
        bestTime: "Late May–June and September–early October. High trails depend on snow and weather.",
        pace: "A very long road day from Tirana with active walking; best for travellers who value the journey.",
        localNote: "Valbona and Theth face opposite sides of the same mountain world. The road between them is long; the hiking pass is seasonal and must be planned separately.",
        highlights: [
          { title: "The valley walls", text: "Pale limestone rises so quickly that scale becomes the first experience." },
          { title: "Rragam beyond the road", text: "Meadows and footpaths carry the valley into quieter mountain country." },
          { title: "The guesthouse table", text: "Food, family stories and practical mountain knowledge make the landscape human." },
        ],
      },
      sq: {
        name: "Lugina e Valbonës",
        kicker: "Mure gëlqerore, ujë akullnajor dhe qetësia e thellë e Alpeve",
        intro: "Valbona ndihet më shumë si hyrje sesa destinacion. Rruga ngushtohet nën maja të zbehta, lumi lëviz mes pyllit dhe çdo fshat duket sikur e merr shkallën nga malet.",
        story: "Shtegu i famshëm drejt Thethit është vetëm një mënyrë për ta kuptuar luginën. Një ditë më e ngadaltë rreth Rragamit, lumit dhe një bujtine familjare tregon si lidhen mikpritja veriore dhe gjeografia alpine.",
        bestTime: "Fund maji–qershor dhe shtator–fillim tetori. Shtigjet e larta varen nga bora dhe moti.",
        pace: "Ditë shumë e gjatë nga Tirana me ecje aktive; më e mira për ata që vlerësojnë vetë udhëtimin.",
        localNote: "Valbona dhe Thethi shohin dy anë të së njëjtës botë malore. Rruga mes tyre është e gjatë; qafa e këmbësorëve është sezonale dhe planifikohet veçmas.",
        highlights: [
          { title: "Muret e luginës", text: "Gëlqerori i zbehtë ngrihet aq shpejt sa shkalla bëhet përvoja e parë." },
          { title: "Rragami përtej rrugës", text: "Livadhet dhe shtigjet e çojnë luginën drejt një mali më të qetë." },
          { title: "Tryeza e bujtinës", text: "Ushqimi, historitë familjare dhe njohuria praktike e bëjnë peizazhin njerëzor." },
        ],
      },
      de: {
        name: "Valbona-Tal",
        kicker: "Kalkwände, Gletscherwasser und tiefe Stille der Alpen",
        intro: "Valbona fühlt sich eher wie ein Eingang als ein Ziel an. Die Straße wird unter hellen Gipfeln schmal, der Fluss zieht durch den Wald und jedes Dorf übernimmt seinen Maßstab von den Bergen.",
        story: "Der berühmte Weg nach Theth ist nur eine Art, das Tal zu verstehen. Ein langsamer Tag bei Rragam, am Fluss und in einem Familiengästehaus zeigt, wie Nordgastfreundschaft und alpine Geografie zusammengehören.",
        bestTime: "Ende Mai–Juni und September–Anfang Oktober. Hohe Wege hängen von Schnee und Wetter ab.",
        pace: "Sehr langer Straßentag ab Tirana mit aktiver Wanderung; ideal für Menschen, die den Weg schätzen.",
        localNote: "Valbona und Theth liegen auf zwei Seiten derselben Bergwelt. Die Straßenverbindung ist lang; der Wanderpass ist saisonal und separat zu planen.",
        highlights: [
          { title: "Die Talwände", text: "Heller Kalk steigt so schnell an, dass Größe zur ersten Erfahrung wird." },
          { title: "Rragam jenseits der Straße", text: "Wiesen und Fußwege tragen das Tal in stilleres Bergland." },
          { title: "Der Gästehaus-Tisch", text: "Essen, Familiengeschichten und Bergwissen machen die Landschaft menschlich." },
        ],
      },
      fr: {
        name: "Vallée de Valbona",
        kicker: "Parois calcaires, eau glaciaire et grand silence des Alpes",
        intro: "Valbona ressemble moins à une destination qu’à une entrée. La route se resserre sous les sommets pâles, la rivière traverse la forêt et chaque village emprunte son échelle aux montagnes.",
        story: "Le célèbre sentier vers Theth n’est qu’une manière de comprendre la vallée. Une journée lente autour de Rragam, de la rivière et d’une maison d’hôtes relie hospitalité du Nord et géographie alpine.",
        bestTime: "Fin mai–juin et septembre–début octobre. Les sentiers d’altitude dépendent de la neige et de la météo.",
        pace: "Très longue journée depuis Tirana avec marche active, pour les voyageurs qui apprécient le trajet.",
        localNote: "Valbona et Theth font face à deux versants du même monde. La route entre eux est longue ; le col à pied est saisonnier et se planifie séparément.",
        highlights: [
          { title: "Les parois de la vallée", text: "Le calcaire pâle monte si vite que l’échelle devient la première expérience." },
          { title: "Rragam au-delà de la route", text: "Prairies et sentiers prolongent la vallée vers une montagne plus silencieuse." },
          { title: "La table de la maison d’hôtes", text: "Cuisine, récits familiaux et savoir montagnard donnent une dimension humaine au paysage." },
        ],
      },
    },
  },
];

export const travelGuides: TravelGuide[] = [
  {
    slug: "first-time-albania-travel-guide",
    image: "/group-road.webp",
    video: "/travel-driving.mp4",
    readTime: 7,
    relatedDestinations: ["berat", "albanian-riviera-himare", "albanian-alps-theth"],
    content: {
      en: {
        title: "First time in Albania: what to know before you go",
        kicker: "The honest first-trip guide",
        intro: "Albania is easy to love and occasionally confusing to move through. A little context about roads, cash, timing and regional pace makes the trip far smoother.",
        sections: [
          { title: "Build around regions, not a checklist", text: "Distances look short on a map, but mountain roads and coastal traffic change the arithmetic. Choose two or three regions and give each enough time to feel distinct." },
          { title: "Cash still matters", text: "Cards are common in larger hotels and restaurants, but cash remains useful for family tables, small entries and rural stops. Carry Albanian lek and avoid relying on one payment method." },
          { title: "Road time is part of the story", text: "The drive is often where Albania makes sense: villages, produce stands, mountain passes and sudden sea views. Plan fewer stops and make the road intentional." },
          { title: "Ask what is included", text: "A good operator states pickup, tickets, meals, walking level, maximum group size and payment method clearly before confirmation." },
        ],
      },
      sq: {
        title: "Hera e parë në Shqipëri: çfarë duhet të dini",
        kicker: "Udhërrëfyes i sinqertë për udhëtimin e parë",
        intro: "Shqipëria dashurohet lehtë, por lëvizja mund të jetë herë pas here e paqartë. Pak kontekst për rrugët, paratë, kohën dhe ritmin rajonal e bën udhëtimin shumë më të lehtë.",
        sections: [
          { title: "Ndërtoni planin sipas rajoneve", text: "Distancat duken të shkurtra në hartë, por rrugët malore dhe trafiku bregdetar ndryshojnë llogaritë. Zgjidhni dy ose tre rajone dhe jepuni kohë." },
          { title: "Paraja në dorë ka ende rëndësi", text: "Kartat përdoren në hotele e restorante më të mëdha, por lekët duhen për tryeza familjare, hyrje dhe ndalesa rurale." },
          { title: "Rruga është pjesë e historisë", text: "Shpesh Shqipëria kuptohet gjatë udhëtimit: fshatra, stenda prodhimesh, qafa mali dhe pamje të papritura deti." },
          { title: "Pyesni çfarë përfshihet", text: "Një operator i mirë sqaron marrjen, biletat, ushqimin, nivelin e ecjes, madhësinë e grupit dhe pagesën para konfirmimit." },
        ],
      },
      de: {
        title: "Zum ersten Mal in Albanien: Das sollten Sie wissen",
        kicker: "Der ehrliche Reiseführer für den ersten Besuch",
        intro: "Albanien ist leicht zu lieben und manchmal verwirrend zu bereisen. Etwas Kontext zu Straßen, Bargeld, Zeit und regionalem Tempo macht die Reise deutlich leichter.",
        sections: [
          { title: "Nach Regionen statt Checkliste planen", text: "Entfernungen wirken kurz, doch Bergstraßen und Küstenverkehr ändern die Rechnung. Wählen Sie zwei oder drei Regionen und geben Sie jeder genug Zeit." },
          { title: "Bargeld bleibt wichtig", text: "Karten funktionieren in größeren Hotels und Restaurants; für Familientische, kleine Eintritte und ländliche Stopps ist albanischer Lek weiterhin sinnvoll." },
          { title: "Die Straße gehört zur Geschichte", text: "Oft erklärt sich Albanien unterwegs: Dörfer, Obststände, Bergpässe und plötzliche Meerblicke. Weniger Stopps, bewusstere Fahrt." },
          { title: "Nach Leistungen fragen", text: "Ein guter Anbieter nennt Abholung, Tickets, Mahlzeiten, Gehlevel, Gruppengröße und Zahlungsart klar vor der Bestätigung." },
        ],
      },
      fr: {
        title: "Premier voyage en Albanie : ce qu’il faut savoir",
        kicker: "Le guide honnête d’un premier séjour",
        intro: "L’Albanie est facile à aimer et parfois déroutante à parcourir. Quelques repères sur les routes, l’argent, le temps et le rythme régional rendent le voyage beaucoup plus fluide.",
        sections: [
          { title: "Penser en régions, pas en liste", text: "Les distances semblent courtes, mais routes de montagne et trafic côtier changent le calcul. Choisissez deux ou trois régions et laissez-leur du temps." },
          { title: "L’argent liquide compte encore", text: "La carte fonctionne dans les grands hôtels et restaurants ; le lek reste utile pour tables familiales, petites entrées et arrêts ruraux." },
          { title: "La route fait partie du récit", text: "L’Albanie se comprend souvent en chemin : villages, étals, cols et vues soudaines sur la mer. Moins d’arrêts, mais mieux choisis." },
          { title: "Demander ce qui est inclus", text: "Un bon opérateur précise prise en charge, billets, repas, niveau de marche, taille du groupe et paiement avant confirmation." },
        ],
      },
    },
  },
  {
    slug: "best-time-to-visit-albania",
    image: "/albania-riviera.png",
    video: "/video/riviera.mp4",
    readTime: 6,
    relatedDestinations: ["albanian-riviera-himare", "albanian-alps-theth", "permet-vjosa"],
    content: {
      en: {
        title: "The best time to visit Albania",
        kicker: "Month-by-month, without pretending one season fits everyone",
        intro: "The right month depends on whether you want swimming, mountain walking, cultural cities or quiet roads. Albania changes dramatically between coast and altitude.",
        sections: [
          { title: "April and May: green Albania", text: "Rivers run full, hills are bright and cultural days are comfortable. High mountain routes may still be limited, but Berat, Gjirokastër, Krujë and Përmet are excellent." },
          { title: "June: the all-rounder", text: "The coast is warm, mountain roads are open and peak crowds have not fully arrived. For a first trip that mixes regions, June is hard to beat." },
          { title: "July and August: swim early, plan carefully", text: "Expect heat, busy coastal roads and lively beaches. Start cities early, reserve coastal stays and use long lunch hours rather than fighting midday sun." },
          { title: "September and October: the slow favourite", text: "Sea temperatures remain inviting in September while paths and heritage towns quiet down. October is superb for food, colour and southern road trips." },
        ],
      },
      sq: {
        title: "Koha më e mirë për të vizituar Shqipërinë",
        kicker: "Muaj pas muaji, sepse një stinë nuk i përshtatet të gjithëve",
        intro: "Muaji i duhur varet nga noti, ecja në male, qytetet historike ose rrugët e qeta. Shqipëria ndryshon shumë mes bregdetit dhe lartësisë.",
        sections: [
          { title: "Prill dhe maj: Shqipëria e gjelbër", text: "Lumenjtë janë plot, kodrat të gjelbra dhe qytetet të rehatshme. Rrugët e larta mund të jenë të kufizuara, por Berati, Gjirokastra, Kruja e Përmeti janë të shkëlqyera." },
          { title: "Qershor: zgjedhja e plotë", text: "Bregdeti është i ngrohtë, rrugët malore të hapura dhe turma ende jo në kulm. Për një udhëtim të parë me disa rajone, qershori është ideal." },
          { title: "Korrik dhe gusht: not herët, planifikim i kujdesshëm", text: "Prisni vapë dhe rrugë bregdetare të zëna. Filloni qytetet herët, rezervoni qëndrimet dhe përdorni drekën e gjatë kundër vapës." },
          { title: "Shtator dhe tetor: favoriti i qetë", text: "Deti mbetet i ngrohtë në shtator, ndërsa shtigjet e qytetet qetësohen. Tetori është i mrekullueshëm për ushqim dhe jug." },
        ],
      },
      de: {
        title: "Die beste Reisezeit für Albanien",
        kicker: "Monat für Monat – weil nicht eine Saison allen passt",
        intro: "Der richtige Monat hängt von Baden, Bergwandern, Kulturstädten oder ruhigen Straßen ab. Albanien verändert sich stark zwischen Küste und Höhe.",
        sections: [
          { title: "April und Mai: grünes Albanien", text: "Volle Flüsse, helle Hügel und angenehme Kulturtage. Hohe Bergwege können begrenzt sein; Berat, Gjirokastër, Krujë und Përmet sind hervorragend." },
          { title: "Juni: der Alleskönner", text: "Warme Küste, offene Bergstraßen und noch keine vollen Hochsaison-Mengen. Für eine erste Reise mit mehreren Regionen ist Juni ideal." },
          { title: "Juli und August: früh baden, gut planen", text: "Hitze, belebte Küstenstraßen und lebhafte Strände. Städte früh beginnen, Küstennächte reservieren und die Mittagshitze mit einer langen Pause umgehen." },
          { title: "September und Oktober: der ruhige Favorit", text: "Im September bleibt das Meer warm, Wege und Altstädte werden ruhiger. Oktober ist großartig für Küche, Farben und den Süden." },
        ],
      },
      fr: {
        title: "La meilleure période pour visiter l’Albanie",
        kicker: "Mois par mois, car une saison ne convient pas à tous",
        intro: "Le bon mois dépend de vos envies : baignade, montagne, villes historiques ou routes calmes. L’Albanie change fortement entre littoral et altitude.",
        sections: [
          { title: "Avril et mai : l’Albanie verte", text: "Rivières pleines, collines lumineuses et journées culturelles agréables. La haute montagne peut rester limitée, mais Berat, Gjirokastër, Krujë et Përmet sont excellentes." },
          { title: "Juin : le meilleur équilibre", text: "Côte chaude, routes de montagne ouvertes et fréquentation pas encore maximale. Pour un premier voyage multirégional, juin est difficile à battre." },
          { title: "Juillet et août : tôt dans l’eau, plan précis", text: "Chaleur, routes côtières chargées et plages animées. Commencez les villes tôt, réservez la côte et utilisez le long déjeuner contre le soleil." },
          { title: "Septembre et octobre : le favori tranquille", text: "La mer reste agréable en septembre tandis que sentiers et vieilles villes se calment. Octobre est superbe pour la cuisine et le Sud." },
        ],
      },
    },
  },
  {
    slug: "7-day-albania-itinerary",
    image: "/berat.png",
    video: "/video/berat.mp4",
    readTime: 8,
    relatedDestinations: ["berat", "gjirokaster-blue-eye", "albanian-riviera-himare"],
    content: {
      en: {
        title: "A realistic 7-day Albania itinerary",
        kicker: "Enough contrast, without spending the whole week in a car",
        intro: "One week cannot cover every corner of Albania well. This route prioritises Tirana, two UNESCO city landscapes and the Ionian coast, with room to actually experience them.",
        sections: [
          { title: "Days 1–2: Tirana and Krujë", text: "Use the first day to settle into Tirana’s layers. On day two, pair Krujë’s bazaar and castle with Bovilla or return for an unhurried capital evening." },
          { title: "Day 3: Berat", text: "Travel south through Belsh, walk the inhabited citadel and stay long enough for the Osum riverfront at dusk. Add a Roshnik lunch rather than another rushed monument." },
          { title: "Days 4–5: Gjirokastër and the Blue Eye", text: "Give Gjirokastër a full morning before continuing to the spring. Stay in the south so the next day begins close to the coast rather than backtracking." },
          { title: "Days 6–7: Himarë and the Riviera", text: "Choose one base, explore fewer coves, and make Llogara part of the return. The coast rewards unplanned hours more than beach counting." },
        ],
      },
      sq: {
        title: "Një itinerar realist 7-ditor në Shqipëri",
        kicker: "Mjaft kontrast, pa e kaluar javën në makinë",
        intro: "Një javë nuk mjafton për çdo cep. Ky itinerar vendos Tiranën, dy qytete historike dhe bregdetin Jon në qendër, me kohë për t’i përjetuar.",
        sections: [
          { title: "Ditët 1–2: Tiranë dhe Krujë", text: "Ditën e parë njihni shtresat e Tiranës. Ditën e dytë bashkoni pazarin e kalanë e Krujës me Bovillën ose kthehuni për një mbrëmje të qetë në kryeqytet." },
          { title: "Dita 3: Berat", text: "Udhëtoni përmes Belshit, ecni në kalanë e banuar dhe qëndroni për shëtitoren e Osumit në mbrëmje. Shtoni Roshnikun, jo një monument tjetër me nxitim." },
          { title: "Ditët 4–5: Gjirokastër dhe Syri i Kaltër", text: "Jepini Gjirokastrës një mëngjes të plotë para burimit. Qëndroni në jug që dita tjetër të nisë pranë bregdetit." },
          { title: "Ditët 6–7: Himarë dhe Riviera", text: "Zgjidhni një bazë, shihni më pak gjire dhe bëjeni Llogaranë pjesë të kthimit. Bregdeti shpërblen orët e paplanifikuara." },
        ],
      },
      de: {
        title: "Eine realistische 7-Tage-Route durch Albanien",
        kicker: "Genug Kontrast, ohne die Woche im Auto zu verbringen",
        intro: "Eine Woche kann nicht jede Ecke gut abdecken. Diese Route verbindet Tirana, zwei historische Stadtlandschaften und die Ionische Küste mit echter Aufenthaltszeit.",
        sections: [
          { title: "Tag 1–2: Tirana und Krujë", text: "Am ersten Tag Tiranas Schichten entdecken. Tag zwei verbindet Basar und Burg von Krujë mit Bovilla – oder endet früh für einen ruhigen Hauptstadtabend." },
          { title: "Tag 3: Berat", text: "Über Belsh nach Süden, durch die bewohnte Zitadelle und bis zur Abendstimmung am Osum bleiben. Lieber ein Roshnik-Mittagessen als noch ein eiliges Monument." },
          { title: "Tag 4–5: Gjirokastër und Blaues Auge", text: "Gjirokastër einen vollen Morgen geben, dann zur Quelle. Im Süden übernachten, damit der nächste Tag küstennah beginnt." },
          { title: "Tag 6–7: Himarë und Riviera", text: "Einen Standort wählen, weniger Buchten erleben und Llogara in die Rückfahrt einbauen. Ungeplante Stunden sind wertvoller als Strandzählen." },
        ],
      },
      fr: {
        title: "Un itinéraire réaliste de 7 jours en Albanie",
        kicker: "Assez de contrastes, sans passer la semaine en voiture",
        intro: "Une semaine ne permet pas de tout voir correctement. Cet itinéraire privilégie Tirana, deux paysages urbains historiques et la côte ionienne, avec du temps pour les vivre.",
        sections: [
          { title: "Jours 1–2 : Tirana et Krujë", text: "Le premier jour, découvrez les couches de Tirana. Le deuxième associe bazar et citadelle de Krujë à Bovilla, ou se termine tôt pour une soirée calme dans la capitale." },
          { title: "Jour 3 : Berat", text: "Descendez par Belsh, parcourez la citadelle habitée et restez pour l’Osum au crépuscule. Ajoutez un déjeuner à Roshnik plutôt qu’un monument pressé." },
          { title: "Jours 4–5 : Gjirokastër et l’Œil Bleu", text: "Donnez une matinée entière à Gjirokastër puis continuez vers la source. Dormez dans le Sud pour commencer le lendemain près de la côte." },
          { title: "Jours 6–7 : Himarë et Riviera", text: "Choisissez une base, explorez moins de criques et intégrez Llogara au retour. La côte récompense les heures non planifiées." },
        ],
      },
    },
  },
  {
    slug: "best-day-trips-from-tirana",
    image: "/mountain-road.webp",
    video: "/travel-friends.mp4",
    readTime: 6,
    relatedDestinations: ["kruja-bovilla", "berat", "gjirokaster-blue-eye"],
    content: {
      en: {
        title: "The best day trips from Tirana",
        kicker: "What genuinely works in one day",
        intro: "Tirana is a strong base, but not every beautiful Albanian place makes a sensible day trip. The best choice balances road time, season and how much walking you actually want.",
        sections: [
          { title: "Krujë & Bovilla: the compact contrast", text: "The easiest full day from Tirana combines national history, craft and a mountain landscape. It suits travellers who want variety without a dawn departure." },
          { title: "Berat: the cultural all-rounder", text: "Berat offers the most complete balance of architecture, history, riverfront and regional food. Nine hours is realistic when the day is paced rather than overloaded." },
          { title: "The Riviera: the cinematic long day", text: "It is possible, but it must begin early and avoid collecting beaches. Llogara, Himarë, one cove and Porto Palermo make a coherent route." },
          { title: "Theth: for travellers who accept the road", text: "The Albanian Alps are a long day from Tirana. The journey is worthwhile when mountain scenery matters more than maximising time on foot." },
        ],
      },
      sq: {
        title: "Udhëtimet më të mira ditore nga Tirana",
        kicker: "Çfarë funksionon vërtet brenda një dite",
        intro: "Tirana është bazë e mirë, por jo çdo vend i bukur është udhëtim i arsyeshëm ditor. Zgjedhja më e mirë balancon rrugën, stinën dhe ecjen që dëshironi.",
        sections: [
          { title: "Krujë & Bovillë: kontrast kompakt", text: "Dita më e lehtë bashkon histori kombëtare, zeje dhe peizazh mali. Është ideale pa pasur nevojë për nisje para agimit." },
          { title: "Berat: zgjedhja kulturore e plotë", text: "Berati balancon arkitekturë, histori, lumë dhe ushqim rajonal. Nëntë orë janë realiste kur dita nuk mbingarkohet." },
          { title: "Riviera: dita e gjatë panoramike", text: "Është e mundur, por kërkon nisje herët dhe jo mbledhje plazhesh. Llogara, Himara, një gji dhe Porto Palermo krijojnë rrugë koherente." },
          { title: "Theth: për ata që pranojnë rrugën", text: "Alpet janë një ditë e gjatë nga Tirana. Udhëtimi ia vlen kur peizazhi malor ka më shumë rëndësi se koha në këmbë." },
        ],
      },
      de: {
        title: "Die besten Tagesausflüge ab Tirana",
        kicker: "Was an einem Tag wirklich funktioniert",
        intro: "Tirana ist eine starke Basis, doch nicht jeder schöne Ort ist ein sinnvoller Tagesausflug. Die beste Wahl balanciert Fahrzeit, Saison und gewünschte Gehstrecke.",
        sections: [
          { title: "Krujë & Bovilla: kompakter Kontrast", text: "Der einfachste volle Tag verbindet Nationalgeschichte, Handwerk und Berglandschaft – abwechslungsreich ohne Abfahrt vor Sonnenaufgang." },
          { title: "Berat: kultureller Alleskönner", text: "Berat verbindet Architektur, Geschichte, Fluss und regionale Küche. Neun Stunden sind realistisch, wenn der Tag nicht überladen wird." },
          { title: "Riviera: der filmische lange Tag", text: "Möglich, aber nur mit frühem Start und ohne Strandsammeln. Llogara, Himarë, eine Bucht und Porto Palermo ergeben eine klare Route." },
          { title: "Theth: für Reisende, die die Straße mögen", text: "Die Alpen sind ein langer Tag ab Tirana. Es lohnt sich, wenn Berglandschaft wichtiger ist als maximale Wanderzeit." },
        ],
      },
      fr: {
        title: "Les meilleures excursions depuis Tirana",
        kicker: "Ce qui fonctionne vraiment en une journée",
        intro: "Tirana est une bonne base, mais tous les beaux lieux ne sont pas des excursions raisonnables. Le bon choix équilibre route, saison et marche souhaitée.",
        sections: [
          { title: "Krujë & Bovilla : contraste compact", text: "La journée la plus facile associe histoire nationale, artisanat et montagne, sans départ avant l’aube." },
          { title: "Berat : l’équilibre culturel", text: "Berat réunit architecture, histoire, rivière et cuisine régionale. Neuf heures sont réalistes si la journée reste bien rythmée." },
          { title: "Riviera : la longue journée cinématographique", text: "C’est possible avec un départ tôt et sans collectionner les plages. Llogara, Himarë, une crique et Porto Palermo forment un parcours cohérent." },
          { title: "Theth : pour ceux qui acceptent la route", text: "Les Alpes représentent une longue journée depuis Tirana. Le trajet vaut la peine si le paysage compte plus que le temps de marche." },
        ],
      },
    },
  },
  {
    slug: "albanian-riviera-road-trip",
    image: "/albania-riviera.png",
    video: "/video/riviera.mp4",
    readTime: 7,
    relatedDestinations: ["albanian-riviera-himare", "gjirokaster-blue-eye", "berat"],
    content: {
      en: {
        title: "How to plan an Albanian Riviera road trip",
        kicker: "Fewer bases, better coves and a road worth slowing down for",
        intro: "The Riviera is not one beach. It is the sequence between the Llogara Pass, villages, headlands, small bays and the changing character of the Ionian coast.",
        sections: [
          { title: "Choose Himarë as a human-scale base", text: "Himarë places old town, beaches, food and day-trip range in balance. It feels more connected to the wider coast than a resort-only stop." },
          { title: "Do not change hotels every night", text: "The coast is more enjoyable with two or three nights in one place. Use the saved packing time for a cove, a slow lunch or the old village above town." },
          { title: "Drive Llogara in daylight", text: "The pass is not just transit. Keep time for viewpoints, weather changes and the moment the Ionian first appears below." },
          { title: "Let conditions choose the swim", text: "Wind and waves can make neighbouring coves feel completely different. A flexible recommendation is more useful than one famous beach fixed months ahead." },
        ],
      },
      sq: {
        title: "Si të planifikoni një udhëtim në Rivierën Shqiptare",
        kicker: "Më pak baza, gjire më të mira dhe një rrugë që kërkon ngadalësi",
        intro: "Riviera nuk është një plazh. Është vazhdimësia mes Qafës së Llogarasë, fshatrave, kepave, gjireve dhe karakterit që ndryshon përgjatë Jonit.",
        sections: [
          { title: "Zgjidhni Himarën si bazë njerëzore", text: "Himara balancon qytetin e vjetër, plazhet, ushqimin dhe udhëtimet përreth. Ndihet e lidhur me gjithë bregdetin." },
          { title: "Mos ndryshoni hotel çdo natë", text: "Bregdeti shijohet më mirë me dy ose tre net në një vend. Përdorni kohën për një gji, drekë të gjatë ose fshatin e vjetër." },
          { title: "Kaloni Llogaranë në dritë", text: "Qafa nuk është vetëm transit. Ruani kohë për pamjet, ndryshimin e motit dhe momentin kur shfaqet Joni." },
          { title: "Lërini kushtet të zgjedhin notin", text: "Era dhe dallgët i bëjnë gjiret fqinjë shumë të ndryshëm. Një këshillë fleksibël vlen më shumë se një emër i famshëm." },
        ],
      },
      de: {
        title: "So planen Sie einen Roadtrip an der Albanischen Riviera",
        kicker: "Weniger Standorte, bessere Buchten und eine Straße zum Langsamfahren",
        intro: "Die Riviera ist nicht ein Strand. Sie ist die Folge von Llogara-Pass, Dörfern, Landzungen, kleinen Buchten und dem wechselnden Charakter der ionischen Küste.",
        sections: [
          { title: "Himarë als menschlichen Standort wählen", text: "Himarë balanciert Altstadt, Strände, Essen und Ausflüge. Der Ort ist stärker mit der ganzen Küste verbunden als ein reiner Resortstopp." },
          { title: "Nicht jede Nacht das Hotel wechseln", text: "Zwei oder drei Nächte an einem Ort sind besser. Die gesparte Packzeit gehört einer Bucht, einem langen Mittagessen oder dem alten Dorf." },
          { title: "Llogara bei Tageslicht fahren", text: "Der Pass ist nicht nur Transit. Zeit für Aussichtspunkte, Wetterwechsel und den ersten ionischen Blick einplanen." },
          { title: "Bedingungen bestimmen das Baden", text: "Wind und Wellen verändern benachbarte Buchten stark. Eine flexible Empfehlung ist wertvoller als ein berühmter, Monate vorher fixierter Strand." },
        ],
      },
      fr: {
        title: "Comment organiser un road trip sur la Riviera albanaise",
        kicker: "Moins de bases, de meilleures criques et une route à ralentir",
        intro: "La Riviera n’est pas une plage. C’est la séquence entre le col de Llogara, les villages, les caps, les petites baies et le caractère changeant de la côte ionienne.",
        sections: [
          { title: "Choisir Himarë comme base à taille humaine", text: "Himarë équilibre vieille ville, plages, cuisine et rayon d’excursion. Elle reste liée à l’ensemble du littoral." },
          { title: "Ne pas changer d’hôtel chaque nuit", text: "Deux ou trois nuits au même endroit améliorent la côte. Gardez le temps gagné pour une crique, un long déjeuner ou le vieux village." },
          { title: "Traverser Llogara de jour", text: "Le col n’est pas un simple transit. Prévoyez les belvédères, la météo et le moment où la mer Ionienne apparaît." },
          { title: "Laisser les conditions choisir la baignade", text: "Vent et vagues rendent deux criques voisines très différentes. Un conseil flexible vaut mieux qu’une plage célèbre fixée des mois avant." },
        ],
      },
    },
  },
  {
    slug: "northern-albania-shkoder-theth-valbona",
    image: "/valbona.webp",
    video: "/video/valbona.mp4",
    readTime: 9,
    relatedDestinations: ["shkoder", "albanian-alps-theth", "valbona-valley"],
    content: {
      en: {
        title: "Northern Albania: Shkodër, Theth & Valbona done properly",
        kicker: "A route with real mountain logic, not pins forced onto a map",
        intro: "Lezhë, Shkodër, Theth and Valbona belong to the same northern story, but they do not fit into one rushed day. This guide explains the order, the road reality and where to slow down.",
        sections: [
          { title: "Begin with Lezhë, not just a fuel stop", text: "The castle and Skanderbeg memorial introduce the northern plain before the mountains arrive. Pair them with Shëngjin or the lagoon, then continue to Shkodër without hurrying." },
          { title: "Give Shkodër its own time", text: "Rozafa, the Marubi photographic archive, the pedestrian centre and Shirokë are not transfer-room attractions. A night here makes the journey into the Alps calmer and culturally richer." },
          { title: "Choose Theth for village paths and the western approach", text: "The Qafë Thore road delivers one of Albania’s great landscape reveals. Theth works for waterfalls, stone homes and valley walks that can be adjusted to weather." },
          { title: "Choose Valbona for scale and deep-valley quiet", text: "Valbona is reached from the north-east, not by a quick road from Theth. The valley rewards guesthouse time, Rragam walks and travellers who enjoy the long approach." },
          { title: "The Theth–Valbona pass is a hike, not a transfer", text: "The high crossing is seasonal, weather-dependent and requires luggage planning. Outside hiking months, visit the valleys as separate road journeys rather than forcing an unsafe connection." },
        ],
      },
      sq: {
        title: "Veriu i Shqipërisë: Shkodër, Theth & Valbonë siç duhet",
        kicker: "Një rrugë me logjikë mali, jo pika të detyruara në hartë",
        intro: "Lezha, Shkodra, Thethi dhe Valbona i përkasin të njëjtës histori veriore, por nuk futen në një ditë me nxitim. Ky udhërrëfyes shpjegon rendin, realitetin e rrugës dhe ku duhet ngadalësuar.",
        sections: [
          { title: "Filloni me Lezhën, jo vetëm si ndalesë", text: "Kalaja dhe memoriali i Skënderbeut prezantojnë fushën veriore para maleve. Bashkojini me Shëngjinin ose lagunën, pastaj vazhdoni drejt Shkodrës pa nxitim." },
          { title: "Jepini Shkodrës kohën e vet", text: "Rozafa, arkivi fotografik Marubi, qendra pedonale dhe Shiroka nuk janë atraksione tranziti. Një natë këtu e bën hyrjen në Alpe më të qetë dhe më të pasur." },
          { title: "Zgjidhni Thethin për shtigje fshati dhe hyrjen perëndimore", text: "Rruga e Qafë Thores sjell një nga hapjet më të mëdha të peizazhit shqiptar. Thethi funksionon për ujëvara, shtëpi guri dhe ecje që përshtaten me motin." },
          { title: "Zgjidhni Valbonën për madhështi dhe qetësi", text: "Valbona arrihet nga verilindja, jo me një rrugë të shpejtë nga Thethi. Lugina shpërblen kohën në bujtinë, ecjet në Rragam dhe ata që shijojnë rrugën e gjatë." },
          { title: "Qafa Theth–Valbonë është ecje, jo transfer", text: "Kalimi i lartë është sezonal, varet nga moti dhe kërkon planifikim të bagazheve. Jashtë muajve të ecjes, vizitoni luginat si rrugë të ndara." },
        ],
      },
      de: {
        title: "Nordalbanien: Shkodër, Theth & Valbona richtig planen",
        kicker: "Eine Route mit echter Berglogik statt erzwungener Punkte auf der Karte",
        intro: "Lezhë, Shkodër, Theth und Valbona gehören zur selben Nordgeschichte, passen aber nicht in einen gehetzten Tag. Dieser Reiseführer erklärt Reihenfolge, Straßenrealität und die richtigen Pausen.",
        sections: [
          { title: "Mit Lezhë beginnen, nicht nur zum Tanken", text: "Burg und Skanderbeg-Gedenkstätte führen in die nördliche Ebene ein. Verbinden Sie sie mit Shëngjin oder der Lagune und fahren Sie ohne Eile nach Shkodër." },
          { title: "Shkodër eigene Zeit geben", text: "Rozafa, Marubi-Fotoarchiv, Fußgängerzentrum und Shirokë sind keine Transferattraktionen. Eine Nacht hier macht den Weg in die Alpen ruhiger und kulturell reicher." },
          { title: "Theth für Dorfwege und die westliche Anfahrt", text: "Die Straße über Qafë Thore liefert einen der großen Landschaftsmomente Albaniens. Theth eignet sich für Wasserfälle, Steinhäuser und wetterflexible Talwege." },
          { title: "Valbona für Größe und tiefe Talstille", text: "Valbona wird von Nordosten erreicht, nicht über eine schnelle Straße aus Theth. Das Tal belohnt Gästehauszeit, Rragam-Wege und Menschen, die die lange Anfahrt mögen." },
          { title: "Der Theth–Valbona-Pass ist eine Wanderung", text: "Die hohe Querung ist saisonal, wetterabhängig und verlangt Gepäckplanung. Außerhalb der Wandermonate sind die Täler getrennte Straßenreisen." },
        ],
      },
      fr: {
        title: "Nord de l’Albanie : Shkodër, Theth & Valbona bien organisés",
        kicker: "Une route qui respecte la logique des montagnes",
        intro: "Lezhë, Shkodër, Theth et Valbona appartiennent au même récit du Nord, mais pas à une seule journée pressée. Ce guide explique l’ordre, la réalité des routes et les endroits où ralentir.",
        sections: [
          { title: "Commencer par Lezhë, pas seulement pour une pause", text: "Citadelle et mémorial de Skanderbeg introduisent la plaine du Nord avant les montagnes. Associez-les à Shëngjin ou à la lagune puis continuez calmement vers Shkodër." },
          { title: "Donner du temps à Shkodër", text: "Rozafa, les archives Marubi, le centre piéton et Shirokë ne sont pas des attractions de transit. Une nuit ici enrichit et apaise l’entrée dans les Alpes." },
          { title: "Choisir Theth pour les chemins de village", text: "La route de Qafë Thore offre l’une des grandes révélations paysagères d’Albanie. Theth convient aux cascades, maisons de pierre et marches adaptées à la météo." },
          { title: "Choisir Valbona pour l’échelle et le silence", text: "Valbona s’atteint par le nord-est, pas par une route rapide depuis Theth. La vallée récompense les maisons d’hôtes, les marches vers Rragam et ceux qui aiment la longue approche." },
          { title: "Le col Theth–Valbona est une randonnée", text: "La traversée est saisonnière, dépend de la météo et exige un plan pour les bagages. Hors saison, visitez les vallées comme deux routes distinctes." },
        ],
      },
    },
  },
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function destinationContent(destination: Destination, locale: Locale) {
  return destination.content[locale];
}

export function getTravelGuide(slug: string) {
  return travelGuides.find((guide) => guide.slug === slug);
}

export function travelGuideContent(guide: TravelGuide, locale: Locale) {
  return guide.content[locale];
}
