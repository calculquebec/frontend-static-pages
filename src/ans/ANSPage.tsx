import React, { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Button, Alert, Spinner } from '@openedx/paragon';
import { getSiteConfig } from '@openedx/frontend-base';
import { Helmet } from 'react-helmet';
import { frMessages, enMessages } from './messages';

import './ANSPage.scss';

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

const getNextParam = (locSearch?: string): string => {
  try {
    if (locSearch) {
      const p = new URLSearchParams(locSearch).get('next');
      if (p) return p;
    }
    if (typeof window !== 'undefined' && window.location.search) {
      const p = new URLSearchParams(window.location.search).get('next');
      if (p) return p;
    }
    if (typeof window !== 'undefined' && window.location.hash && window.location.hash.includes('?')) {
      const hashQuery = window.location.hash.substring(window.location.hash.indexOf('?'));
      const p = new URLSearchParams(hashQuery).get('next');
      if (p) return p;
    }
  } catch (e) {
    // ignore
  }
  return '';
};

const ANSPage = () => {
  let location: any;
  try {
    location = useLocation();
  } catch (e) {
    location = undefined;
  }

  const [lang, setLang] = useState<'en' | 'fr'>(() => getLanguage());

  useEffect(() => {
    setLang(getLanguage());
  }, [location?.pathname]);

  const formatMessage = (
    keyOrDescriptor: MessageKey | string | { id: string; defaultMessage?: string },
    values?: Record<string, any>
  ): any => {
    const key = typeof keyOrDescriptor === 'string' ? keyOrDescriptor : keyOrDescriptor.id;
    const dict = lang === 'en' ? enMessages : frMessages;

    // Document title must remain a clean string for Helmet
    if (key === 'ans.page.title') {
      const titleText = dict[key] ?? frMessages[key] ?? key;
      return titleText
        .replace(/\{siteName\}/g, values?.siteName ? String(values.siteName) : '')
        .replace(/evolo/gi, 'evolo');
    }

    const rawText =
      dict[key] ??
      (typeof keyOrDescriptor === 'object' ? keyOrDescriptor.defaultMessage : undefined) ??
      frMessages[key] ??
      key;

    const parseTagsAndEvolo = (str: string, baseKey: string | number) => {
      const parts = str.split(/(<\w+>.*?<\/\w+>|\bevolo\b)/gi);
      return parts.map((part, idx) => {
        if (/^evolo$/i.test(part)) {
          return (
            <span key={`${baseKey}-evolo-${idx}`} className="ans-evolo-name">
              evolo
            </span>
          );
        }
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
      return parseTagsAndEvolo(rawText, 'raw');
    }

    const hasReactNode = Object.values(values).some(
      (v) => typeof v !== 'string' && typeof v !== 'number'
    );

    if (!hasReactNode) {
      const substituted = rawText.replace(/\{(\w+)\}/g, (_, placeholder) =>
        placeholder in values ? String(values[placeholder]) : `{${placeholder}}`
      );
      return parseTagsAndEvolo(substituted, 'sub');
    }

    const parts = rawText.split(/\{(\w+)\}/g);
    return parts.map((part, index) => {
      if (index % 2 === 1 && part in values) {
        return <Fragment key={index}>{values[part]}</Fragment>;
      }
      return parseTagsAndEvolo(part, index);
    });
  };

  const siteConfig = getSiteConfig?.() ?? { siteName: 'Calcul Québec' };
  const siteName = siteConfig.siteName || 'Calcul Québec';

  const termsUrl =
    lang === 'en'
      ? 'https://www.calculquebec.ca/terms-use'
      : 'https://www.calculquebec.ca/conditions-utilisation';

  const glossaryUrl =
    lang === 'en'
      ? 'https://www.calculquebec.ca/information-security-glossary'
      : 'https://www.calculquebec.ca/glossaire-de-la-securite-de-information-CQ';

  const nextUrl = getNextParam(location?.search);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(Boolean(nextUrl));
  const [hasAcceptedAlready, setHasAcceptedAlready] = useState(false);
  const [needsAcceptance, setNeedsAcceptance] = useState(false);
  const [statusLoaded, setStatusLoaded] = useState(false);

  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const lmsBaseUrl = siteConfig.lmsBaseUrl || '';
        const response = await fetch(`${lmsBaseUrl}/sla/accept/`, {
          headers: { Accept: 'application/json' },
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          if (data) {
            if (typeof data.is_authenticated === 'boolean') {
              setIsAuthenticated(data.is_authenticated);
            }
            if (typeof data.has_accepted === 'boolean') {
              setHasAcceptedAlready(data.has_accepted);
              if (data.is_authenticated && !data.has_accepted) {
                setNeedsAcceptance(true);
              }
            }
          }
        }
      } catch (err) {
        // ignore
      } finally {
        setStatusLoaded(true);
      }
    };
    checkStatus();
  }, [siteConfig.lmsBaseUrl]);

  const isLoggedIn = Boolean(isAuthenticated || nextUrl);
  const showTopBanner = Boolean(isLoggedIn && (nextUrl || needsAcceptance));

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (!accepted) {
      setValidationError(formatMessage('ans.accept.error.required'));
      return;
    }
    setValidationError(null);
    setError(null);
    setSubmitting(true);

    const lmsBaseUrl = siteConfig.lmsBaseUrl || '';
    const targetNext = nextUrl && nextUrl !== '/dashboard' ? nextUrl : '/learner-dashboard';
    const acceptEndpoint = `${lmsBaseUrl}/sla/accept/`;

    try {
      const getCookie = (name: string) => {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : '';
      };

      const csrfToken = getCookie('csrftoken') || getCookie('edx-csrf-cookie');

      const response = await fetch(acceptEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...(csrfToken ? { 'X-CSRFToken': csrfToken } : {}),
        },
        credentials: 'include',
        body: JSON.stringify({
          accepted: true,
          next: targetNext,
        }),
      });

      if (response.ok) {
        const data = await response.json().catch(() => ({}));
        window.location.href = data.redirect_url || targetNext;
      } else {
        setError(formatMessage('ans.accept.error.general'));
        setSubmitting(false);
      }
    } catch (err) {
      setError(formatMessage('ans.accept.error.general'));
      setSubmitting(false);
    }
  };

  return (
    <main className="ans-page" id="top">
      <Helmet>
        <title>
          {formatMessage('ans.page.title', { siteName })}
        </title>
      </Helmet>
      <Container className="ans-page-wrapper">
        <header className="ans-header-card">
          <span className="ans-header-badge">
            {formatMessage('ans.header.badge')}
          </span>
          <h1 className="ans-title">
            {formatMessage('ans.heading')}
          </h1>
          <div className="ans-subtitle">
            {formatMessage('ans.subheading')}
          </div>
          <div className="ans-meta-info">
            <span className="ans-version-badge">
              {formatMessage('ans.version')}
            </span>
          </div>
        </header>

        {showTopBanner && (
          <div className="ans-acceptance-banner" role="alert">
            <div className="ans-acceptance-banner-content">
              <span className="ans-acceptance-banner-icon" aria-hidden="true">⚠️</span>
              <div className="ans-acceptance-banner-text-group">
                <strong className="ans-acceptance-banner-title">
                  {formatMessage('ans.accept.banner.title')}
                </strong>
                <p className="ans-acceptance-banner-text">
                  {formatMessage('ans.accept.banner.text')}
                </p>
              </div>
            </div>
            <a href="#accept-sla" className="ans-acceptance-banner-btn">
              {formatMessage('ans.accept.banner.button')}
            </a>
          </div>
        )}

        <nav className="ans-toc-card" aria-label={formatMessage('ans.toc.title')}>
          <h2 className="ans-toc-title">
            {formatMessage('ans.toc.title')}
          </h2>
          <ul className="ans-toc-list">
            <li>
              <a href="#section-1">{formatMessage('ans.toc.item1')}</a>
            </li>
            <li>
              <a href="#section-2">{formatMessage('ans.toc.item2')}</a>
            </li>
            <li>
              <a href="#section-3">{formatMessage('ans.toc.item3')}</a>
            </li>
            <li>
              <a href="#section-4">{formatMessage('ans.toc.item4')}</a>
            </li>
            <li>
              <a href="#section-5">{formatMessage('ans.toc.item5')}</a>
            </li>
            <li>
              <a href="#section-6">{formatMessage('ans.toc.item6')}</a>
            </li>
            {isLoggedIn && (
              <li>
                <a href="#accept-sla">{formatMessage('ans.toc.item7')}</a>
              </li>
            )}
          </ul>
        </nav>

        <div className="ans-content">
          {/* Section 1: Introduction */}
          <section id="section-1" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage('ans.section1.title')}
            </h2>
            <p>
              {formatMessage('ans.section1.p1')}
            </p>
            <div className="ans-footnote">
              {formatMessage('ans.section1.footnote', {
                url: (
                  <a
                    href={termsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {termsUrl}
                  </a>
                ),
              })}
            </div>
          </section>

          {/* Section 2: Définitions */}
          <section id="section-2" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage('ans.section2.title')}
            </h2>
            <p>
              {formatMessage('ans.section2.p1', {
                glossaryLink: (
                  <a
                    href={glossaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formatMessage('ans.section2.glossaryLinkText')}
                  </a>
                ),
              })}
            </p>
            <div className="ans-footnote">
              {formatMessage('ans.section2.footnote', {
                url: (
                  <a
                    href={glossaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {glossaryUrl}
                  </a>
                ),
              })}
            </div>
          </section>

          {/* Section 3: Conditions d'utilisation spécifiques à Evolo */}
          <section id="section-3" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage('ans.section3.title')}
            </h2>
            <p>
              {formatMessage('ans.section3.p1')}
            </p>
            <p>
              {formatMessage('ans.section3.p2')}
            </p>
            <p>
              {formatMessage('ans.section3.p3')}
            </p>
            <p>
              {formatMessage('ans.section3.p4')}
            </p>
            <p>
              {formatMessage('ans.section3.p5')}
            </p>
          </section>

          {/* Section 4: Niveau de service - Evolo */}
          <section id="section-4" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage('ans.section4.title')}
            </h2>
            <div className="ans-beta-notice">
              <span className="ans-beta-badge">
                {formatMessage('ans.section4.betaTag')}
              </span>
              <p>
                {formatMessage('ans.section4.p1')}
              </p>
            </div>
            <p>
              {formatMessage('ans.section4.intro')}
            </p>
            <ul className="ans-feature-list">
              <li>{formatMessage('ans.section4.feature1')}</li>
              <li>{formatMessage('ans.section4.feature2')}</li>
              <li>{formatMessage('ans.section4.feature3')}</li>
              <li>{formatMessage('ans.section4.feature4')}</li>
              <li>{formatMessage('ans.section4.feature5')}</li>
              <li>{formatMessage('ans.section4.feature6')}</li>
            </ul>
            <p>
              {formatMessage('ans.section4.access', {
                siteLink: (
                  <a
                    href="https://evolo.calculquebec.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formatMessage('ans.section4.siteLinkText')}
                  </a>
                ),
              })}
            </p>
            <div className="ans-footnote">
              {formatMessage('ans.section4.footnote', {
                url: (
                  <a
                    href="https://evolo.calculquebec.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://evolo.calculquebec.cloud
                  </a>
                ),
              })}
            </div>
          </section>

          {/* Section 5: Propriété intellectuelle */}
          <section id="section-5" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage('ans.section5.title')}
            </h2>
            <p>
              {formatMessage('ans.section5.p1')}
            </p>
          </section>

          {/* Section 6: Dispositions finales */}
          <section id="section-6" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage('ans.section6.title')}
            </h2>
            <p>
              {formatMessage('ans.section6.p1')}
            </p>
          </section>

          {/* Section 7: Acceptation de l'ANS (affichée uniquement pour les utilisateurs connectés) */}
          {isLoggedIn && (
            <section id="accept-sla" className="ans-section ans-acceptance-section">
              <div className="ans-acceptance-card">
                <h2 className="ans-acceptance-title">
                  {formatMessage('ans.accept.card.title')}
                </h2>
                <p className="ans-acceptance-text">
                  {formatMessage('ans.accept.card.text')}
                </p>

                {hasAcceptedAlready && (
                  <Alert variant="success" className="ans-acceptance-status-alert">
                    {formatMessage('ans.accept.status.alreadyAccepted')}
                  </Alert>
                )}

                {error && (
                  <Alert variant="danger" className="ans-acceptance-error">
                    {error}
                  </Alert>
                )}

                {validationError && (
                  <Alert variant="warning" className="ans-acceptance-error">
                    {validationError}
                  </Alert>
                )}

                {hasAcceptedAlready || (
                  <form onSubmit={handleSubmit} className="ans-acceptance-form">
                    <label className="ans-acceptance-checkbox-label">
                      <input
                        type="checkbox"
                        checked={accepted}
                        onChange={(e) => {
                          setAccepted(e.target.checked);
                          if (e.target.checked) {
                            setValidationError(null);
                          }
                        }}
                        disabled={submitting}
                        className="ans-acceptance-checkbox"
                      />
                      <span className="ans-acceptance-checkbox-text">
                        {formatMessage('ans.accept.checkbox.label')}
                      </span>
                    </label>

                    <div className="ans-acceptance-actions">
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={submitting}
                        className="ans-acceptance-submit-btn"
                      >
                        {submitting ? (
                          <>
                            <Spinner
                              animation="border"
                              size="sm"
                              className="mr-2"
                              role="status"
                              aria-hidden="true"
                            />
                            {formatMessage('ans.accept.button.submitting')}
                          </>
                        ) : (
                          formatMessage('ans.accept.button.submit')
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </section>
          )}
        </div>

        <footer className="ans-footer">
          <div className="ans-footer-meta">
            <span>{formatMessage('ans.footer.meta')}</span>
          </div>
          <a href="#top" className="ans-back-to-top">
            ↑ {formatMessage('ans.footer.backToTop')}
          </a>
        </footer>
      </Container>
    </main>
  );
};

export default ANSPage;
