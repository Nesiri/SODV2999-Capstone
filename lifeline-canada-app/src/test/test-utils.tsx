// test/test-utils.ts
import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { AllTheProviders } from './providers';

// This file only exports utilities/functions - no components
export function renderWithProviders(ui: ReactNode) {
  return render(ui, { wrapper: AllTheProviders });
}
