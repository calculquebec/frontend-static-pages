import { render, screen } from '@testing-library/react';
import { IntlProvider } from '@openedx/frontend-base';
import ANSPage from './ANSPage';

describe('ANSPage', () => {
  it('renders the ANS page heading and all sections', () => {
    render(
      <IntlProvider locale="fr" messages={{}}>
        <ANSPage />
      </IntlProvider>
    );

    expect(screen.getByText(/Accord de niveau de service/i)).toBeInTheDocument();
    expect(screen.getByText(/1 – Introduction/i)).toBeInTheDocument();
    expect(screen.getByText(/2 – Définitions/i)).toBeInTheDocument();
    expect(screen.getByText(/3 – Conditions d’utilisation spécifiques à Evolo/i)).toBeInTheDocument();
    expect(screen.getByText(/4 – Niveau de service - Evolo/i)).toBeInTheDocument();
    expect(screen.getByText(/5 – Propriété intellectuelle/i)).toBeInTheDocument();
    expect(screen.getByText(/6 – Dispositions finales/i)).toBeInTheDocument();
  });
});
