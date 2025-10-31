import { useState } from "react";
import "./ShoppingInput.css"

export function ShoppingInput({ handleAddShoppingList }) {
  const [inputText, setInputText] = useState('');
  
  function handleAddClick() {
    handleAddShoppingList(inputText);
    setInputText('')
  }

  return (
    <div className="input-container">
      <input type="text"
        className="list-input"
        placeholder="Add to the list..."
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={handleAddClick}
        className="add-button">
        Add
      </button>
    </div>
  );
}