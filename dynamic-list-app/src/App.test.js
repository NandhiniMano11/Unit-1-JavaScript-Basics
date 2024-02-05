// src/App.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders Dynamic List title', () => {
  render(<App />);
  const titleElement = screen.getByText('Dynamic List');
  expect(titleElement).toBeInTheDocument();
});

test('adds and removes items from the list', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Enter item');
  const addButtonElement = screen.getByText('Add Item');

  // Add items to the list
  fireEvent.change(inputElement, { target: { value: 'Item 1' } });
  fireEvent.click(addButtonElement);
  expect(screen.getByText('Item 1')).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'Item 2' } });
  fireEvent.click(addButtonElement);
  expect(screen.getByText('Item 2')).toBeInTheDocument();

  // Remove item from the list
  const removeButtons = screen.getAllByText('Remove');
  fireEvent.click(removeButtons[0]); // Remove the first item
  expect(screen.queryByText('Item 1')).toBeNull(); // Check if Item 1 is removed
});
