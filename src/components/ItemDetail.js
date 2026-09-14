import React from "react";
import { Link, useParams } from "react-router-dom";

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

function ItemDetail() {
  const { id } = useParams();

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <div>
        <h1>Item Not Found</h1>
        <Link to="/">Back to Items</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>

      <Link to="/">Back to Item List</Link>
    </div>
  );
}

export default ItemDetail;

