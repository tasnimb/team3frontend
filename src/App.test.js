import { render, screen } from '@testing-library/react';
import App from './App';
import { unmountComponentAtNode } from 'react-dom';


let container = null;
beforeEach(() => {

  container = document.createElement("div");
  document.body.appendChild(container);

});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
