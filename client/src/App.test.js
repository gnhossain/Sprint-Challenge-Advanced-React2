import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders "Players" text', () => {
  const wrapper = render(<App />);
  const hasTitleText = wrapper.queryByText(/women's world cup players/i);
});

it('renders "Navbar" text', () => {
  const wrapper = render(<App />);
  const TitleText = wrapper.queryByText(/sprin-advanced react/i);
});

it('renders "Card" text', () => {
  const wrapper = render(<App />);
  const cardTitleText = wrapper.queryByText(/player's name/i);
});