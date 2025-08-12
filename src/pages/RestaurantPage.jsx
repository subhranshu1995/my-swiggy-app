import React from "react";
import { useParams } from "react-router-dom";
import restaurants from "../data/restaurants";
import { useCart } from "../context/CartContext";

export default function RestaurantPage() {
    const { id } = useParams();
    const restaurant = restaurants.find(r => r.id === Number(id));
    const { dispatch } = useCart();

    if (!restaurant) return <p>Restaurant not found</p>;

    return (
        <div style={{ padding: 16 }}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine}</p>
            <h3>Menu</h3>
            <ul>
                {restaurant.menu.map(item => (
                    <li key={item.id}>
                        {item.name} - ₹{item.price}
                        <button style={{ marginLeft: 8 }} onClick={() => dispatch({ type: "ADD_TO_CART", payload: { ...item, image: restaurant.image } })}>Add</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
