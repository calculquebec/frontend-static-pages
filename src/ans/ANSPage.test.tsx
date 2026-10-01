import { render, screen } from '@testing-library/react';
import { IntlProvider } from '@openedx/frontend-base';
import ANSPage from './ANSPage';

describe('ANSPage', () => {
  afterEach(() => {
    document.cookie = 'openedx-language-preference=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  });

  it('renders the ANS page heading and all sections in French by default', () => {
    render(
      <IntlProvider locale="fr" messages={{}}>
        <ANSPage />
      </IntlProvider>
    );

    expect(screen.getByText(/Accord de niveau de service/i)).toBeInTheDocument();
    expect(screen.getByText(/1 – Introduction/i)).toBeInTheDocument();
    expect(screen.getByText(/2 – Définitions/i)).toBeInTheDocument();
    expect(screen.getByText(/3 – Conditions d'utilisation spécifiques à Evolo/i)).toBeInTheDocument();
    expect(screen.getByText(/4 – Niveau de service - Evolo/i)).toBeInTheDocument();
    expect(screen.getByText(/5 – Propriété intellectuelle/i)).toBeInTheDocument();
    expect(screen.getByText(/6 – Dispositions finales/i)).toBeInTheDocument();
  });

  it('renders the ANS page in English when openedx-language-preference cookie is en', () => {
    document.cookie = 'openedx-language-preference=en; path=/;';
    render(
      <IntlProvider locale="en" messages={{}}>
        <ANSPage />
      </IntlProvider>
    );

    expect(screen.getByText(/Service Level Agreement/i)).toBeInTheDocument();
    expect(screen.getByText(/Table of Contents/i)).toBeInTheDocument();
    expect(screen.getByText(/2 – Definitions/i)).toBeInTheDocument();
    expect(screen.getByText(/3 – Specific Terms of Use for Evolo/i)).toBeInTheDocument();
    expect(screen.getByText(/4 – Evolo Level of Service/i)).toBeInTheDocument();
    expect(screen.getByText(/5 – Intellectual property/i)).toBeInTheDocument();
    expect(screen.getByText(/6 – Final provision/i)).toBeInTheDocument();
  });
});
