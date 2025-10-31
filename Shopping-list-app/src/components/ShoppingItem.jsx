import "./ShoppingItem.css"

export function ShoppingItem({ shoppingLists, handleDelete }) {
  return (
    <ul className="shopping-list">
      {shoppingLists.map((item, index) => (
        <li key={index} className="list-item">
          <span className="list-text">{item}</span>
          <button
            className="delete-button"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
