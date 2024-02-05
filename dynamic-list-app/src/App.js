import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>Dynamic List</h1>
      <ItemForm onAdd={handleAddItem} />
      <ItemList items={items} onRemove={handleRemoveItem} />
    </div>
  );
}

export default App;
