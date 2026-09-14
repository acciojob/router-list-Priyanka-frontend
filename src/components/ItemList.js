import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Item 1",
    description: "A powerful laptop for work and study."
  },
  {
    id: 2,
    name: "Item 2",
    description: "A smartphone with modern features."
  },
  {
    id: 3,
    name: "Item 3",
    description: "Wireless headphones with clear sound."
  }
];

function ItemList() {
  return (
    <div>
      <h1>Item List</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

