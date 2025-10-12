import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./cart.css";

export default function Cart() {
    const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
    const subtotal = cart.reduce((acc, cur) => acc + parseFloat(cur.price) * cur.quantity, 0);

    if (cart.length === 0) {
        return <div className="cart">Your cart is empty.</div>;
    }

    return (
        <div className="cart">
            <h1>Your Cart</h1>

            {cart.map((item) => (
                <div className="row">
                <div key={item.id} className="cart-row">
                    <div className="item-info">
                        <img src={item.image} alt={item.name} />
                        <div>
                            <h2>{item.name}</h2>
                            <p>${parseFloat(item.price).toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="item-controls">
                        <div className="quantity">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <p>Total: ${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                </div>
                </div>
            ))}

            <div className="subtotal">
                <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
                <button onClick={clearCart}>Clear Cart</button>
                <button>Checkout</button>
            </div>
        </div>
    );
}
