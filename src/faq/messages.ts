export const frMessages: Record<string, string> = {
  'faq.page.title': 'FAQ | {siteName}',
  'faq.heading': 'Foire aux questions (FAQ)',
  'faq.toggleAlt': 'Ouvrir / Fermer',

  // Q1
  'faq.q1.question': 'Où puis-je poser une question ?',
  'faq.q1.answer': 'Cliquer sur l’icône « discussion » {icon} du module pour accéder au forum de discussion.',
  'faq.q1.iconAlt': 'Icône discussion',

  // Q2
  'faq.q2.question': 'Quels sont les prérequis liés à cette formation ?',
  'faq.q2.answer.p1': 'Cette formation nécessite des <strong>connaissances de base en ligne de commande Linux</strong>.',
  'faq.q2.answer.p2': 'Vous n’êtes pas à l’aise avec la ligne de commande ? Plusieurs ressources sont disponibles :',
  'faq.q2.answer.resource1': 'Notre atelier en ligne « Introduction à la ligne de commande Linux (LNX101) » (voir notre page {eventBriteLink} pour les dates)',
  'faq.q2.answer.resource2': 'Le catalogue de nos partenaires via {exploraLink}',
  'faq.q2.answer.resource3': '{unixShellLink} de Software Carpentry (en anglais, à votre rythme)',
  'faq.q2.answer.tech': 'Côté technique, un <strong>navigateur récent</strong> suffit. Notre plateforme fournit tout le nécessaire.',

  // Q3
  'faq.q3.question': 'Comment naviguer dans cette formation ?',
  'faq.q3.answer.item1': 'Pour <strong>naviguer d’une page à l’autre</strong> : cliquez sur les flèches (en haut de la page)',
  'faq.q3.answer.item1.or': 'ou sur les boutons (en bas de la page)',
  'faq.q3.answer.item1.altArrows': 'Flèches de navigation en haut de page',
  'faq.q3.answer.item1.altButtons': 'Boutons de navigation en bas de page',
  'faq.q3.answer.item2': 'Pour <strong>ouvrir et fermer le plan de formation</strong> : cliquez sur les boutons symbolisant une liste',
  'faq.q3.answer.item2.alt': 'Animation montrant l’ouverture et fermeture du plan',
  'faq.q3.answer.item3': 'Pour <strong>naviguer dans le plan de formation</strong> : cliquez sur les différentes flèches',
  'faq.q3.answer.item3.alt': 'Animation montrant la navigation dans les flèches du plan',

  // Q4
  'faq.q4.question': 'Ma progression ne se met pas à jour. Pourquoi ?',
  'faq.q4.answer': 'Notre équipe cherche à résoudre ce problème. Des premières explications sont disponibles sur : {progressUrlLink}',
};

export const enMessages: Record<string, string> = {
  'faq.page.title': 'FAQ | {siteName}',
  'faq.heading': 'Frequently Asked Questions (FAQ)',
  'faq.toggleAlt': 'Open / Close',

  // Q1
  'faq.q1.question': 'Where can I ask a question?',
  'faq.q1.answer': 'Click on the module’s “discussion” icon {icon} to access the discussion forum.',
  'faq.q1.iconAlt': 'Discussion icon',

  // Q2
  'faq.q2.question': 'What are the prerequisites for this training?',
  'faq.q2.answer.p1': 'This training requires <strong>basic knowledge of the Linux command line</strong>.',
  'faq.q2.answer.p2': 'Not comfortable with the command line? Several resources are available:',
  'faq.q2.answer.resource1': 'Our online workshop “Introduction to the Linux Command Line (LNX101)” (see our {eventBriteLink} page for dates)',
  'faq.q2.answer.resource2': 'Our partners’ catalog via {exploraLink}',
  'faq.q2.answer.resource3': '{unixShellLink} from Software Carpentry (in English, at your own pace)',
  'faq.q2.answer.tech': 'On the technical side, a <strong>recent browser</strong> is sufficient. Our platform provides everything needed.',

  // Q3
  'faq.q3.question': 'How to navigate this training?',
  'faq.q3.answer.item1': 'To <strong>navigate from one page to another</strong>: click on the arrows (at the top of the page)',
  'faq.q3.answer.item1.or': 'or on the buttons (at the bottom of the page)',
  'faq.q3.answer.item1.altArrows': 'Navigation arrows at top of page',
  'faq.q3.answer.item1.altButtons': 'Navigation buttons at bottom of page',
  'faq.q3.answer.item2': 'To <strong>open and close the course outline</strong>: click on the buttons representing a list',
  'faq.q3.answer.item2.alt': 'Animation showing how to open and close the outline',
  'faq.q3.answer.item3': 'To <strong>navigate within the course outline</strong>: click on the different arrows',
  'faq.q3.answer.item3.alt': 'Animation showing navigation within the outline arrows',

  // Q4
  'faq.q4.question': 'My progress is not updating. Why?',
  'faq.q4.answer': 'Our team is working on resolving this issue. Initial explanations are available at: {progressUrlLink}',
};

export const messages = {
  fr: frMessages,
  en: enMessages,
};

export default messages;
