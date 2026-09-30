// src/i18n/messages.ts
import enMessages from './site-messages/en.json';
import frMessages from '../ans/messages';

const messages = {
  en: enMessages,
  // fr defaults to empty object because fr is hardcoded in React components
  fr: frMessages, 
  'fr-ca': frMessages
};

export default messages;

