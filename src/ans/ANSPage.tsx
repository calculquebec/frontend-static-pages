import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Button, Alert, Spinner } from '@openedx/paragon';
import { getSiteConfig, useIntl } from '@openedx/frontend-base';
import { Helmet } from 'react-helmet';
import messages from './messages';

import './ANSPage.scss';

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
  const { formatMessage } = useIntl();
  const location = useLocation();
  const siteConfig = getSiteConfig?.() ?? { siteName: 'Calcul Québec' };
  const siteName = siteConfig.siteName || 'Calcul Québec';

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
      setValidationError(formatMessage(messages['ans.accept.error.required']));
      return;
    }
    setValidationError(null);
    setError(null);
    setSubmitting(true);

    const lmsBaseUrl = siteConfig.lmsBaseUrl || '';
    const targetNext = nextUrl || '/learner-dashboard';
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
        setError(formatMessage(messages['ans.accept.error.general']));
        setSubmitting(false);
      }
    } catch (err) {
      setError(formatMessage(messages['ans.accept.error.general']));
      setSubmitting(false);
    }
  };

  return (
    <main className="ans-page" id="top">
      <Helmet>
        <title>
          {formatMessage(messages['ans.page.title'], { siteName })}
        </title>
      </Helmet>
      <Container className="ans-page-wrapper">
        <header className="ans-header-card">
          <span className="ans-header-badge">
            {formatMessage(messages['ans.header.badge'])}
          </span>
          <h1 className="ans-title">
            {formatMessage(messages['ans.heading'])}
          </h1>
          <div className="ans-subtitle">
            {formatMessage(messages['ans.subheading'])}
          </div>
          <div className="ans-meta-info">
            <span className="ans-version-badge">
              {formatMessage(messages['ans.version'])}
            </span>
          </div>
        </header>

        {showTopBanner && (
          <div className="ans-acceptance-banner" role="alert">
            <div className="ans-acceptance-banner-content">
              <span className="ans-acceptance-banner-icon" aria-hidden="true">⚠️</span>
              <div className="ans-acceptance-banner-text-group">
                <strong className="ans-acceptance-banner-title">
                  {formatMessage(messages['ans.accept.banner.title'])}
                </strong>
                <p className="ans-acceptance-banner-text">
                  {formatMessage(messages['ans.accept.banner.text'])}
                </p>
              </div>
            </div>
            <a href="#accept-sla" className="ans-acceptance-banner-btn">
              {formatMessage(messages['ans.accept.banner.button'])}
            </a>
          </div>
        )}

        <nav className="ans-toc-card" aria-label={formatMessage(messages['ans.toc.title'])}>
          <h2 className="ans-toc-title">
            {formatMessage(messages['ans.toc.title'])}
          </h2>
          <ul className="ans-toc-list">
            <li>
              <a href="#section-1">{formatMessage(messages['ans.toc.item1'])}</a>
            </li>
            <li>
              <a href="#section-2">{formatMessage(messages['ans.toc.item2'])}</a>
            </li>
            <li>
              <a href="#section-3">{formatMessage(messages['ans.toc.item3'])}</a>
            </li>
            <li>
              <a href="#section-4">{formatMessage(messages['ans.toc.item4'])}</a>
            </li>
            <li>
              <a href="#section-5">{formatMessage(messages['ans.toc.item5'])}</a>
            </li>
            <li>
              <a href="#section-6">{formatMessage(messages['ans.toc.item6'])}</a>
            </li>
            {isLoggedIn && (
              <li>
                <a href="#accept-sla">{formatMessage(messages['ans.toc.item7'])}</a>
              </li>
            )}
          </ul>
        </nav>

        <div className="ans-content">
          {/* Section 1: Introduction */}
          <section id="section-1" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage(messages['ans.section1.title'])}
            </h2>
            <p>
              {formatMessage(messages['ans.section1.p1'])}
            </p>
          </section>

          {/* Section 2: Définitions */}
          <section id="section-2" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage(messages['ans.section2.title'])}
            </h2>
            <p>
              {formatMessage(messages['ans.section2.p1'], {
                glossaryLink: (
                  <a
                    href="https://www.calculquebec.ca/glossaire-de-la-securite-de-information-CQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formatMessage(messages['ans.section2.glossaryLinkText'])}
                  </a>
                ),
              })}
              <sup>1</sup>
            </p>
            <div className="ans-footnote">
              {formatMessage(messages['ans.section2.footnote'], {
                url: (
                  <a
                    href="https://www.calculquebec.ca/glossaire-de-la-securite-de-information-CQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.calculquebec.ca/glossaire-de-la-securite-de-information-CQ
                  </a>
                ),
              })}
            </div>
          </section>

          {/* Section 3: Conditions d’utilisation spécifiques à Evolo */}
          <section id="section-3" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage(messages['ans.section3.title'])}
            </h2>
            <p>
              {formatMessage(messages['ans.section3.p1'])}
            </p>
            <p>
              {formatMessage(messages['ans.section3.p2'])}
            </p>
            <p>
              {formatMessage(messages['ans.section3.p3'])}
            </p>
            <p>
              {formatMessage(messages['ans.section3.p4'])}
            </p>
            <p>
              {formatMessage(messages['ans.section3.p5'])}
            </p>
            <p>
              {formatMessage(messages['ans.section3.p6'])}
            </p>
          </section>

          {/* Section 4: Niveau de service - Evolo */}
          <section id="section-4" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage(messages['ans.section4.title'])}
            </h2>
            <div className="ans-beta-notice">
              <span className="ans-beta-badge">
                {formatMessage(messages['ans.section4.betaTag'])}
              </span>
              <p>
                {formatMessage(messages['ans.section4.p1'])}
              </p>
            </div>
          </section>

          {/* Section 5: Propriété intellectuelle */}
          <section id="section-5" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage(messages['ans.section5.title'])}
            </h2>
            <p>
              {formatMessage(messages['ans.section5.p1'])}
            </p>
          </section>

          {/* Section 6: Dispositions finales */}
          <section id="section-6" className="ans-section">
            <h2 className="ans-section-heading">
              {formatMessage(messages['ans.section6.title'])}
            </h2>
            <p>
              {formatMessage(messages['ans.section6.p1'])}
            </p>
          </section>

          {/* Section 7: Acceptation de l'ANS (affichée uniquement pour les utilisateurs connectés) */}
          {isLoggedIn && (
            <section id="accept-sla" className="ans-section ans-acceptance-section">
              <div className="ans-acceptance-card">
                <h2 className="ans-acceptance-title">
                  {formatMessage(messages['ans.accept.card.title'])}
                </h2>
                <p className="ans-acceptance-text">
                  {formatMessage(messages['ans.accept.card.text'])}
                </p>

                {hasAcceptedAlready && (
                  <Alert variant="success" className="ans-acceptance-status-alert">
                    {formatMessage(messages['ans.accept.status.alreadyAccepted'])}
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
                      {formatMessage(messages['ans.accept.checkbox.label'])}
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
                          {formatMessage(messages['ans.accept.button.submitting'])}
                        </>
                      ) : (
                        formatMessage(messages['ans.accept.button.submit'])
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
            <span>{formatMessage(messages['ans.footer.meta'])}</span>
          </div>
          <a href="#top" className="ans-back-to-top">
            ↑ {formatMessage(messages['ans.footer.backToTop'])}
          </a>
        </footer>
      </Container>
    </main>
  );
};

export default ANSPage;
