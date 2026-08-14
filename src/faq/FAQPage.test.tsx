import { render, screen } from '@testing-library/react';
import { IntlProvider } from '@openedx/frontend-base';
import FAQPage from './FAQPage';

describe('FAQPage', () => {
  it('renders the FAQ page heading and questions', () => {
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
});
