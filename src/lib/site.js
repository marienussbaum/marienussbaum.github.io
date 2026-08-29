// Constantes du site — un seul endroit pour les coordonnées et les rubriques.
export const SITE_URL = 'https://marienussbaum.com';
export const DOCTOLIB = 'https://www.doctolib.fr/psychologue/paris/marie-nussbaum';
export const LINKEDIN = 'https://www.linkedin.com/in/marienussbaum/';
// Téléphone et e-mail volontairement stockés à l'envers : affichés par script,
// illisibles pour les robots collecteurs (cf. mentions légales, décision du 29/08).
export const PHONE_REV = '77 58 57 90 6)0( 33+';
export const EMAIL_REV = 'moc.liamg@muabssun.liame';
export const ADELI = '10110326005';

// Les 10 rubriques du blog (fusion des 45 anciennes catégories, validée le 29/08).
export const CATEGORIES = [
  { fr: 'enfance-et-parentalite',  en: 'childhood-and-parenthood',   nameFr: 'Enfance & parentalité',  nameEn: 'Childhood & parenthood',
    introFr: 'Grandir ne va jamais de soi. Colères, jeu, séparations, écrans, autisme, adoption : ce que traversent les enfants — et ceux qui les accompagnent.',
    introEn: 'Growing up is never a given. Tantrums, play, separations, screens, autism, adoption: what children go through — and those who walk with them.' },
  { fr: 'adolescents', en: 'adolescence', nameFr: 'Adolescents', nameEn: 'Adolescence',
    introFr: 'Entre deux âges, tout se rejoue : le corps, l’appartenance, l’orientation. Des textes sur ces années où l’on se cherche — parfois bruyamment, parfois en silence.',
    introEn: 'Between two ages everything is replayed: the body, belonging, direction. Essays on the years when we search for ourselves — sometimes loudly, sometimes in silence.' },
  { fr: 'couple-et-liens', en: 'couples-and-bonds', nameFr: 'Couple & liens', nameEn: 'Couples & bonds',
    introFr: 'Aimer, s’attacher, se séparer, se retrouver. Le couple comme lieu où le passé insiste — et où quelque chose peut se réparer.',
    introEn: 'Loving, attaching, separating, finding one another again. The couple as the place where the past insists — and where something can be repaired.' },
  { fr: 'hpi-et-douance', en: 'giftedness', nameFr: 'HPI & douance', nameEn: 'Giftedness',
    introFr: 'Au-delà des chiffres du QI : ce que vivre avec une pensée vive veut dire, pour l’enfant comme pour l’adulte.',
    introEn: 'Beyond IQ scores: what living with a quick mind actually means, for children and adults alike.' },
  { fr: 'travail-et-burn-out', en: 'work-and-burnout', nameFr: 'Travail & burn-out', nameEn: 'Work & burnout',
    introFr: 'L’épuisement n’est pas une faiblesse : c’est un signal. Sur la charge, l’idéal professionnel et le monde de l’hyper-responsabilité.',
    introEn: 'Exhaustion is not weakness: it is a signal. On workload, professional ideals and the world of high responsibility.' },
  { fr: 'corps-et-maladie', en: 'body-and-illness', nameFr: 'Corps & maladie', nameEn: 'Body & illness',
    introFr: 'Quand le corps parle à la place des mots : maladie, addictions, troubles alimentaires, rituels — et ce que le soin psychique peut en entendre.',
    introEn: 'When the body speaks in place of words: illness, addictions, eating disorders, rituals — and what psychic care can hear in them.' },
  { fr: 'deuil-et-grand-age', en: 'grief-and-old-age', nameFr: 'Deuil & grand âge', nameEn: 'Grief & old age',
    introFr: 'Perdre, vieillir, transmettre. Des textes sur ce que le temps fait aux liens, et sur les deuils — y compris ceux qui n’ont pas de rituel.',
    introEn: 'Losing, ageing, passing on. Essays on what time does to our bonds, and on mourning — including the kinds that come without ritual.' },
  { fr: 'insolites', en: 'curiosities', nameFr: 'Insolites', nameEn: 'Curiosities',
    introFr: 'La clinique hors les murs : astronautes, marins solitaires, expertise psychiatrique, quérulence. Des terrains inattendus qui éclairent le psychisme ordinaire.',
    introEn: 'The clinic beyond its walls: astronauts, solo sailors, forensic psychiatry, querulousness. Unexpected terrains that light up the ordinary psyche.' },
  { fr: 'psychanalyse-et-societe', en: 'psychoanalysis-and-society', nameFr: 'Psychanalyse & société', nameEn: 'Psychoanalysis & society',
    introFr: 'Ce que l’époque fait au psychisme — écrans, IA, canicules, faits divers — lu avec les outils de la psychanalyse.',
    introEn: 'What the times do to the psyche — screens, AI, heatwaves, the news — read with the tools of psychoanalysis.' },
  { fr: 'expatriation', en: 'expat-lives', nameFr: 'Expatriation & vies internationales', nameEn: 'Expat & international lives',
    introFr: 'Changer de pays, de langue, de place : la clinique transculturelle des vies internationales, au cabinet comme en visio.',
    introEn: 'Changing countries, languages, place: transcultural work with international lives, in the consulting room or online.' },
];

export function catBySlug(lang, slug) {
  return CATEGORIES.find((c) => c[lang] === slug);
}
export function catName(lang, frSlug) {
  const c = CATEGORIES.find((x) => x.fr === frSlug || x.en === frSlug);
  return c ? (lang === 'fr' ? c.nameFr : c.nameEn) : frSlug;
}
export function catUrl(lang, anySlug) {
  const c = CATEGORIES.find((x) => x.fr === anySlug || x.en === anySlug);
  return c ? `/${lang}/categories/${c[lang]}/` : `/${lang}/blog/`;
}

export function fmtDate(lang, d) {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}

// Paires de pages fixes pour le sélecteur de langue et les hreflang.
export const PAGE_PAIRS = {
  '/fr/': '/en/', '/fr/blog/': '/en/blog/', '/fr/contact/': '/en/contact/',
  '/fr/mentions-legales/': '/en/legal/',
  '/fr/authors/marie-nussbaum/': '/en/authors/marie-nussbaum/',
};
export function altOf(path) {
  if (PAGE_PAIRS[path]) return PAGE_PAIRS[path];
  const inv = Object.fromEntries(Object.entries(PAGE_PAIRS).map(([a, b]) => [b, a]));
  return inv[path] ?? null;
}
