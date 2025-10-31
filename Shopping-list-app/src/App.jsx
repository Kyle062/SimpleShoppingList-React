
import { useState } from 'react'
import './App.css'
import { ShoppingInput } from './components/ShoppingInput';

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  function handleAddShoppingList(newShoppingList) {
    if (newShoppingList !== "") {
      setShoppingList([...shoppingList, newShoppingList]);
    }
  }

  return (
    <div className='app-container'>
      <ShoppingInput handleAddShoppingList={handleAddShoppingList} />
    </div>
  )
}

export default App
