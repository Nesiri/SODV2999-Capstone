// __tests__/components.test.tsx
import { renderWithProviders } from '../test/test-utils';
import { expect, test } from 'vitest';

const modules = import.meta.glob('../components/**/*.tsx', { eager: true });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Object.entries(modules).forEach(([path, mod]: any) => {
  const Component = mod.default;

  if (!Component) return;

  const name = path.split('/').pop()?.replace('.tsx', '') || 'Component';

  test(`${name} renders correctly`, () => {
    const { container } = renderWithProviders(<Component />);
    expect(container).toBeTruthy();
  });
});
