import { Container } from '@openedx/paragon';
import { getSiteConfig, useIntl } from '@openedx/frontend-base';
import { Helmet } from 'react-helmet';
import messages from './messages';

import './ANSPage.scss';

const ANSPage = () => {
  const { formatMessage } = useIntl();
  const siteConfig = getSiteConfig?.() ?? { siteName: 'Calcul Québec' };
  const siteName = siteConfig.siteName || 'Calcul Québec';

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
