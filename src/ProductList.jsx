import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantCategories = [
  {
    name: "Air Purifying Plants",
    plants: [
      {
        id: "snake-plant",
        name: "Snake Plant",
        description: "Tolerates low light and filters indoor air all day.",
        price: 12,
        image:
          "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "peace-lily",
        name: "Peace Lily",
        description: "Glossy leaves and white blooms that remove common toxins.",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    name: "Low Maintenance Plants",
    plants: [
      {
        id: "zz-plant",
        name: "ZZ Plant",
        description: "Thrives on neglect and looks good in every corner.",
        price: 22,
        image:
          "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "aloe-vera",
        name: "Aloe Vera",
        description: "A sun loving succulent with soothing gel inside each leaf.",
        price: 9,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f2360af1b5?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    name: "Flowering Plants",
    plants: [
      {
        id: "orchid",
        name: "Phalaenopsis Orchid",
        description: "Elegant blooms that last for months with minimal care.",
        price: 26,
        image:
          "https://images.unsplash.com/photo-1566907225472-514215c9e2db?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "anthurium",
        name: "Anthurium",
        description: "Waxy red flowers that brighten any shaded room.",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const inCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <section className="product-list">
      {plantCategories.map((category) => (
        <div className="category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="plants">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <div className="card-body">
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <span className="price">${plant.price}</span>
                  <button
                    type="button"
                    disabled={inCart(plant.id)}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {inCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
