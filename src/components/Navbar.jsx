import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";

export default function Navbar() {
    const { state } = useCart(); // guaranteed by provider in main.jsx
    const count = state.cart.length;

    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: 12, background: "#f97316" }}>
            <Link to="/" style={{ color: "white", fontWeight: "bold" }}>My Swiggy</Link>
            <div><Link to="/cart" style={{ color: "white" }}>Cart ({count})</Link></div>
        </nav>
    );
}
