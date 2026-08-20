import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the announcement', () => {
  render(<App />);
  expect(screen.getByText('ประกาศ')).toBeInTheDocument();
  expect(screen.getByText(/State & Forms/i)).toBeInTheDocument();
  expect(screen.getByText('อย่าลืม push การบ้านขึ้น GitHub!')).toBeInTheDocument();
});
