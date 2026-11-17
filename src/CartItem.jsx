import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) =>
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));

  const handleDecrement = (item) =>
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));

  const handleDelete = (item) => dispatch(removeItem(item.id));

  const handleCheckout = () => {
    window.alert("Checkout is coming soon. Thank you for shopping with Paradise Nursery!");
  };

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <h1>Your Cart</h1>
        <p>Your cart is empty. Visit the plants page to add a green friend.</p>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="details">
            <h3>{item.name}</h3>
            <p>Unit price: ${item.price}</p>
            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <div className="quantity-controls">
            <button type="button" aria-label={`Decrease ${item.name}`} onClick={() => handleDecrement(item)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button type="button" aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}>
              +
            </button>
          </div>
          <button type="button" className="delete" onClick={() => handleDelete(item)}>
            Delete
          </button>
        </div>
      ))}
      <p className="cart-total">Total cost: ${totalCost.toFixed(2)}</p>
      <button type="button" className="checkout" onClick={handleCheckout}>
        Checkout
      </button>
    </section>
  );
}
