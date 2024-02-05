// src/components/ItemList.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ItemList from './ItemList';

test('renders list of items', () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  render(<ItemList items={items} />);

  items.forEach(item => {
    const itemElement = screen.getByText(item);
    expect(itemElement).toBeInTheDocument();
  });
});

test('calls onRemove function when remove button is clicked', () => {
  const onRemove = jest.fn();
  const items = ['Item 1', 'Item 2', 'Item 3'];
  render(<ItemList items={items} onRemove={onRemove} />);

  const removeButtons = screen.getAllByText('Remove');
  removeButtons.forEach((button, index) => {
    fireEvent.click(button);
    expect(onRemove).toHaveBeenCalledWith(index);
  });
});
