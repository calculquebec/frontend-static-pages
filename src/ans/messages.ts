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
    defaultMessage: 'V1.0, 15 septembre 2026',
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
    defaultMessage: '3 – Conditions d’utilisation spécifiques à Evolo',
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

  // Section 1: Introduction
  'ans.section1.title': {
    id: 'ans.section1.title',
    defaultMessage: '1 – Introduction',
    description: 'Titre de la section 1',
  },
  'ans.section1.p1': {
    id: 'ans.section1.p1',
    defaultMessage: "Ce document contient l'accord de niveau de service (« ANS ») régissant l'utilisation d’«Evolo», la plateforme de formation asynchrone de Calcul Québec. Conformément aux conditions d'utilisation de CQ, cet ANS comprend des conditions d’utilisation supplémentaires spécifiques à Evolo et définit le niveau de service spécifique qui Vous est offert. Cet ANS est conclu entre Calcul Québec (« CQ ») et Vous. Cet ANS entre en vigueur lorsque Vous acceptez ces conditions ou lorsque Vous utilisez pour la première fois Evolo.",
    description: 'Contenu du paragraphe 1 de la section 1',
  },

  // Section 2: Définitions
  'ans.section2.title': {
    id: 'ans.section2.title',
    defaultMessage: '2 – Définitions',
    description: 'Titre de la section 2',
  },
  'ans.section2.p1': {
    id: 'ans.section2.p1',
    defaultMessage: "Les termes relatifs à la sécurité de l'information sont disponibles dans le {glossaryLink}.",
    description: 'Contenu du paragraphe de la section 2',
  },
  'ans.section2.glossaryLinkText': {
    id: 'ans.section2.glossaryLinkText',
    defaultMessage: "Glossaire de la sécurité de l'information de CQ",
    description: 'Texte du lien vers le glossaire de CQ',
  },
  'ans.section2.footnote': {
    id: 'ans.section2.footnote',
    defaultMessage: '1. {url}',
    description: 'Note de bas de page avec URL du glossaire',
  },

  // Section 3: Conditions d'utilisation spécifiques à Evolo
  'ans.section3.title': {
    id: 'ans.section3.title',
    defaultMessage: '3 – Conditions d’utilisation spécifiques à Evolo',
    description: 'Titre de la section 3',
  },
  'ans.section3.p1': {
    id: 'ans.section3.p1',
    defaultMessage: "Cet ANS est une extension des Conditions d'utilisation de CQ et, en tant que tel, Vous devez vous conformer aux termes et conditions définis à la fois dans cet ANS et dans les Conditions d'utilisation de CQ.",
    description: 'Section 3 paragraphe 1',
  },
  'ans.section3.p2': {
    id: 'ans.section3.p2',
    defaultMessage: 'Evolo est conçu pour offrir des unités de formation. Les ressources informatiques disponibles via ce service ne peuvent pas être utilisées à des fins autres, telles que des fins de recherche, de développement, de calcul, ou de stockage de données. Toutes les données stockées sur Evolo peuvent être détruites à tout moment.',
    description: 'Section 3 paragraphe 2',
  },
  'ans.section3.p3': {
    id: 'ans.section3.p3',
    defaultMessage: 'L’accès à Evolo se fait via un service d’authentification tiers du nom de CILogon, qui délègue l’authentification à votre établissement éducatif associé. La plateforme ne stocke pas et n’a pas accès à votre mot de passe. À moins d’entente particulière, l’accès est réservé à des personnes associées à des établissements d’éducation canadiens. Vous êtes responsable de la gestion de votre compte et vous êtes la seule personne autorisée à y accéder avec vos identifiants.',
    description: 'Section 3 paragraphe 3',
  },
  'ans.section3.p4': {
    id: 'ans.section3.p4',
    defaultMessage: 'Les données liées à votre compte, incluant votre nom, votre nom d’utilisateur, votre courriel, vos préférences de communication, votre statut académique et votre domaine de recherche, votre progression d’apprentissage, ainsi que des journaux d’activité, sont stockées dans une base de données interne à Evolo, et sauvegardées de façon encryptée. Ces informations peuvent être utilisées par CQ à des fins de statistiques, d’analyse d’apprentissage et d’amélioration continue du service ou de son contenu. Votre nom d’utilisateur sur la plateforme ainsi que les échanges que vous pourriez avoir dans le forum de discussion intégré sont visibles par les autres utilisateurs de la plateforme. Les attestations obtenues dans le cadre des cours sont vérifiables et accessibles publiquement si vous en partagez le lien sur vos médias sociaux. Votre courriel peut être utilisé conformément à vos préférences de communications.',
    description: 'Section 3 paragraphe 4',
  },
  'ans.section3.p5': {
    id: 'ans.section3.p5',
    defaultMessage: 'Les échanges et questions par courriel ou via la plateforme avec un membre de l’équipe de CQ pourraient être partagées et consultées au sein de l’équipe de CQ, afin d\'assurer un traitement optimal de votre demande et une amélioration continue du matériel pédagogique.',
    description: 'Section 3 paragraphe 5',
  },
  'ans.section3.p6': {
    id: 'ans.section3.p6',
    defaultMessage: 'L’utilisation d’Evolo est réservée à des fins personnelles et non commerciales, à moins d’entente à cet effet avec CQ. Si vous souhaitez en faire l’utilisation à des fins académiques, il faut en faire part à Calcul Québec. Une utilisation académique comprend l’utilisation dans le cadre de l’enseignement de cours, ainsi que dans le cadre de projets de recherche universitaire à but non lucratif. L\'utilisation académique exclut toute activité commerciale ou de conseil.',
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
    defaultMessage: 'Evolo est disponible en mode beta, sans garantie de disponibilité à long terme. Le service peut être interrompu sans préavis.',
    description: 'Section 4 paragraphe 1',
  },

  // Section 5: Propriété intellectuelle
  'ans.section5.title': {
    id: 'ans.section5.title',
    defaultMessage: '5 – Propriété intellectuelle',
    description: 'Titre de la section 5',
  },
  'ans.section5.p1': {
    id: 'ans.section5.p1',
    defaultMessage: 'À moins qu’une licence plus permissive ne soit explicitement associée à un sous-ensemble du matériel pédagogique, la totalité du matériel disponible sur Evolo est la propriété de Calcul Québec. Toute reproduction complète ou partielle du contenu pédagogique, des vidéos et des éléments visuels de la plateforme Evolo est interdite sans autorisation écrite de la part de la direction de Calcul Québec. Dans tous les cas, les éléments vidéos et audios ne peuvent être reproduits, réutilisés ou modifiés sans l’autorisation écrite de la direction de CQ. Une autorisation supplémentaire de la part d\'un tiers pourrait être requise si le matériel à reproduire mentionne une collaboration.',
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
    defaultMessage: 'CQ peut modifier les termes et conditions de cet ANS à tout moment. Si l\'une de ces modifications modifie matériellement Vos droits ou Votre utilisation d’Evolo, CQ déploiera des efforts raisonnables pour Vous contacter, notamment en envoyant une notification à la ou aux adresses électroniques associées à votre compte. Dans certains cas, il pourra Vous être demandé d\'indiquer Votre consentement aux conditions révisées afin de continuer à accéder à Evolo. Sauf indication contraire, toute modification de cet ANS prendra effet lorsque Vous vous connecterez à nouveau à Votre compte. Si Vous n\'acceptez pas les conditions révisées, Votre seul et unique recours sera de cesser Votre utilisation d’Evolo.',
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
    defaultMessage: 'version 1.0 · 7 mai 2025',
    description: 'Note de bas de page de version',
  },
});

export default messages;
