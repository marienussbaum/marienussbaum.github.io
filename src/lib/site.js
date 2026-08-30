// Constantes du site — un seul endroit pour les coordonnées et les rubriques.
import textesRubriques from '../data/rubriques.json';
export const SITE_URL = 'https://marienussbaum.com';
export const DOCTOLIB = 'https://www.doctolib.fr/psychologue/paris/marie-nussbaum';
export const LINKEDIN = 'https://www.linkedin.com/in/marienussbaum/';
// Téléphone et e-mail volontairement stockés à l'envers : affichés par script,
// illisibles pour les robots collecteurs (cf. mentions légales, décision du 29/08).
export const PHONE_REV = '77 58 57 90 6)0( 33+';
export const EMAIL_REV = 'moc.liamg@muabssun.liame';
export const ADELI = '10110326005';

// Les 10 rubriques du blog (fusion des 45 anciennes categories, validee le 29/08).
// Les adresses (slugs) restent ici : ce sont des URL publiques, elles ne doivent
// pas bouger. Les noms et les presentations vivent dans ../data/rubriques.json,
// modifiables par Marie depuis l'espace d'edition.
const SLUGS = [
  ['enfance-et-parentalite', 'childhood-and-parenthood'],
  ['adolescents', 'adolescence'],
  ['couple-et-liens', 'couples-and-bonds'],
  ['hpi-et-douance', 'giftedness'],
  ['travail-et-burn-out', 'work-and-burnout'],
  ['corps-et-maladie', 'body-and-illness'],
  ['deuil-et-grand-age', 'grief-and-old-age'],
  ['insolites', 'curiosities'],
  ['psychanalyse-et-societe', 'psychoanalysis-and-society'],
  ['expatriation', 'expat-lives'],
];
export const CATEGORIES = SLUGS.map(([fr, en]) => ({ fr, en, ...textesRubriques[fr] }));

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
