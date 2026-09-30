import { defineMessages } from '@openedx/frontend-base';

const messages = defineMessages({
  'ans.page.title': {
    id: 'ans.page.title',
    defaultMessage: 'Accord de niveau de service (ANS) | {siteName}',
    description: 'Titre du document pour la page ANS',
  },
  'ans.header.badge': {
    id: 'ans.header.badge',
    defaultMessage: 'Calcul Québec · Evolo',
    description: 'Badge d\'en-tête pour la page ANS',
  },
  'ans.heading': {
    id: 'ans.heading',
    defaultMessage: 'Accord de niveau de service',
    description: 'Titre principal pour la page ANS',
  },
  'ans.subheading': {
    id: 'ans.subheading',
    defaultMessage: 'Evolo',
    description: 'Sous-titre de la plateforme pour la page ANS',
  },
  'ans.version': {
    id: 'ans.version',
    defaultMessage: 'V1.0, 30 septembre 2026',
    description: 'Version et date du document ANS',
  },
  'ans.toc.title': {
    id: 'ans.toc.title',
    defaultMessage: 'Sommaire',
    description: 'Titre de la table des matières',
  },
  'ans.toc.item1': {
    id: 'ans.toc.item1',
    defaultMessage: '1 – Introduction',
    description: 'Entrée sommaire 1',
  },
  'ans.toc.item2': {
    id: 'ans.toc.item2',
    defaultMessage: '2 – Définitions',
    description: 'Entrée sommaire 2',
  },
  'ans.toc.item3': {
    id: 'ans.toc.item3',
    defaultMessage: '3 – Conditions d\u2019utilisation spécifiques à Evolo',
    description: 'Entrée sommaire 3',
  },
  'ans.toc.item4': {
    id: 'ans.toc.item4',
    defaultMessage: '4 – Niveau de service - Evolo',
    description: 'Entrée sommaire 4',
  },
  'ans.toc.item5': {
    id: 'ans.toc.item5',
    defaultMessage: '5 – Propriété intellectuelle',
    description: 'Entrée sommaire 5',
  },
  'ans.toc.item6': {
    id: 'ans.toc.item6',
    defaultMessage: '6 – Dispositions finales',
    description: 'Entrée sommaire 6',
  },
  'ans.toc.item7': {
    id: 'ans.toc.item7',
    defaultMessage: "7 – Acceptation de l'accord",
    description: 'Entrée sommaire 7',
  },

  // Section 1: Introduction
  'ans.section1.title': {
    id: 'ans.section1.title',
    defaultMessage: '1 – Introduction',
    description: 'Titre de la section 1',
  },
  'ans.section1.p1': {
    id: 'ans.section1.p1',
    defaultMessage: "Ce document contient l\u2019accord de niveau de service (\u00AB\u00A0ANS\u00A0\u00BB) régissant l\u2019utilisation d\u2019\u00ABEvolo\u00BB, la plateforme de formation asynchrone de Calcul Québec. Conformément aux conditions d\u2019utilisation de CQ\u00B9, cet ANS comprend des conditions d\u2019utilisation supplémentaires spécifiques à Evolo et définit le niveau de service spécifique qui Vous est offert. Cet ANS est conclu entre Calcul Québec (\u00AB\u00A0CQ\u00A0\u00BB) et Vous. Cet ANS entre en vigueur lorsque Vous acceptez ces conditions ou lorsque Vous utilisez pour la première fois Evolo.",
    description: 'Contenu du paragraphe 1 de la section 1',
  },
  'ans.section1.footnote': {
    id: 'ans.section1.footnote',
    defaultMessage: '\u00B9\u00A0{url}',
    description: 'Note de bas de page avec URL des conditions d\'utilisation',
  },

  // Section 2: Définitions
  'ans.section2.title': {
    id: 'ans.section2.title',
    defaultMessage: '2 – Définitions',
    description: 'Titre de la section 2',
  },
  'ans.section2.p1': {
    id: 'ans.section2.p1',
    defaultMessage: "Les termes relatifs à la sécurité de l\u2019information sont disponibles dans le {glossaryLink}\u00B2.",
    description: 'Contenu du paragraphe de la section 2',
  },
  'ans.section2.glossaryLinkText': {
    id: 'ans.section2.glossaryLinkText',
    defaultMessage: "Glossaire de la sécurité de l\u2019information de CQ",
    description: 'Texte du lien vers le glossaire de CQ',
  },
  'ans.section2.footnote': {
    id: 'ans.section2.footnote',
    defaultMessage: '\u00B2\u00A0{url}',
    description: 'Note de bas de page avec URL du glossaire',
  },

  // Section 3: Conditions d'utilisation spécifiques à Evolo
  'ans.section3.title': {
    id: 'ans.section3.title',
    defaultMessage: '3 – Conditions d\u2019utilisation spécifiques à Evolo',
    description: 'Titre de la section 3',
  },
  'ans.section3.p1': {
    id: 'ans.section3.p1',
    defaultMessage: "Cet ANS est une extension des Conditions d\u2019utilisation de CQ et, en tant que tel, Vous devez vous conformer aux termes et conditions définis à la fois dans cet ANS et dans les Conditions d\u2019utilisation de CQ.",
    description: 'Section 3 paragraphe 1',
  },
  'ans.section3.p2': {
    id: 'ans.section3.p2',
    defaultMessage: "Evolo est conçu pour offrir du contenu de formation. Les ressources informatiques disponibles via ce service ne peuvent pas être utilisées à des fins autres, telles que des fins de recherche, de développement, de calcul, ou de stockage de données. Toutes les données stockées sur Evolo peuvent être détruites à tout moment.",
    description: 'Section 3 paragraphe 2',
  },
  'ans.section3.p3': {
    id: 'ans.section3.p3',
    defaultMessage: "L\u2019accès à Evolo se fait via un service d\u2019authentification tiers qui délègue l\u2019authentification à votre établissement éducatif associé. La plateforme ne stocke pas et n\u2019a pas accès à votre mot de passe. À moins d\u2019entente particulière, l\u2019accès est réservé à des personnes associées à des établissements d\u2019éducation canadiens. Il est attendu que vous seul accédiez à votre compte d\u2019Evolo pour atteindre les objectifs d\u2019apprentissage et l\u2019obtention d\u2019attestations qui en découlent. Si vous perdez accès à votre compte de votre établissement, vous n\u2019aurez plus accès à Evolo et à son contenu.",
    description: 'Section 3 paragraphe 3',
  },
  'ans.section3.p4': {
    id: 'ans.section3.p4',
    defaultMessage: "Afin d\u2019offrir le service Evolo, Calcul Québec doit collecter et utiliser certains renseignements personnels, incluant votre nom, votre identifiant de compte, votre courriel, vos préférences de communication, votre profil académique, votre progression d\u2019apprentissage, ainsi que des journaux d\u2019activité. Ces renseignements personnels peuvent être utilisés par CQ à des fins de statistiques, d\u2019analyse d\u2019apprentissage et d\u2019amélioration continue du service ou de son contenu, et pour produire des documents ou des communications vous étant destinés. Votre nom d\u2019utilisateur sur la plateforme ainsi que les échanges que vous pourriez avoir dans le forum de discussion intégré sont visibles par les autres utilisateurs de la plateforme. Les attestations obtenues dans le cadre des cours sont vérifiables et accessibles publiquement si vous en partagez le lien. Votre courriel peut être utilisé conformément à vos préférences de communications.",
    description: 'Section 3 paragraphe 4',
  },
  'ans.section3.p5': {
    id: 'ans.section3.p5',
    defaultMessage: "En acceptant cet accord de niveau de service pour Evolo, Vous donnez également Votre consentement auprès de Calcul Québec pour collecter et utiliser les Renseignements Personnels selon les modalités établies dans la présente entente.",
    description: 'Section 3 paragraphe 5',
  },
  'ans.section3.p6': {
    id: 'ans.section3.p6',
    defaultMessage: "L\u2019utilisation d\u2019Evolo est réservée à des fins personnelles et non commerciales, à moins d\u2019entente à cet effet avec CQ. Si vous souhaitez en faire l\u2019utilisation à des fins académiques, il faut obtenir l\u2019autorisation de Calcul Québec. Une utilisation académique comprend l\u2019utilisation dans le cadre de l\u2019enseignement de cours, ainsi que dans le cadre de projets de recherche universitaire à but non lucratif. L\u2019utilisation académique exclut toute activité commerciale.",
    description: 'Section 3 paragraphe 6',
  },

  // Section 4: Niveau de service - Evolo
  'ans.section4.title': {
    id: 'ans.section4.title',
    defaultMessage: '4 – Niveau de service - Evolo',
    description: 'Titre de la section 4',
  },
  'ans.section4.betaTag': {
    id: 'ans.section4.betaTag',
    defaultMessage: 'Disponibilité en mode bêta',
    description: 'Indicateur de statut bêta',
  },
  'ans.section4.p1': {
    id: 'ans.section4.p1',
    defaultMessage: "Evolo est disponible en mode beta, sans garantie de disponibilité à long terme. Le service peut être interrompu sans préavis.",
    description: 'Section 4 paragraphe 1',
  },
  'ans.section4.intro': {
    id: 'ans.section4.intro',
    defaultMessage: 'Le service Evolo permet de',
    description: 'Introduction à la liste des fonctionnalités du service Evolo',
  },
  'ans.section4.feature1': {
    id: 'ans.section4.feature1',
    defaultMessage: "consulter à votre rythme du contenu textuel, imagé et vidéo autorisé par Calcul Québec",
    description: 'Fonctionnalité 1 du service Evolo',
  },
  'ans.section4.feature2': {
    id: 'ans.section4.feature2',
    defaultMessage: "accéder à un environnement d\u2019apprentissage semblable à celui d\u2019une grappe de calcul",
    description: 'Fonctionnalité 2 du service Evolo',
  },
  'ans.section4.feature3': {
    id: 'ans.section4.feature3',
    defaultMessage: "exécuter du code dans le cadre d\u2019exercices interactifs",
    description: 'Fonctionnalité 3 du service Evolo',
  },
  'ans.section4.feature4': {
    id: 'ans.section4.feature4',
    defaultMessage: "répondre à des quiz pour évaluer votre compréhension",
    description: 'Fonctionnalité 4 du service Evolo',
  },
  'ans.section4.feature5': {
    id: 'ans.section4.feature5',
    defaultMessage: "consulter votre progression et obtenir des attestations",
    description: 'Fonctionnalité 5 du service Evolo',
  },
  'ans.section4.feature6': {
    id: 'ans.section4.feature6',
    defaultMessage: "échanger avec d\u2019autres étudiants et instructeurs",
    description: 'Fonctionnalité 6 du service Evolo',
  },
  'ans.section4.access': {
    id: 'ans.section4.access',
    defaultMessage: "Toutes les composantes du service sont accessibles via le {siteLink}. Le soutien lié au service peut être obtenu via le lien \u00AB\u00A0Nous contacter\u00A0\u00BB en bas de la page du site web du service.",
    description: 'Section 4 accès au site web et soutien',
  },
  'ans.section4.siteLinkText': {
    id: 'ans.section4.siteLinkText',
    defaultMessage: "site web du service\u00B3",
    description: 'Texte du lien vers le site web du service',
  },
  'ans.section4.footnote': {
    id: 'ans.section4.footnote',
    defaultMessage: '\u00B3\u00A0{url}',
    description: 'Note de bas de page avec URL du site Evolo',
  },

  // Section 5: Propriété intellectuelle
  'ans.section5.title': {
    id: 'ans.section5.title',
    defaultMessage: '5 – Propriété intellectuelle',
    description: 'Titre de la section 5',
  },
  'ans.section5.p1': {
    id: 'ans.section5.p1',
    defaultMessage: "À moins qu\u2019une licence plus permissive ne soit explicitement associée à un sous-ensemble du matériel pédagogique, la totalité du matériel disponible sur Evolo est la propriété de Calcul Québec. Toute reproduction complète ou partielle du contenu pédagogique, des vidéos, audios et des éléments visuels de la plateforme Evolo est interdite sans autorisation écrite de la part de Calcul Québec. Une autorisation supplémentaire de la part d\u2019un tiers pourrait être requise si le matériel à reproduire provient d\u2019une collaboration.",
    description: 'Section 5 paragraphe 1',
  },

  // Section 6: Dispositions finales
  'ans.section6.title': {
    id: 'ans.section6.title',
    defaultMessage: '6 – Dispositions finales',
    description: 'Titre de la section 6',
  },
  'ans.section6.p1': {
    id: 'ans.section6.p1',
    defaultMessage: "CQ peut modifier les termes et conditions de cet ANS à tout moment. Si l\u2019une de ces modifications modifie matériellement Vos droits ou Votre utilisation d\u2019Evolo, CQ déploiera des efforts raisonnables pour Vous contacter, notamment en envoyant une notification à la ou aux adresses électroniques associées à votre compte. Dans certains cas, il pourra Vous être demandé d\u2019indiquer Votre consentement aux conditions révisées afin de continuer à accéder à Evolo. Sauf indication contraire, toute modification de cet ANS prendra effet lorsque Vous vous connecterez à nouveau à Votre compte. Si Vous n\u2019acceptez pas les conditions révisées, Votre seul et unique recours sera de cesser Votre utilisation d\u2019Evolo.",
    description: 'Section 6 paragraphe 1',
  },

  // Pied de page
  'ans.footer.backToTop': {
    id: 'ans.footer.backToTop',
    defaultMessage: 'Retour au haut de page',
    description: 'Lien de retour en haut de la page',
  },
  'ans.footer.meta': {
    id: 'ans.footer.meta',
    defaultMessage: 'version 1.0 · 30 septembre 2026',
    description: 'Note de bas de page de version',
  },

  // Section d'acceptation de l'ANS
  'ans.accept.banner.title': {
    id: 'ans.accept.banner.title',
    defaultMessage: "Action requise\u00A0: Acceptation de l\u2019accord de niveau de service (ANS)",
    description: "Titre de la bannière d'avertissement",
  },
  'ans.accept.banner.text': {
    id: 'ans.accept.banner.text',
    defaultMessage: "Pour continuer à utiliser la plateforme Evolo, vous devez lire et accepter cet accord. Veuillez faire défiler la page jusqu\u2019au formulaire au bas du document, ou cliquer sur le bouton ci-dessous pour y accéder directement.",
    description: "Bannière d'avertissement pour l'acceptation de l'ANS",
  },
  'ans.accept.banner.button': {
    id: 'ans.accept.banner.button',
    defaultMessage: "Aller au formulaire d\u2019acceptation en bas de page \u2193",
    description: "Bouton pour sauter à la section d'acceptation",
  },
  'ans.accept.card.title': {
    id: 'ans.accept.card.title',
    defaultMessage: "Acceptation de l\u2019accord de niveau de service",
    description: "Titre de la section d'acceptation",
  },
  'ans.accept.card.text': {
    id: 'ans.accept.card.text',
    defaultMessage: "Pour continuer à utiliser la plateforme Evolo, vous devez confirmer que vous avez lu et accepté les conditions de cet accord de niveau de service.",
    description: "Explication pour l'acceptation de l'ANS",
  },
  'ans.accept.checkbox.label': {
    id: 'ans.accept.checkbox.label',
    defaultMessage: "J\u2019ai lu et j\u2019accepte l\u2019accord de niveau de service (ANS).",
    description: "Libellé de la case à cocher pour accepter l'ANS",
  },
  'ans.accept.button.submit': {
    id: 'ans.accept.button.submit',
    defaultMessage: 'Accepter et continuer',
    description: "Bouton d'acceptation et de continuation",
  },
  'ans.accept.button.submitting': {
    id: 'ans.accept.button.submitting',
    defaultMessage: 'Enregistrement en cours...',
    description: "État de chargement du bouton d'acceptation",
  },
  'ans.accept.error.required': {
    id: 'ans.accept.error.required',
    defaultMessage: "Vous devez cocher la case pour accepter l\u2019accord avant de continuer.",
    description: "Message d'erreur si la case n'est pas cochée",
  },
  'ans.accept.error.general': {
    id: 'ans.accept.error.general',
    defaultMessage: "Une erreur est survenue lors de l\u2019enregistrement de votre acceptation. Veuillez réessayer.",
    description: "Message d'erreur générique",
  },
  'ans.accept.status.alreadyAccepted': {
    id: 'ans.accept.status.alreadyAccepted',
    defaultMessage: "Vous avez déjà accepté la version en vigueur de cet accord de niveau de service.",
    description: "Message confirmant que l'accord est déjà accepté",
  },
});

export default messages;
