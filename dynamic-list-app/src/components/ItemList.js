import React from 'react';

const ItemList = ({ items, onRemove }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => onRemove(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
