import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Laptop",
    description: "A powerful laptop for work and study."
  },
  {
    id: 2,
    name: "Mobile Phone",
    description: "A smartphone with modern features."
  },
  {
    id: 3,
    name: "Headphones",
    description: "Wireless headphones with clear sound."
  },
  {
    id: 4,
    name: "Keyboard",
    description: "A comfortable keyboard for everyday use."
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

