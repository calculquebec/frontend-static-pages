import { render, screen } from '@testing-library/react';
import { IntlProvider } from '@openedx/frontend-base';
import ANSPage from './ANSPage';

describe('ANSPage', () => {
  const originalLocation = window.location;

  afterEach(() => {
    document.cookie = 'openedx-language-preference=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location = originalLocation;
  });

  it('renders the ANS page heading and all sections in French by default with lowercase evolo', () => {
    render(
      <IntlProvider locale="fr" messages={{}}>
        <ANSPage />
      </IntlProvider>
    );

    expect(screen.getByText(/Accord de niveau de service/i)).toBeInTheDocument();
    expect(screen.getByText(/1 – Introduction/i)).toBeInTheDocument();
    expect(screen.getByText(/2 – Définitions/i)).toBeInTheDocument();
    expect(screen.getByText(/3 – Conditions.*spécifiques à evolo/i)).toBeInTheDocument();
    expect(screen.getByText(/4 – Niveau de service - evolo/i)).toBeInTheDocument();
    expect(screen.getByText(/5 – Propriété intellectuelle/i)).toBeInTheDocument();
    expect(screen.getByText(/6 – Dispositions finales/i)).toBeInTheDocument();

    const evoloSpans = document.querySelectorAll('.ans-evolo-name');
    expect(evoloSpans.length).toBeGreaterThan(0);
    evoloSpans.forEach((el) => {
      expect(el.textContent).toBe('evolo');
    });
  });

  it('renders the ANS page in English when openedx-language-preference cookie is en with lowercase evolo', () => {
    document.cookie = 'openedx-language-preference=en; path=/;';
    render(
      <IntlProvider locale="en" messages={{}}>
        <ANSPage />
      </IntlProvider>
    );

    expect(screen.getByText(/Service Level Agreement/i)).toBeInTheDocument();
    expect(screen.getByText(/Table of Contents/i)).toBeInTheDocument();
    expect(screen.getByText(/2 – Definitions/i)).toBeInTheDocument();
    expect(screen.getByText(/3 – Specific Terms of Use for evolo/i)).toBeInTheDocument();
    expect(screen.getByText(/4 – evolo Level of Service/i)).toBeInTheDocument();
    expect(screen.getByText(/5 – Intellectual property/i)).toBeInTheDocument();
    expect(screen.getByText(/6 – Final provision/i)).toBeInTheDocument();

    const evoloSpans = document.querySelectorAll('.ans-evolo-name');
    expect(evoloSpans.length).toBeGreaterThan(0);
    evoloSpans.forEach((el) => {
      expect(el.textContent).toBe('evolo');
    });
  });

  it('renders the ANS page in English when visited through /sla with no cookie set', () => {
    delete (window as any).location;
    window.location = { ...originalLocation, pathname: '/sla' } as any;

    render(
      <IntlProvider locale="fr" messages={{}}>
        <ANSPage />
      </IntlProvider>
    );

    expect(screen.getByText(/Service Level Agreement/i)).toBeInTheDocument();
    expect(screen.getByText(/Table of Contents/i)).toBeInTheDocument();
    expect(screen.getByText(/2 – Definitions/i)).toBeInTheDocument();
  });

  it('renders the ANS page in French when visited through /sla but cookie is set to fr', () => {
    delete (window as any).location;
    window.location = { ...originalLocation, pathname: '/sla' } as any;
    document.cookie = 'openedx-language-preference=fr; path=/;';

    render(
      <IntlProvider locale="fr" messages={{}}>
        <ANSPage />
      </IntlProvider>
    );

    expect(screen.getByText(/Accord de niveau de service/i)).toBeInTheDocument();
    expect(screen.getByText(/1 – Introduction/i)).toBeInTheDocument();
  });
});
