import { Container } from '@openedx/paragon';
import { getSiteConfig, useIntl } from '@openedx/frontend-base';
import { Helmet } from 'react-helmet';
import messages from './messages';

import iconePlus from './assets/icone-plus.png';
import flechesNav from './assets/fleches-navigation.png';
import boutonsNav from './assets/boutons-navigation.png';
import planOuvertureFermeture from './assets/plan-ouverture-fermeture.gif';
import planFormationFleches from './assets/plan-formation-fleches.gif';
import discussionIcon from './assets/discussion-icon.png';

import './FAQPage.scss';

const FAQPage = () => {
  const { formatMessage } = useIntl();
  const siteConfig = getSiteConfig?.() ?? { siteName: 'Calcul Québec' };
  const siteName = siteConfig.siteName || 'Calcul Québec';

  return (
    <main className="faq-page">
      <Helmet>
        <title>
          {formatMessage(messages['faq.page.title'], { siteName })}
        </title>
      </Helmet>
      <Container className="faq-page-wrapper">
        <h1 className="faq-page-title">
          {formatMessage(messages['faq.heading'])}
        </h1>

        <div className="faq-list">
          {/* Question 1: Discussion */}
          <details className="faq-item">
            <summary className="faq-summary">
              <span className="faq-question-text">
                {formatMessage(messages['faq.q1.question'])}
              </span>
              <img
                src={iconePlus}
                alt="Ouvrir / Fermer"
                className="faq-toggle-icon"
                width="32"
                height="32"
              />
            </summary>
            <div className="faq-content">
              <p>
                Cliquer sur l&apos;ic&ocirc;ne &laquo; discussion &raquo;{' '}
                <img
                  src={discussionIcon}
                  alt="Icône discussion"
                  className="faq-inline-icon"
                  width="27"
                  height="23"
                />{' '}
                du module pour acc&eacute;der au forum de discussion.
              </p>
            </div>
          </details>

          {/* Question 2: Prérequis */}
          <details className="faq-item">
            <summary className="faq-summary">
              <span className="faq-question-text">
                {formatMessage(messages['faq.q2.question'])}
              </span>
              <img
                src={iconePlus}
                alt="Ouvrir / Fermer"
                className="faq-toggle-icon"
                width="32"
                height="32"
              />
            </summary>
            <div className="faq-content">
              <p>
                Cette formation n&eacute;cessite des{' '}
                <strong>connaissances de base en ligne de commande Linux</strong>.
              </p>
              <p>
                Vous n&apos;&ecirc;tes pas &agrave; l&apos;aise avec la ligne de
                commande ? Plusieurs ressources sont disponibles :
              </p>
              <ul>
                <li>
                  Notre atelier en ligne &laquo; Introduction &agrave; la ligne de commande Linux (LNX101) &raquo; (voir notre page{' '}
                  <a
                    href="https://calculquebec.eventbrite.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EventBrite
                  </a>{' '}
                  pour les dates)
                </li>
                <li>
                  Le catalogue de nos partenaires via{' '}
                  <a
                    href="https://explora.alliancecan.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explora
                  </a>
                </li>
                <li>
                  <a
                    href="https://swcarpentry.github.io/shell-novice/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <em>The Unix Shell</em>
                  </a>{' '}
                  de Software Carpentry (en anglais, &agrave; votre rythme)
                </li>
              </ul>
              <p>
                C&ocirc;t&eacute; technique, un <strong>navigateur r&eacute;cent</strong> suffit.
                Notre plateforme fournit tout le n&eacute;cessaire.
              </p>
            </div>
          </details>

          {/* Question 3: Navigation */}
          <details className="faq-item">
            <summary className="faq-summary">
              <span className="faq-question-text">
                {formatMessage(messages['faq.q3.question'])}
              </span>
              <img
                src={iconePlus}
                alt="Ouvrir / Fermer"
                className="faq-toggle-icon"
                width="32"
                height="32"
              />
            </summary>
            <div className="faq-content">
              <ul>
                <li>
                  Pour <strong>naviguer d&apos;une page &agrave; l&apos;autre</strong> :
                  cliquez sur les fl&egrave;ches (en haut de la page){' '}
                  <div className="faq-nav-images">
                    <img
                      src={flechesNav}
                      alt="Flèches de navigation en haut de page"
                      width="104"
                      height="48"
                    />
                    <span>ou sur les boutons (en bas de la page)</span>
                    <img
                      src={boutonsNav}
                      alt="Boutons de navigation en bas de page"
                      width="304"
                      height="69"
                    />
                  </div>
                </li>
                <li className="mt-3">
                  Pour <strong>ouvrir et fermer le plan de formation</strong> :
                  cliquez sur les boutons symbolisant une liste
                  <div className="faq-media-wrapper">
                    <img
                      src={planOuvertureFermeture}
                      alt="Animation montrant l'ouverture et fermeture du plan"
                      width="350"
                      height="350"
                    />
                  </div>
                </li>
                <li className="mt-3">
                  Pour <strong>naviguer dans le plan de formation</strong> :
                  cliquez sur les diff&eacute;rentes fl&egrave;ches
                  <div className="faq-media-wrapper">
                    <img
                      src={planFormationFleches}
                      alt="Animation montrant la navigation dans les flèches du plan"
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
                {formatMessage(messages['faq.q4.question'])}
              </span>
              <img
                src={iconePlus}
                alt="Ouvrir / Fermer"
                className="faq-toggle-icon"
                width="32"
                height="32"
              />
            </summary>
            <div className="faq-content">
              <p>
                Notre &eacute;quipe cherche &agrave; r&eacute;soudre ce probl&egrave;me.
                Des premi&egrave;res explications sont disponibles sur :{' '}
                <a
                  href="https://docs.openedx.org/en/latest/educators/references/data/progress_page.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://docs.openedx.org/en/latest/educators/references/data/progress_page.html
                </a>
              </p>
            </div>
          </details>
        </div>
      </Container>
    </main>
  );
};

export default FAQPage;
