import messages from './messages';

const setCookieFunction = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  let domain_parts = (window.location.hostname + '').split('.');
  domain_parts.shift();
  let domain = "";
  domain = "; domain=." + domain_parts.join('.');
  document.cookie = name + "=" + value + expires + domain + "; path=/";
  window.location.reload();
};


const getLanguage = () => {
  // Fonction utilitaire pour normaliser les codes de langue
  const normalizeLang = (lang) => {
    if (!lang) return null;

    const lower = lang.toLowerCase();

    if (lower === 'fr' || lower.startsWith('fr-')) {
      return 'fr-ca';
    }

    if (lower === 'en' || lower.startsWith('en-')) {
      return 'en';
    }

    return null;
  };

  // On essaye d'abord de récupérer la langue depuis le cookie
  const languageCookie = document.cookie.split('; ').find((cookie) => cookie.startsWith('openedx-language-preference='));
  const languageFromCookie = languageCookie ? decodeURIComponent(languageCookie.split('=')[1]) : null;
  const fromCookie = normalizeLang(languageFromCookie);
  if (fromCookie) {
    if (fromCookie != languageFromCookie) setCookieFunction('openedx-language-preference', fromCookie, 14);
    return fromCookie;
  }

  // Ensuite, on essaye de récupérer la langue depuis le navigateur
  const browserLang = navigator.languages?.[0] || navigator.language || null;
  const fromBrowser = normalizeLang(browserLang);
  if (fromBrowser) {
    if (fromBrowser != browserLang) setCookieFunction('openedx-language-preference', fromBrowser, 14);
    return fromBrowser;
  }

  // Par défaut, on retourne 'fr-ca'
  return 'fr-ca';
};

// Helper function to get messages based on current language cookie
export const getAppMessages = () => {
  const lang = getLanguage(); // Reads the language cookie (e.g., 'en' or 'fr')
  return messages[lang] || messages['fr'] || messages['en'];
};

export { default } from './messages';
