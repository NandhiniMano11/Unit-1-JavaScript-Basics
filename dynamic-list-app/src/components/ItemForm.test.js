// src/components/ItemForm.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ItemForm from './ItemForm';

test('renders item input and add button', () => {
  render(<ItemForm />);
  const inputElement = screen.getByPlaceholderText('Enter item');
  const addButtonElement = screen.getByText('Add Item');

  expect(inputElement).toBeInTheDocument();
  expect(addButtonElement).toBeInTheDocument();
});

test('calls onAdd function with input value when form is submitted', () => {
  const onAdd = jest.fn();
  render(<ItemForm onAdd={onAdd} />);
  const inputElement = screen.getByPlaceholderText('Enter item');
  const addButtonElement = screen.getByText('Add Item');

  fireEvent.change(inputElement, { target: { value: 'New Item' } });
  fireEvent.click(addButtonElement);

  expect(onAdd).toHaveBeenCalledWith('New Item');
});
