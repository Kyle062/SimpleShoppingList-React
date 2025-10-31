import { useState } from 'react'
import './App.css'
import { ShoppingInput } from './components/ShoppingInput';
import { ShoppingItem } from './components/ShoppingItem';

 function App() {
  const [shoppingLists, setShoppingList] = useState([]);

  function handleAddShoppingList(newShoppingLists) {
    if (newShoppingLists.trim() !== "") {
      setShoppingList([...shoppingLists, newShoppingLists]);
    }
  }

  function handleDelete(index) {
    setShoppingList(shoppingLists.filter((_, i) => i !== index));
  }

  return (
    <div className='app-container'>
      <h1>🛒 My Shopping List</h1>
      <div className="app-card">
        <ShoppingInput handleAddShoppingList={handleAddShoppingList} />
        <ShoppingItem handleDelete={handleDelete} shoppingLists={shoppingLists} />
      </div>
    </div>
  )
}

export default App;
