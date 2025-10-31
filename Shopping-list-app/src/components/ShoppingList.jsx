import { ShoppingItem } from "./ShoppingItem";
import "./ShoppingList.css"

export function ShoppingList({ handleDelete, shoppingLists }) {
  return (
    <ul className="shopping-list">
      {shoppingLists.map((shoppingList, index) => (
        <ShoppingItem
          key={index}
          text={shoppingList}
          handleDelete={() => handleDelete(index)}
        />
      ))}   


    </ul>
  );
}