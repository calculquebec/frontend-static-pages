import { render, screen } from '@testing-library/react';
import { IntlProvider } from '@openedx/frontend-base';
import FAQPage from './FAQPage';

describe('FAQPage', () => {
  afterEach(() => {
    document.cookie = 'openedx-language-preference=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  });

  it('renders the FAQ page heading and questions in French by default', () => {
    render(
      <IntlProvider locale="fr" messages={{}}>
        <FAQPage />
      </IntlProvider>
    );

    expect(screen.getByText(/Foire aux questions/i)).toBeInTheDocument();
    expect(screen.getByText(/Où puis-je poser une question \?/i)).toBeInTheDocument();
    expect(screen.getByText(/Quels sont les prérequis liés à cette formation \?/i)).toBeInTheDocument();
    expect(screen.getByText(/Comment naviguer dans cette formation \?/i)).toBeInTheDocument();
    expect(screen.getByText(/Ma progression ne se met pas à jour/i)).toBeInTheDocument();
  });

  it('renders the FAQ page in English when openedx-language-preference cookie is en', () => {
    document.cookie = 'openedx-language-preference=en; path=/;';
    render(
      <IntlProvider locale="en" messages={{}}>
        <FAQPage />
      </IntlProvider>
    );

    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
    expect(screen.getByText(/Where can I ask a question\?/i)).toBeInTheDocument();
    expect(screen.getByText(/What are the prerequisites for this training\?/i)).toBeInTheDocument();
    expect(screen.getByText(/How to navigate this training\?/i)).toBeInTheDocument();
    expect(screen.getByText(/My progress is not updating/i)).toBeInTheDocument();
  });
});
