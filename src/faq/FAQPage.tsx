import React, { useState, useEffect, Fragment } from 'react';
import { Container } from '@openedx/paragon';
import { getSiteConfig } from '@openedx/frontend-base';
import { Helmet } from 'react-helmet';
import { frMessages, enMessages } from './messages';

import iconePlus from './assets/icone-plus.png';
import flechesNav from './assets/fleches-navigation.png';
import boutonsNav from './assets/boutons-navigation.png';
import planOuvertureFermeture from './assets/plan-ouverture-fermeture.gif';
import planFormationFleches from './assets/plan-formation-fleches.gif';
import discussionIcon from './assets/discussion-icon.png';

import './FAQPage.scss';

type MessageKey = keyof typeof frMessages;

const getLanguage = (): 'en' | 'fr' => {
  try {
    if (typeof document !== 'undefined') {
      const match = document.cookie.match(/(?:^|;\s*)openedx-language-preference=([^;]*)/);
      if (match) {
        const val = decodeURIComponent(match[1]).toLowerCase();
        if (val.startsWith('en')) return 'en';
        if (val.startsWith('fr')) return 'fr';
      }
    }
    if (typeof navigator !== 'undefined') {
      const browserLang = (navigator.languages?.[0] || navigator.language || '').toLowerCase();
      if (browserLang.startsWith('en')) return 'en';
      if (browserLang.startsWith('fr')) return 'fr';
    }
  } catch (e) {
    // ignore
  }
  return 'fr';
};

const FAQPage = () => {
  const [lang, setLang] = useState<'en' | 'fr'>(getLanguage);

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  const formatMessage = (
    keyOrDescriptor: MessageKey | string | { id: string; defaultMessage?: string },
    values?: Record<string, any>
  ): any => {
    const key = typeof keyOrDescriptor === 'string' ? keyOrDescriptor : keyOrDescriptor.id;
    const dict = lang === 'en' ? enMessages : frMessages;
    const rawText =
      dict[key] ??
      (typeof keyOrDescriptor === 'object' ? keyOrDescriptor.defaultMessage : undefined) ??
      frMessages[key] ??
      key;

    const parseTags = (str: string, baseKey: string | number) => {
      const tagRegex = /(<\/?(?:strong|em)>)/g;
      if (!tagRegex.test(str)) {
        return str;
      }
      const parts = str.split(/(<\w+>.*?<\/\w+>)/g);
      return parts.map((part, idx) => {
        const match = part.match(/^<(\w+)>(.*?)<\/\1>$/);
        if (match) {
          const [, tag, content] = match;
          if (tag === 'strong') return <strong key={`${baseKey}-s-${idx}`}>{content}</strong>;
          if (tag === 'em') return <em key={`${baseKey}-e-${idx}`}>{content}</em>;
        }
        return part;
      });
    };

    if (!values || Object.keys(values).length === 0) {
      return parseTags(rawText, 'raw');
    }

    const hasReactNode = Object.values(values).some(
      (v) => typeof v !== 'string' && typeof v !== 'number'
    );

    if (!hasReactNode) {
      const substituted = rawText.replace(/\{(\w+)\}/g, (_, placeholder) =>
        placeholder in values ? String(values[placeholder]) : `{${placeholder}}`
      );
      return parseTags(substituted, 'sub');
    }

    const parts = rawText.split(/\{(\w+)\}/g);
    return parts.map((part, index) => {
      if (index % 2 === 1 && part in values) {
        return <Fragment key={index}>{values[part]}</Fragment>;
      }
      return parseTags(part, index);
    });
  };

  const siteConfig = getSiteConfig?.() ?? { siteName: 'Calcul Québec' };
  const siteName = siteConfig.siteName || 'Calcul Québec';

  return (
    <main className="faq-page">
      <Helmet>
        <title>
          {formatMessage('faq.page.title', { siteName })}
        </title>
      </Helmet>
      <Container className="faq-page-wrapper">
        <h1 className="faq-page-title">
          {formatMessage('faq.heading')}
        </h1>

        <div className="faq-list">
          {/* Question 1: Discussion */}
          <details className="faq-item">
            <summary className="faq-summary">
              <span className="faq-question-text">
                {formatMessage('faq.q1.question')}
              </span>
              <img
                src={iconePlus}
                alt={formatMessage('faq.toggleAlt')}
                className="faq-toggle-icon"
                width="32"
                height="32"
              />
            </summary>
            <div className="faq-content">
              <p>
                {formatMessage('faq.q1.answer', {
                  icon: (
                    <img
                      src={discussionIcon}
                      alt={formatMessage('faq.q1.iconAlt')}
                      className="faq-inline-icon"
                      width="27"
                      height="23"
                    />
                  ),
                })}
              </p>
            </div>
          </details>

          {/* Question 2: Prérequis */}
          <details className="faq-item">
            <summary className="faq-summary">
              <span className="faq-question-text">
                {formatMessage('faq.q2.question')}
              </span>
              <img
                src={iconePlus}
                alt={formatMessage('faq.toggleAlt')}
                className="faq-toggle-icon"
                width="32"
                height="32"
              />
            </summary>
            <div className="faq-content">
              <p>{formatMessage('faq.q2.answer.p1')}</p>
              <p>{formatMessage('faq.q2.answer.p2')}</p>
              <ul>
                <li>
                  {formatMessage('faq.q2.answer.resource1', {
                    eventBriteLink: (
                      <a
                        href="https://calculquebec.eventbrite.ca"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        EventBrite
                      </a>
                    ),
                  })}
                </li>
                <li>
                  {formatMessage('faq.q2.answer.resource2', {
                    exploraLink: (
                      <a
                        href="https://explora.alliancecan.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explora
                      </a>
                    ),
                  })}
                </li>
                <li>
                  {formatMessage('faq.q2.answer.resource3', {
                    unixShellLink: (
                      <a
                        href="https://swcarpentry.github.io/shell-novice/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <em>The Unix Shell</em>
                      </a>
                    ),
                  })}
                </li>
              </ul>
              <p>{formatMessage('faq.q2.answer.tech')}</p>
            </div>
          </details>

          {/* Question 3: Navigation */}
          <details className="faq-item">
            <summary className="faq-summary">
              <span className="faq-question-text">
                {formatMessage('faq.q3.question')}
              </span>
              <img
                src={iconePlus}
                alt={formatMessage('faq.toggleAlt')}
                className="faq-toggle-icon"
                width="32"
                height="32"
              />
            </summary>
            <div className="faq-content">
              <ul>
                <li>
                  {formatMessage('faq.q3.answer.item1')}
                  <div className="faq-nav-images">
                    <img
                      src={flechesNav}
                      alt={formatMessage('faq.q3.answer.item1.altArrows')}
                      width="104"
                      height="48"
                    />
                    <span>{formatMessage('faq.q3.answer.item1.or')}</span>
                    <img
                      src={boutonsNav}
                      alt={formatMessage('faq.q3.answer.item1.altButtons')}
                      width="304"
                      height="69"
                    />
                  </div>
                </li>
                <li className="mt-3">
                  {formatMessage('faq.q3.answer.item2')}
                  <div className="faq-media-wrapper">
                    <img
                      src={planOuvertureFermeture}
                      alt={formatMessage('faq.q3.answer.item2.alt')}
                      width="350"
                      height="350"
                    />
                  </div>
                </li>
                <li className="mt-3">
                  {formatMessage('faq.q3.answer.item3')}
                  <div className="faq-media-wrapper">
                    <img
                      src={planFormationFleches}
                      alt={formatMessage('faq.q3.answer.item3.alt')}
                      width="350"
                      height="350"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </details>

          {/* Question 4: Progression */}
          <details className="faq-item">
            <summary className="faq-summary">
              <span className="faq-question-text">
                {formatMessage('faq.q4.question')}
              </span>
              <img
                src={iconePlus}
                alt={formatMessage('faq.toggleAlt')}
                className="faq-toggle-icon"
                width="32"
                height="32"
              />
            </summary>
            <div className="faq-content">
              <p>
                {formatMessage('faq.q4.answer', {
                  progressUrlLink: (
                    <a
                      href="https://docs.openedx.org/en/latest/educators/references/data/progress_page.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://docs.openedx.org/en/latest/educators/references/data/progress_page.html
                    </a>
                  ),
                })}
              </p>
            </div>
          </details>
        </div>
      </Container>
    </main>
  );
};

export default FAQPage;
