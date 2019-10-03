import React from 'react';
import ReactDOM from 'react-dom';
import ButtonCart from './ButtonCart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonCart />, div);
  expect(div.textContent).toBe("0");
  ReactDOM.unmountComponentAtNode(div);
});