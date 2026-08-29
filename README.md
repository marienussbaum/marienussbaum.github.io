# marienussbaum.com — refonte 2026

Site de Marie Nussbaum, psychologue clinicienne & psychanalyste, Paris 7ᵉ.
Astro v6, hébergé sur GitHub Pages derrière Cloudflare. Design « piste 4 — International, adouci ».

## Commandes

```bash
npm install        # une fois
npm run dev        # développement → http://localhost:4321
npm run build      # construit le site dans dist/
npm run preview    # sert dist/ pour vérification
```

## Ce que contient cette version

- **Page d'accueil** FR (`/fr/`) et EN (`/en/`) — design piste 4 validé le 29/08/2026.
- **92 articles** (46 FR + 46 EN) migrés depuis l'ancien site, **adresses inchangées à l'octet près**
  (accents et `--` compris) — vérifié contre le sitemap de production.
- **10 rubriques** (fusion des 45 anciennes catégories, table validée) avec intros éditoriales,
  compteurs, et bloc « À lire ensuite » automatique sous chaque article.
- **145 pages-relais** : anciennes catégories, doublons racine (`/blog/…`) et pagination
  redirigent vers la nouvelle arborescence (balise canonique + refresh). Hors sitemap.
- **Mentions légales** reprises mot pour mot avec les 4 retouches validées ; téléphone et e-mail
  assemblés par script partout (illisibles pour les robots collecteurs).
- SEO : canonical, hreflang fr/en/x-default, descriptions retravaillées (52 réécrites),
  Open Graph (photo du cabinet), JSON-LD Psychologist (sans téléphone, par choix), sitemap, robots.txt.
- La racine `/` renvoie vers `/fr/` (l'ancien site dupliquait l'anglais — le nouveau assume Paris d'abord).

## Mise en ligne (runbook)

1. Dépôt : `marienussbaum/marienussbaum.github.io` (branche `master` = production).
   Pages est configuré en source « GitHub Actions » : toute fusion dans `master`
   construit et met en ligne automatiquement (workflow `deploy.yml`).
2. Domaine : géré dans les réglages Pages (+ `public/CNAME` en ceinture-bretelles) ;
   Cloudflare devant, inchangé.
3. **CMS (édition en autonomie)** : `/admin` embarque Sveltia CMS. Pour activer la connexion :
   créer une *GitHub OAuth App* + déployer le worker
   [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) sur Cloudflare (10 min),
   puis renseigner `repo:` et `base_url:` dans `public/admin/config.yml`.
4. **Statistiques** : activer Cloudflare Web Analytics, coller le token dans
   `src/layouts/Base.astro` (bloc commenté).
5. **Google Search Console** : validation par DNS (Cloudflare), puis soumettre
   `https://marienussbaum.com/sitemap-index.xml`.
6. Après bascule : refaire un tour des pages clés, puis lancer la mise à jour de la fiche Google.

## Éditer le contenu

Un article = un fichier Markdown dans `src/content/blog/fr/` ou `en/` avec en-tête :
`title`, `description` (~155 caractères), `date`, `image`, `imageAlt`, `categories`
(liste de slugs de rubriques), `lang`, `slug` (**ne jamais changer après publication** : c'est
l'adresse), `translation` (chemin de la version jumelle), `featured` (accueil).
Les textes de l'accueil vivent dans `src/components/Home.astro` ; les rubriques et coordonnées
dans `src/lib/site.js`.
