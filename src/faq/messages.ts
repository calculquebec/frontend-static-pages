import { defineMessages } from '@openedx/frontend-base';

const messages = defineMessages({
  'faq.page.title': {
    id: 'faq.page.title',
    defaultMessage: 'FAQ | {siteName}',
    description: 'Document title for the FAQ page',
  },
  'faq.heading': {
    id: 'faq.heading',
    defaultMessage: 'Foire aux questions (FAQ)',
    description: 'Main heading for the FAQ page',
  },
  'faq.q1.question': {
    id: 'faq.q1.question',
    defaultMessage: 'Où puis-je poser une question ?',
    description: 'FAQ question 1',
  },
  'faq.q1.answer.text': {
    id: 'faq.q1.answer.text',
    defaultMessage: "Cliquer sur l'icône « discussion » du module pour accéder au forum de discussion.",
    description: 'FAQ answer 1 text',
  },
  'faq.q2.question': {
    id: 'faq.q2.question',
    defaultMessage: 'Quels sont les prérequis liés à cette formation ?',
    description: 'FAQ question 2',
  },
  'faq.q2.answer.p1': {
    id: 'faq.q2.answer.p1',
    defaultMessage: 'Cette formation nécessite des <strong>connaissances de base en ligne de commande Linux</strong>.',
    description: 'FAQ answer 2 paragraph 1',
  },
  'faq.q2.answer.p2': {
    id: 'faq.q2.answer.p2',
    defaultMessage: "Vous n'êtes pas à l'aise avec la ligne de commande ? Plusieurs ressources sont disponibles :",
    description: 'FAQ answer 2 paragraph 2',
  },
  'faq.q2.answer.resource1': {
    id: 'faq.q2.answer.resource1',
    defaultMessage: 'Notre atelier en ligne « Introduction à la ligne de commande Linux (LNX101) » (voir notre page <link>EventBrite</link> pour les dates)',
    description: 'FAQ answer 2 resource 1',
  },
  'faq.q2.answer.resource2': {
    id: 'faq.q2.answer.resource2',
    defaultMessage: 'Le catalogue de nos partenaires via <link>Explora</link>',
    description: 'FAQ answer 2 resource 2',
  },
  'faq.q2.answer.resource3': {
    id: 'faq.q2.answer.resource3',
    defaultMessage: '<link>The Unix Shell</link> de Software Carpentry (en anglais, à votre rythme)',
    description: 'FAQ answer 2 resource 3',
  },
  'faq.q2.answer.tech': {
    id: 'faq.q2.answer.tech',
    defaultMessage: 'Côté technique, un <strong>navigateur récent</strong> suffit. Notre plateforme fournit tout le nécessaire.',
    description: 'FAQ answer 2 technical requirements',
  },
  'faq.q3.question': {
    id: 'faq.q3.question',
    defaultMessage: 'Comment naviguer dans cette formation ?',
    description: 'FAQ question 3',
  },
  'faq.q3.answer.item1': {
    id: 'faq.q3.answer.item1',
    defaultMessage: "Pour <strong>naviguer d'une page à l'autre</strong> : cliquez sur les flèches (en haut de la page) ou sur les boutons (en bas de la page)",
    description: 'FAQ answer 3 navigation instructions',
  },
  'faq.q3.answer.item2': {
    id: 'faq.q3.answer.item2',
    defaultMessage: 'Pour <strong>ouvrir et fermer le plan de formation</strong> : cliquez sur les boutons symbolisant une liste',
    description: 'FAQ answer 3 outline toggle',
  },
  'faq.q3.answer.item3': {
    id: 'faq.q3.answer.item3',
    defaultMessage: 'Pour <strong>naviguer dans le plan de formation</strong> : cliquez sur les différentes flèches',
    description: 'FAQ answer 3 outline navigation',
  },
  'faq.q4.question': {
    id: 'faq.q4.question',
    defaultMessage: 'Ma progression ne se met pas à jour. Pourquoi ?',
    description: 'FAQ question 4',
  },
  'faq.q4.answer': {
    id: 'faq.q4.answer',
    defaultMessage: 'Notre équipe cherche à résoudre ce problème. Des premières explications sont disponibles sur : <link>{url}</link>',
    description: 'FAQ answer 4 progress issue',
  },
});

export default messages;
