import type { Locale } from "./site";

export const searchLandingSlugs = [
  "albania-day-tours",
  "tours-from-tirana",
  "tours-from-durres",
  "tours-from-golem",
  "private-tours-albania",
  "small-group-albania-tours",
] as const;

export type SearchLandingSlug = (typeof searchLandingSlugs)[number];

type LandingSection = {
  title: string;
  text: string;
};

type LandingFaq = {
  question: string;
  answer: string;
};

type LandingContent = {
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  image: string;
  city?: string;
  privateOnly?: boolean;
  sections: LandingSection[];
  faq: LandingFaq[];
};

const content: Record<SearchLandingSlug, Record<Locale, LandingContent>> = {
  "albania-day-tours": {
    en: {
      eyebrow: "Daily departures · direct local booking",
      title: "Albania day tours for small groups",
      seoTitle: "Albania Day Tours from Tirana, Durrës & Golem",
      description: "Compare nine guided Albania day tours for 2–8 travellers, with pickup from Tirana, Durrës or Golem, direct WhatsApp confirmation and cash payment.",
      intro: "Choose a coast, castle, vineyard, mountain or UNESCO city day without joining a large coach. Every route is hosted locally, limited to 2–8 travellers and confirmed personally before departure.",
      image: "/albania-riviera.webp",
      sections: [
        { title: "A day trip that fits the road", text: "Albania is compact on a map, but mountain roads and coastal routes reward realistic pacing. Each itinerary shows its duration, pickup cities, walking level, inclusions and price before you send a request." },
        { title: "Book directly, not through a marketplace", text: "Choose your date, group size and pickup point, then send the completed request to our local team on WhatsApp. We confirm availability and the exact pickup window personally." },
        { title: "Simple payment", text: "No card details are collected online. Payment is made in cash to your guide on the day of the confirmed tour." },
      ],
      faq: [
        { question: "How many people can join an Albania day tour?", answer: "Tours require a minimum of 2 travellers and accept a maximum of 8 people per group." },
        { question: "Where do the tours depart from?", answer: "Pickup is available from Tirana, Durrës and Golem. The exact pickup time depends on the tour and is confirmed before departure." },
        { question: "How do I reserve?", answer: "Open a tour, choose Book this journey, complete the short booking form and send the prepared request through WhatsApp." },
      ],
    },
    sq: {
      eyebrow: "Nisje ditore · rezervim direkt",
      title: "Ture ditore në Shqipëri për grupe të vogla",
      seoTitle: "Ture Ditore në Shqipëri nga Tirana, Durrësi & Golemi",
      description: "Krahasoni nëntë ture ditore me guidë për 2–8 udhëtarë, me nisje nga Tirana, Durrësi ose Golemi, konfirmim në WhatsApp dhe pagesë cash.",
      intro: "Zgjidhni bregdet, kala, kantinë, male ose qytet UNESCO pa udhëtuar me autobus të madh. Çdo itinerar drejtohet nga vendas, pranon 2–8 udhëtarë dhe konfirmohet personalisht.",
      image: "/albania-riviera.webp",
      sections: [
        { title: "Një ditë që respekton rrugën", text: "Shqipëria duket e vogël në hartë, por rrugët malore dhe bregdetare kërkojnë ritëm realist. Çdo itinerar shpjegon kohëzgjatjen, nisjen, ecjen, përfshirjet dhe çmimin." },
        { title: "Rezervim direkt me ekipin vendas", text: "Zgjidhni datën, numrin e personave dhe vendin e marrjes, pastaj dërgoni kërkesën e plotë në WhatsApp. Ne konfirmojmë disponueshmërinë dhe orarin." },
        { title: "Pagesë e thjeshtë", text: "Nuk marrim të dhëna karte online. Pagesa bëhet cash te guida ditën e turit të konfirmuar." },
      ],
      faq: [
        { question: "Sa persona mund të marrin pjesë?", answer: "Çdo tur kërkon minimumi 2 dhe pranon maksimumi 8 persona." },
        { question: "Nga nisen turet?", answer: "Marrja ofrohet nga Tirana, Durrësi dhe Golemi. Ora e saktë konfirmohet para nisjes." },
        { question: "Si rezervohet?", answer: "Hapni turin, plotësoni formularin e shkurtër dhe dërgoni kërkesën e përgatitur në WhatsApp." },
      ],
    },
    de: {
      eyebrow: "Tägliche Abfahrten · direkte Buchung",
      title: "Albanien-Tagestouren für kleine Gruppen",
      seoTitle: "Albanien Tagestouren ab Tirana, Durrës & Golem",
      description: "Vergleichen Sie neun geführte Albanien-Tagestouren für 2–8 Gäste, mit Abholung in Tirana, Durrës oder Golem, WhatsApp-Bestätigung und Barzahlung.",
      intro: "Küste, Burg, Weingut, Berge oder UNESCO-Stadt – ohne großen Reisebus. Jede Route wird lokal geführt, ist auf 2–8 Gäste begrenzt und wird persönlich bestätigt.",
      image: "/albania-riviera.webp",
      sections: [
        { title: "Ein Tagesausflug mit realistischem Tempo", text: "Albanien wirkt auf der Karte klein, doch Berg- und Küstenstraßen brauchen Zeit. Jede Route zeigt Dauer, Abholorte, Aktivitätsniveau, Leistungen und Preis." },
        { title: "Direkt beim lokalen Team buchen", text: "Wählen Sie Datum, Gruppengröße und Abholort und senden Sie die vollständige Anfrage per WhatsApp. Wir bestätigen Verfügbarkeit und Abholzeit persönlich." },
        { title: "Einfache Bezahlung", text: "Wir erfassen online keine Kartendaten. Sie zahlen die bestätigte Tour am Reisetag bar beim Guide." },
      ],
      faq: [
        { question: "Wie groß sind die Gruppen?", answer: "Mindestens 2 und höchstens 8 Reisende nehmen pro Gruppe teil." },
        { question: "Wo starten die Touren?", answer: "Abholung ist in Tirana, Durrës und Golem möglich. Die genaue Zeit wird vor der Abfahrt bestätigt." },
        { question: "Wie reserviere ich?", answer: "Öffnen Sie eine Tour, füllen Sie das kurze Formular aus und senden Sie die vorbereitete Anfrage per WhatsApp." },
      ],
    },
    fr: {
      eyebrow: "Départs quotidiens · réservation directe",
      title: "Excursions en Albanie en petit groupe",
      seoTitle: "Excursions Albanie depuis Tirana, Durrës & Golem",
      description: "Comparez neuf excursions guidées en Albanie pour 2 à 8 voyageurs, avec prise en charge à Tirana, Durrës ou Golem, confirmation WhatsApp et paiement en espèces.",
      intro: "Choisissez côte, château, vignoble, montagne ou ville UNESCO sans grand autocar. Chaque itinéraire est guidé localement, limité à 2–8 voyageurs et confirmé personnellement.",
      image: "/albania-riviera.webp",
      sections: [
        { title: "Une journée adaptée aux routes", text: "L’Albanie paraît compacte, mais les routes de montagne et du littoral demandent un rythme réaliste. Chaque itinéraire précise durée, départ, marche, prestations et prix." },
        { title: "Réserver directement auprès de l’équipe", text: "Choisissez date, groupe et lieu de prise en charge, puis envoyez la demande complète sur WhatsApp. Nous confirmons personnellement disponibilité et horaire." },
        { title: "Paiement simple", text: "Aucune donnée bancaire n’est collectée en ligne. Le règlement se fait en espèces auprès du guide le jour de l’excursion confirmée." },
      ],
      faq: [
        { question: "Combien de personnes peuvent participer ?", answer: "Chaque excursion demande au moins 2 voyageurs et accueille au maximum 8 personnes." },
        { question: "D’où partent les excursions ?", answer: "La prise en charge est proposée à Tirana, Durrës et Golem. L’heure exacte est confirmée avant le départ." },
        { question: "Comment réserver ?", answer: "Ouvrez une excursion, remplissez le formulaire court et envoyez la demande préparée par WhatsApp." },
      ],
    },
  },
  "tours-from-tirana": {
    en: {
      eyebrow: "Hotel pickup in Albania’s capital",
      title: "Tours from Tirana, planned properly",
      seoTitle: "Best Albania Tours from Tirana for 2–8 Travellers",
      description: "Book small-group and private Albania tours from Tirana for 2–8 travellers. Daily departures, hotel pickup, WhatsApp confirmation and cash payment.",
      intro: "Use Tirana as your base for Berat, Krujë, Durrës, vineyards, the Riviera, Përmet and the Albanian Alps. We match each day with a realistic departure time and direct hotel pickup.",
      image: "/mountain-road.webp",
      city: "Tirana",
      sections: [
        { title: "The widest choice of departures", text: "All nine journeys can be requested from Tirana. Shorter days reach Krujë, Durrës and the vineyards; long departures continue to Theth, Përmet or the southern coast." },
        { title: "Your pickup is confirmed personally", text: "Tell us your hotel or meeting point in Tirana. After checking the route and vehicle, we send the exact pickup window through WhatsApp." },
        { title: "Choose by pace, not only by distance", text: "Every tour states duration and activity level so couples, families and friends can choose a day that genuinely suits them." },
      ],
      faq: [
        { question: "Can you collect us from our Tirana hotel?", answer: "Yes. Hotel pickup and drop-off are included where stated on the selected tour, with the exact time confirmed on WhatsApp." },
        { question: "What are the easiest day tours from Tirana?", answer: "Krujë, Durrës, Berat and the vineyard experiences usually offer the most relaxed road-to-experience balance." },
        { question: "Can two people book?", answer: "Yes. The minimum is 2 travellers and the maximum is 8." },
      ],
    },
    sq: {
      eyebrow: "Marrje në hotel në kryeqytet",
      title: "Ture nga Tirana, të planifikuara siç duhet",
      seoTitle: "Turet më të Mira nga Tirana për 2–8 Udhëtarë",
      description: "Rezervoni ture private dhe në grup të vogël nga Tirana për 2–8 udhëtarë, me nisje ditore, marrje në hotel, WhatsApp dhe pagesë cash.",
      intro: "Përdorni Tiranën si bazë për Berat, Krujë, Durrës, kantina, Rivierë, Përmet dhe Alpet Shqiptare. Çdo ditë ka orar realist dhe marrje direkte.",
      image: "/mountain-road.webp",
      city: "Tirana",
      sections: [
        { title: "Zgjedhja më e gjerë", text: "Të nëntë udhëtimet mund të kërkohen nga Tirana. Ditët më të shkurtra shkojnë në Krujë, Durrës e kantina; të gjatat në Theth, Përmet ose jug." },
        { title: "Marrja konfirmohet personalisht", text: "Na tregoni hotelin ose pikën në Tiranë. Pasi kontrollojmë rrugën dhe mjetin, dërgojmë orarin e saktë në WhatsApp." },
        { title: "Zgjidhni sipas ritmit", text: "Çdo tur tregon kohëzgjatjen dhe nivelin e aktivitetit, që çifte, familje e miq të zgjedhin siç duhet." },
      ],
      faq: [
        { question: "A na merrni nga hoteli në Tiranë?", answer: "Po. Marrja dhe kthimi përfshihen kur shënohen në tur; ora konfirmohet në WhatsApp." },
        { question: "Cilat janë turet më të lehta nga Tirana?", answer: "Kruja, Durrësi, Berati dhe eksperiencat në kantina zakonisht kanë ritmin më të qetë." },
        { question: "A mund të rezervojnë dy persona?", answer: "Po. Minimumi është 2 dhe maksimumi 8 persona." },
      ],
    },
    de: {
      eyebrow: "Hotelabholung in Albaniens Hauptstadt",
      title: "Touren ab Tirana, richtig geplant",
      seoTitle: "Beste Albanien Touren ab Tirana für 2–8 Gäste",
      description: "Buchen Sie kleine und private Albanien-Touren ab Tirana für 2–8 Gäste mit täglicher Abfahrt, Hotelabholung, WhatsApp und Barzahlung.",
      intro: "Tirana ist Ihr Ausgangspunkt für Berat, Krujë, Durrës, Weingüter, Riviera, Përmet und die Albanischen Alpen. Jede Route erhält eine realistische Startzeit.",
      image: "/mountain-road.webp",
      city: "Tirana",
      sections: [
        { title: "Die größte Auswahl", text: "Alle neun Reisen können ab Tirana angefragt werden. Kürzere Tage führen nach Krujë, Durrës oder zum Weingut; lange Tage nach Theth, Përmet oder an die Südküste." },
        { title: "Persönlich bestätigte Abholung", text: "Nennen Sie Hotel oder Treffpunkt in Tirana. Nach Prüfung von Route und Fahrzeug senden wir das genaue Zeitfenster per WhatsApp." },
        { title: "Nach Tempo auswählen", text: "Dauer und Aktivitätsniveau helfen Paaren, Familien und Freunden, den wirklich passenden Tag zu wählen." },
      ],
      faq: [
        { question: "Holen Sie uns am Hotel in Tirana ab?", answer: "Ja. Wo auf der Tour angegeben, sind Abholung und Rückfahrt inklusive; die genaue Zeit kommt per WhatsApp." },
        { question: "Welche Touren sind am entspanntesten?", answer: "Krujë, Durrës, Berat und Weingut-Erlebnisse bieten meist das ruhigste Verhältnis aus Fahrt und Erlebnis." },
        { question: "Können zwei Personen buchen?", answer: "Ja. Mindestens 2, höchstens 8 Personen." },
      ],
    },
    fr: {
      eyebrow: "Prise en charge dans la capitale",
      title: "Circuits depuis Tirana, bien organisés",
      seoTitle: "Meilleurs Circuits Albanie depuis Tirana pour 2–8",
      description: "Réservez des circuits privés et en petit groupe depuis Tirana pour 2 à 8 personnes, avec départ quotidien, hôtel, WhatsApp et paiement en espèces.",
      intro: "Faites de Tirana votre base pour Berat, Krujë, Durrës, les vignobles, la Riviera, Përmet et les Alpes. Chaque journée reçoit une heure de départ réaliste.",
      image: "/mountain-road.webp",
      city: "Tirana",
      sections: [
        { title: "Le plus grand choix", text: "Les neuf voyages sont disponibles depuis Tirana. Les journées courtes rejoignent Krujë, Durrës et les vignobles ; les longues Theth, Përmet ou le littoral sud." },
        { title: "Prise en charge confirmée personnellement", text: "Indiquez votre hôtel ou point de rendez-vous à Tirana. Après contrôle de l’itinéraire et du véhicule, nous envoyons l’horaire exact sur WhatsApp." },
        { title: "Choisir selon le rythme", text: "Durée et niveau d’activité permettent aux couples, familles et amis de sélectionner la bonne journée." },
      ],
      faq: [
        { question: "Venez-vous à notre hôtel à Tirana ?", answer: "Oui. Lorsque précisé sur le circuit, prise en charge et retour sont inclus ; l’heure exacte arrive sur WhatsApp." },
        { question: "Quelles excursions sont les plus faciles ?", answer: "Krujë, Durrës, Berat et les vignobles offrent généralement le rythme le plus tranquille." },
        { question: "Deux personnes peuvent-elles réserver ?", answer: "Oui. Le minimum est 2 et le maximum 8." },
      ],
    },
  },
  "tours-from-durres": {
    en: {
      eyebrow: "Pickup from Albania’s Adriatic city",
      title: "Albania tours from Durrës",
      seoTitle: "Albania Tours from Durrës | Small Groups & Day Trips",
      description: "Book guided Albania tours from Durrës for 2–8 travellers, with hotel pickup, direct WhatsApp booking, published prices and cash payment on the day.",
      intro: "Stay beside the Adriatic and still reach Albania’s castles, vineyards, UNESCO cities, rivers and mountains. We confirm the most practical pickup time for your Durrës hotel.",
      image: "/durres.webp",
      city: "Durrës",
      sections: [
        { title: "Hotel and city pickup", text: "Send your accommodation name or preferred meeting point. Your confirmed pickup accounts for traffic, the tour direction and any Golem collections." },
        { title: "Strong central-Albania access", text: "Durrës is especially practical for Berat, Krujë, Cape of Rodon, vineyards and the city’s own Roman and Adriatic heritage." },
        { title: "Clear before departure", text: "Route, group size, price, inclusions and payment method are shown before you book. Final availability arrives directly from the local operator." },
      ],
      faq: [
        { question: "Do you pick up from Durrës beach hotels?", answer: "Yes. Enter your hotel in the booking request and we will confirm the practical pickup point and time." },
        { question: "Is Durrës pickup included?", answer: "Pickup is included where stated on each tour. Check the selected tour page for its exact inclusions." },
        { question: "How do we pay?", answer: "Payment is cash only, paid to the guide on the day of the confirmed tour." },
      ],
    },
    sq: {
      eyebrow: "Marrje nga qyteti Adriatik",
      title: "Ture në Shqipëri nga Durrësi",
      seoTitle: "Ture nga Durrësi | Grupe të Vogla & Udhëtime Ditore",
      description: "Rezervoni ture nga Durrësi për 2–8 udhëtarë, me marrje në hotel, rezervim direkt në WhatsApp, çmime të publikuara dhe pagesë cash.",
      intro: "Qëndroni pranë Adriatikut dhe vizitoni kala, kantina, qytete UNESCO, lumenj e male. Ne konfirmojmë orarin më praktik për hotelin tuaj në Durrës.",
      image: "/durres.webp",
      city: "Durrës",
      sections: [
        { title: "Marrje në hotel ose qytet", text: "Dërgoni emrin e akomodimit ose pikën e takimit. Orari merr parasysh trafikun, drejtimin e turit dhe marrjet në Golem." },
        { title: "Akses i mirë në Shqipërinë e mesme", text: "Durrësi është veçanërisht praktik për Berat, Krujë, Kepin e Rodonit, kantinat dhe trashëgiminë romake të qytetit." },
        { title: "Gjithçka e qartë para nisjes", text: "Rruga, grupi, çmimi, përfshirjet dhe pagesa shfaqen para rezervimit. Disponueshmëria konfirmohet nga operatori." },
      ],
      faq: [
        { question: "A bëni marrje nga hotelet e plazhit?", answer: "Po. Shkruani hotelin në kërkesë dhe ne konfirmojmë pikën dhe orën." },
        { question: "A përfshihet marrja nga Durrësi?", answer: "Përfshihet aty ku shënohet në faqen e turit të zgjedhur." },
        { question: "Si paguajmë?", answer: "Pagesa bëhet vetëm cash te guida ditën e turit të konfirmuar." },
      ],
    },
    de: {
      eyebrow: "Abholung in Albaniens Adriastadt",
      title: "Albanien-Touren ab Durrës",
      seoTitle: "Albanien Touren ab Durrës | Kleine Gruppen",
      description: "Buchen Sie geführte Albanien-Touren ab Durrës für 2–8 Gäste mit Hotelabholung, WhatsApp-Buchung, sichtbaren Preisen und Barzahlung.",
      intro: "Wohnen Sie an der Adria und erreichen Sie Burgen, Weingüter, UNESCO-Städte, Flüsse und Berge. Wir bestätigen die sinnvollste Abholzeit für Ihr Hotel.",
      image: "/durres.webp",
      city: "Durrës",
      sections: [
        { title: "Abholung am Hotel oder in der Stadt", text: "Senden Sie Unterkunft oder Treffpunkt. Das bestätigte Zeitfenster berücksichtigt Verkehr, Fahrtrichtung und mögliche Abholungen in Golem." },
        { title: "Guter Zugang zu Mittelalbanien", text: "Durrës ist besonders praktisch für Berat, Krujë, Kap Rodon, Weingüter und das römisch-adriatische Erbe der Stadt." },
        { title: "Klarheit vor der Abfahrt", text: "Route, Gruppengröße, Preis, Leistungen und Zahlung stehen vor der Buchung fest. Die Verfügbarkeit bestätigt der lokale Anbieter." },
      ],
      faq: [
        { question: "Holen Sie an Strandhotels in Durrës ab?", answer: "Ja. Tragen Sie Ihr Hotel ein; wir bestätigen den besten Treffpunkt und die Zeit." },
        { question: "Ist die Abholung inklusive?", answer: "Wo dies auf der jeweiligen Tour angegeben ist, ja." },
        { question: "Wie bezahlen wir?", answer: "Ausschließlich bar beim Guide am Tag der bestätigten Tour." },
      ],
    },
    fr: {
      eyebrow: "Prise en charge sur l’Adriatique",
      title: "Circuits en Albanie depuis Durrës",
      seoTitle: "Circuits Albanie depuis Durrës | Petits Groupes",
      description: "Réservez des circuits guidés depuis Durrës pour 2 à 8 voyageurs avec hôtel, WhatsApp direct, prix affichés et paiement en espèces.",
      intro: "Séjournez sur l’Adriatique tout en découvrant châteaux, vignobles, villes UNESCO, rivières et montagnes. Nous confirmons l’horaire pratique pour votre hôtel.",
      image: "/durres.webp",
      city: "Durrës",
      sections: [
        { title: "Prise en charge à l’hôtel ou en ville", text: "Envoyez votre hébergement ou point de rendez-vous. L’horaire tient compte du trafic, de la direction et des prises en charge à Golem." },
        { title: "Accès idéal au centre du pays", text: "Durrës convient particulièrement à Berat, Krujë, cap Rodon, vignobles et patrimoine romain et adriatique." },
        { title: "Tout est clair avant le départ", text: "Itinéraire, groupe, prix, prestations et paiement sont visibles avant réservation. L’opérateur confirme la disponibilité." },
      ],
      faq: [
        { question: "Venez-vous aux hôtels de plage ?", answer: "Oui. Indiquez votre hôtel et nous confirmerons le point et l’heure pratiques." },
        { question: "La prise en charge est-elle incluse ?", answer: "Oui lorsqu’elle figure dans les prestations du circuit choisi." },
        { question: "Comment payer ?", answer: "Uniquement en espèces auprès du guide le jour du circuit confirmé." },
      ],
    },
  },
  "tours-from-golem": {
    en: {
      eyebrow: "Direct pickup from the resort coast",
      title: "Albania tours from Golem",
      seoTitle: "Albania Tours from Golem | Hotel Pickup & Day Trips",
      description: "Explore Albania from Golem with guided day tours for 2–8 travellers, direct resort pickup, WhatsApp booking and cash payment on the day.",
      intro: "Your beach stay can be the starting point for Berat, Krujë, vineyards, Cape of Rodon, Përmet, the Riviera and the north. Tell us your Golem hotel and we plan the pickup around the route.",
      image: "/cape-rodon.webp",
      city: "Golem",
      sections: [
        { title: "Made for hotel guests", text: "Golem properties stretch along the coast, so the exact hotel matters. We confirm a door-to-door or nearby meeting point rather than giving everyone one unrealistic time." },
        { title: "Nine routes, one direct contact", text: "Compare each day online, then use the same local WhatsApp number for availability, pickup confirmation and practical questions." },
        { title: "Small vehicles, not a coach", text: "Groups are limited to 2–8 travellers and normally use one or two vehicles, making hotel collection and road stops more manageable." },
      ],
      faq: [
        { question: "Which Golem hotels can you collect from?", answer: "Pickup can be arranged across the Golem resort area. Send the exact hotel name so we can confirm the point." },
        { question: "Are tours available every day?", answer: "Tours can be requested daily, subject to guide, vehicle and route availability." },
        { question: "Is advance card payment required?", answer: "No. The current payment method is cash to the guide on the day." },
      ],
    },
    sq: {
      eyebrow: "Marrje direkte nga zona turistike",
      title: "Ture në Shqipëri nga Golemi",
      seoTitle: "Ture nga Golemi | Marrje në Hotel & Udhëtime Ditore",
      description: "Eksploroni Shqipërinë nga Golemi me ture për 2–8 udhëtarë, marrje direkte, WhatsApp dhe pagesë cash ditën e turit.",
      intro: "Pushimet në plazh mund të nisin një ditë drejt Beratit, Krujës, kantinave, Kepit të Rodonit, Përmetit, Rivierës ose veriut. Na tregoni hotelin.",
      image: "/cape-rodon.webp",
      city: "Golem",
      sections: [
        { title: "Për mysafirët e hoteleve", text: "Hotelet e Golemit shtrihen përgjatë bregdetit. Ne konfirmojmë marrje te dera ose pikë pranë hotelit, jo një orar jorealist për të gjithë." },
        { title: "Nëntë rrugë, një kontakt", text: "Krahasoni ditët online dhe përdorni të njëjtin WhatsApp vendas për disponueshmëri, marrje dhe pyetje." },
        { title: "Mjete të vogla, jo autobus", text: "Grupet kanë 2–8 udhëtarë dhe zakonisht përdorin një ose dy mjete, duke e bërë marrjen dhe ndalesat më të lehta." },
      ],
      faq: [
        { question: "Nga cilat hotele në Golem bëni marrje?", answer: "Marrja organizohet në zonën turistike të Golemit. Dërgoni emrin e saktë të hotelit." },
        { question: "A ka ture çdo ditë?", answer: "Mund të kërkohen çdo ditë, sipas disponueshmërisë së guidës, mjetit dhe rrugës." },
        { question: "A kërkohet pagesë me kartë?", answer: "Jo. Pagesa aktuale bëhet cash te guida ditën e turit." },
      ],
    },
    de: {
      eyebrow: "Direkte Abholung an der Resortküste",
      title: "Albanien-Touren ab Golem",
      seoTitle: "Albanien Touren ab Golem | Hotelabholung",
      description: "Entdecken Sie Albanien ab Golem mit geführten Tagestouren für 2–8 Gäste, direkter Hotelabholung, WhatsApp und Barzahlung.",
      intro: "Vom Strandhotel nach Berat, Krujë, zu Weingütern, Kap Rodon, Përmet, Riviera oder in den Norden. Nennen Sie Ihr Hotel, wir planen die Abholung passend.",
      image: "/cape-rodon.webp",
      city: "Golem",
      sections: [
        { title: "Für Hotelgäste geplant", text: "Die Hotels liegen entlang der Küste. Wir bestätigen Abholung an der Tür oder einen nahen Treffpunkt statt einer unrealistischen Sammelzeit." },
        { title: "Neun Routen, ein direkter Kontakt", text: "Vergleichen Sie online und nutzen Sie dieselbe lokale WhatsApp-Nummer für Verfügbarkeit, Abholung und Fragen." },
        { title: "Kleine Fahrzeuge statt Reisebus", text: "Gruppen haben 2–8 Gäste und nutzen meist ein oder zwei Fahrzeuge. Hotelabholung und Stopps bleiben dadurch überschaubar." },
      ],
      faq: [
        { question: "Welche Hotels in Golem bedienen Sie?", answer: "Abholung ist im Resortgebiet möglich. Senden Sie den genauen Hotelnamen zur Bestätigung." },
        { question: "Finden Touren täglich statt?", answer: "Anfragen sind täglich möglich, abhängig von Guide, Fahrzeug und Route." },
        { question: "Ist Kartenvorauszahlung nötig?", answer: "Nein. Aktuell zahlen Sie am Tourtag bar beim Guide." },
      ],
    },
    fr: {
      eyebrow: "Prise en charge sur la côte hôtelière",
      title: "Circuits en Albanie depuis Golem",
      seoTitle: "Circuits Albanie depuis Golem | Départ Hôtel",
      description: "Explorez l’Albanie depuis Golem avec des excursions pour 2 à 8 personnes, prise en charge hôtel, WhatsApp et paiement en espèces.",
      intro: "Votre séjour balnéaire peut mener à Berat, Krujë, des vignobles, cap Rodon, Përmet, la Riviera ou le Nord. Indiquez votre hôtel et nous organisons l’horaire.",
      image: "/cape-rodon.webp",
      city: "Golem",
      sections: [
        { title: "Pensé pour les clients des hôtels", text: "Les établissements s’étendent le long de la côte. Nous confirmons une prise en charge à la porte ou un point proche adapté." },
        { title: "Neuf itinéraires, un contact direct", text: "Comparez en ligne puis utilisez le même WhatsApp local pour disponibilité, départ et questions pratiques." },
        { title: "Petits véhicules, pas d’autocar", text: "Les groupes comptent 2–8 voyageurs et utilisent généralement un ou deux véhicules, facilitant hôtels et arrêts." },
      ],
      faq: [
        { question: "Quels hôtels de Golem desservez-vous ?", answer: "La prise en charge est possible dans la zone hôtelière. Envoyez le nom exact pour confirmation." },
        { question: "Les excursions ont-elles lieu tous les jours ?", answer: "Elles peuvent être demandées chaque jour selon disponibilité du guide, du véhicule et de la route." },
        { question: "Faut-il payer par carte à l’avance ?", answer: "Non. Le paiement actuel se fait en espèces auprès du guide le jour même." },
      ],
    },
  },
  "private-tours-albania": {
    en: {
      eyebrow: "Your people · your confirmed vehicle",
      title: "Private tours in Albania",
      seoTitle: "Private Tours Albania for Couples, Families & Friends",
      description: "Plan a private Albania tour for 2–8 travellers with pickup from Tirana, Durrës or Golem, direct WhatsApp support and cash payment.",
      intro: "Keep the vehicle for your own couple, family or group of friends. Private availability depends on the route and date, and is confirmed directly before you reserve.",
      image: "/group-road.webp",
      privateOnly: true,
      sections: [
        { title: "Private means your group", text: "You are not added to a large coach. The vehicle, pickup plan and route conversation stay focused on the people named in your request." },
        { title: "Useful flexibility, honest limits", text: "A private day allows sensible adjustments for pickup, comfort stops and pace. Monument hours, road conditions and the core itinerary still shape the day." },
        { title: "Direct planning on WhatsApp", text: "Send traveller count, date, hotel and preferred journey. We reply with availability, vehicle details and the confirmed total before departure." },
      ],
      faq: [
        { question: "What group sizes can book privately?", answer: "Private requests are available for 2–8 travellers, depending on the selected experience and vehicle availability." },
        { question: "Can we customise every stop?", answer: "Reasonable changes can be discussed, but drive times, opening hours, weather and safety determine what fits responsibly." },
        { question: "Are private tours paid online?", answer: "No. Current confirmed tours are paid in cash to the guide on the day." },
      ],
    },
    sq: {
      eyebrow: "Grupi juaj · mjeti juaj",
      title: "Ture private në Shqipëri",
      seoTitle: "Ture Private në Shqipëri për Çifte, Familje & Miq",
      description: "Planifikoni tur privat për 2–8 udhëtarë me nisje nga Tirana, Durrësi ose Golemi, WhatsApp direkt dhe pagesë cash.",
      intro: "Mbajeni mjetin vetëm për çiftin, familjen ose miqtë tuaj. Disponueshmëria private varet nga rruga dhe data dhe konfirmohet direkt.",
      image: "/group-road.webp",
      privateOnly: true,
      sections: [
        { title: "Privat do të thotë grupi juaj", text: "Nuk bashkoheni me autobus të madh. Mjeti, marrja dhe biseda për rrugën fokusohen te personat në kërkesën tuaj." },
        { title: "Fleksibilitet i dobishëm, kufij të sinqertë", text: "Dita private lejon përshtatje për marrjen, pushimet dhe ritmin. Oraret, rruga dhe itinerari bazë mbeten përcaktues." },
        { title: "Planifikim direkt në WhatsApp", text: "Dërgoni numrin e personave, datën, hotelin dhe turin. Ne përgjigjemi me disponueshmëri, mjet dhe total të konfirmuar." },
      ],
      faq: [
        { question: "Sa persona mund të rezervojnë privatisht?", answer: "Kërkesat private pranohen për 2–8 udhëtarë, sipas eksperiencës dhe mjetit." },
        { question: "A mund të ndryshojmë çdo ndalesë?", answer: "Ndryshimet e arsyeshme diskutohen, por rruga, oraret, moti dhe siguria përcaktojnë çfarë është e mundur." },
        { question: "A paguhen online?", answer: "Jo. Turet e konfirmuara paguhen cash te guida ditën e turit." },
      ],
    },
    de: {
      eyebrow: "Ihre Menschen · Ihr Fahrzeug",
      title: "Private Touren in Albanien",
      seoTitle: "Private Touren Albanien für Paare, Familien & Freunde",
      description: "Planen Sie eine private Albanien-Tour für 2–8 Gäste ab Tirana, Durrës oder Golem mit WhatsApp-Support und Barzahlung.",
      intro: "Das Fahrzeug bleibt bei Ihrem Paar, Ihrer Familie oder Freundesgruppe. Private Verfügbarkeit hängt von Route und Datum ab und wird direkt bestätigt.",
      image: "/group-road.webp",
      privateOnly: true,
      sections: [
        { title: "Privat bedeutet Ihre Gruppe", text: "Sie werden keinem großen Bus zugeteilt. Fahrzeug, Abholung und Routenabstimmung konzentrieren sich auf die Personen Ihrer Anfrage." },
        { title: "Sinnvolle Flexibilität, ehrliche Grenzen", text: "Abholung, Pausen und Tempo lassen sich anpassen. Öffnungszeiten, Straßen, Wetter und Kernroute bestimmen weiterhin den Tag." },
        { title: "Direkte Planung per WhatsApp", text: "Senden Sie Gästezahl, Datum, Hotel und Wunschtour. Wir antworten mit Verfügbarkeit, Fahrzeug und bestätigtem Gesamtpreis." },
      ],
      faq: [
        { question: "Welche Gruppengrößen sind privat möglich?", answer: "Private Anfragen sind für 2–8 Gäste möglich, abhängig von Erlebnis und Fahrzeug." },
        { question: "Können wir alle Stopps ändern?", answer: "Sinnvolle Änderungen sind möglich; Fahrzeiten, Öffnungszeiten, Wetter und Sicherheit setzen Grenzen." },
        { question: "Wird online bezahlt?", answer: "Nein. Bestätigte Touren werden am Reisetag bar beim Guide bezahlt." },
      ],
    },
    fr: {
      eyebrow: "Vos proches · votre véhicule",
      title: "Circuits privés en Albanie",
      seoTitle: "Circuits Privés Albanie pour Couples, Familles & Amis",
      description: "Organisez un circuit privé en Albanie pour 2 à 8 voyageurs depuis Tirana, Durrës ou Golem avec WhatsApp et paiement en espèces.",
      intro: "Gardez le véhicule pour votre couple, famille ou groupe d’amis. La disponibilité privée dépend de l’itinéraire et de la date et se confirme directement.",
      image: "/group-road.webp",
      privateOnly: true,
      sections: [
        { title: "Privé signifie votre groupe", text: "Vous ne rejoignez pas un grand autocar. Véhicule, prise en charge et échange sur l’itinéraire restent centrés sur les personnes de votre demande." },
        { title: "Souplesse utile, limites honnêtes", text: "Une journée privée permet d’ajuster départ, pauses et rythme. Horaires, routes, météo et itinéraire principal structurent toujours la journée." },
        { title: "Organisation directe sur WhatsApp", text: "Envoyez nombre, date, hôtel et voyage souhaité. Nous répondons avec disponibilité, véhicule et total confirmé." },
      ],
      faq: [
        { question: "Quels groupes peuvent réserver en privé ?", answer: "Les demandes privées sont possibles pour 2–8 voyageurs selon l’expérience et le véhicule." },
        { question: "Peut-on modifier chaque étape ?", answer: "Des changements raisonnables sont possibles, mais route, horaires, météo et sécurité déterminent ce qui tient dans la journée." },
        { question: "Le paiement se fait-il en ligne ?", answer: "Non. Les circuits confirmés sont payés en espèces au guide le jour même." },
      ],
    },
  },
  "small-group-albania-tours": {
    en: {
      eyebrow: "Minimum 2 · maximum 8 travellers",
      title: "Small-group tours across Albania",
      seoTitle: "Small-Group Albania Tours for 2–8 Travellers",
      description: "Discover Albania in a group of 2–8 with local guides, one or two vehicles, pickup from Tirana, Durrës or Golem and direct WhatsApp booking.",
      intro: "Small enough for conversation, flexible road stops and a genuine local connection. Every journey has a minimum of 2 and a maximum of 8 travellers.",
      image: "/theth.png",
      sections: [
        { title: "Human scale by design", text: "One or two vehicles replace the coach-tour routine. That means fewer delays, easier pickups and enough room for the guide to speak with everyone." },
        { title: "The group limit is clear", text: "A journey runs with at least 2 confirmed travellers and never more than 8 in the group described on this website." },
        { title: "Local confirmation matters", text: "Availability is not generated by an anonymous booking engine. The operator checks date, vehicle, guide and pickup route before confirming." },
      ],
      faq: [
        { question: "Will there ever be more than 8 travellers?", answer: "No. Tours advertised here are limited to a maximum of 8 travellers." },
        { question: "How many vehicles are used?", answer: "Depending on the group and route, the day uses one or two suitable vehicles." },
        { question: "Can a family book the whole group?", answer: "Yes. Families and groups of friends can request a private departure for 2–8 people where private availability is offered." },
      ],
    },
    sq: {
      eyebrow: "Minimumi 2 · maksimumi 8 udhëtarë",
      title: "Ture në grupe të vogla në Shqipëri",
      seoTitle: "Ture në Grup të Vogël në Shqipëri për 2–8 Persona",
      description: "Zbuloni Shqipërinë në grup 2–8 persona me guida vendase, një ose dy mjete, nisje nga Tirana, Durrësi ose Golemi dhe WhatsApp.",
      intro: "Mjaftueshëm i vogël për biseda, ndalesa fleksibël dhe lidhje reale me vendin. Çdo udhëtim ka minimumi 2 dhe maksimumi 8 persona.",
      image: "/theth.png",
      sections: [
        { title: "Përmasa njerëzore", text: "Një ose dy mjete zëvendësojnë autobusin e madh. Ka më pak vonesa, marrje më të lehta dhe guida flet me të gjithë." },
        { title: "Kufiri është i qartë", text: "Udhëtimi zhvillohet me të paktën 2 persona të konfirmuar dhe kurrë më shumë se 8 në grup." },
        { title: "Konfirmim vendas", text: "Disponueshmëria nuk gjenerohet nga sistem anonim. Operatori kontrollon datën, mjetin, guidën dhe rrugën e marrjes." },
      ],
      faq: [
        { question: "A do të ketë më shumë se 8 persona?", answer: "Jo. Turet e publikuara këtu kufizohen në maksimumi 8 udhëtarë." },
        { question: "Sa mjete përdoren?", answer: "Sipas grupit dhe rrugës, përdoren një ose dy mjete të përshtatshme." },
        { question: "A mund ta rezervojë familja gjithë grupin?", answer: "Po. Familjet dhe miqtë mund të kërkojnë nisje private për 2–8 persona kur ofrohet." },
      ],
    },
    de: {
      eyebrow: "Mindestens 2 · höchstens 8 Gäste",
      title: "Kleingruppentouren durch Albanien",
      seoTitle: "Albanien Kleingruppentouren für 2–8 Reisende",
      description: "Erleben Sie Albanien mit 2–8 Gästen, lokalen Guides, ein oder zwei Fahrzeugen, Abholung in Tirana, Durrës oder Golem und WhatsApp.",
      intro: "Klein genug für Gespräche, flexible Stopps und echte lokale Verbindung. Jede Reise hat mindestens 2 und höchstens 8 Gäste.",
      image: "/theth.png",
      sections: [
        { title: "Bewusst menschlicher Maßstab", text: "Ein oder zwei Fahrzeuge ersetzen den großen Reisebus. Weniger Verzögerungen, leichtere Abholung und Gespräche mit allen Gästen." },
        { title: "Klare Gruppengrenze", text: "Eine Reise startet mit mindestens 2 bestätigten Personen und hat nie mehr als 8 Gäste." },
        { title: "Lokale Bestätigung zählt", text: "Kein anonymes Buchungssystem verspricht Verfügbarkeit. Der Anbieter prüft Datum, Fahrzeug, Guide und Abholroute." },
      ],
      faq: [
        { question: "Sind jemals mehr als 8 Gäste dabei?", answer: "Nein. Die hier angebotenen Touren sind auf maximal 8 Reisende begrenzt." },
        { question: "Wie viele Fahrzeuge werden genutzt?", answer: "Je nach Gruppe und Route kommen ein oder zwei geeignete Fahrzeuge zum Einsatz." },
        { question: "Kann eine Familie privat buchen?", answer: "Ja. Familien und Freunde können, wo angeboten, eine private Abfahrt für 2–8 Personen anfragen." },
      ],
    },
    fr: {
      eyebrow: "Minimum 2 · maximum 8 voyageurs",
      title: "Circuits en petit groupe en Albanie",
      seoTitle: "Circuits Albanie en Petit Groupe pour 2–8 Voyageurs",
      description: "Découvrez l’Albanie à 2–8 avec guides locaux, un ou deux véhicules, départ de Tirana, Durrës ou Golem et réservation WhatsApp.",
      intro: "Assez petit pour échanger, s’arrêter facilement et rencontrer réellement le pays. Chaque voyage accueille de 2 à 8 personnes.",
      image: "/theth.png",
      sections: [
        { title: "Une échelle volontairement humaine", text: "Un ou deux véhicules remplacent le grand autocar. Moins d’attente, prises en charge faciles et échanges avec tous les voyageurs." },
        { title: "Une limite claire", text: "Le voyage part avec au moins 2 personnes confirmées et ne dépasse jamais 8 voyageurs." },
        { title: "Une confirmation locale", text: "Pas de disponibilité promise par un moteur anonyme. L’opérateur vérifie date, véhicule, guide et parcours de prise en charge." },
      ],
      faq: [
        { question: "Y aura-t-il plus de 8 voyageurs ?", answer: "Non. Les circuits proposés ici sont limités à 8 personnes maximum." },
        { question: "Combien de véhicules sont utilisés ?", answer: "Selon le groupe et la route, un ou deux véhicules adaptés sont prévus." },
        { question: "Une famille peut-elle privatiser ?", answer: "Oui. Familles et amis peuvent demander un départ privé pour 2–8 personnes lorsqu’il est disponible." },
      ],
    },
  },
};

export function getSearchLanding(slug: string, locale: Locale) {
  if (!searchLandingSlugs.includes(slug as SearchLandingSlug)) return null;
  return content[slug as SearchLandingSlug][locale];
}
