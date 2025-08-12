import React, { useMemo } from "react";
import { useCart } from "./context/CartContext";

export default function Cart() {
    const { state, dispatch } = useCart();

    const grouped = useMemo(() => {
        const g = {};
        state.cart.forEach(item => {
            if (!g[item.id]) g[item.id] = { ...item, quantity: 1 };
            else g[item.id].quantity += 1;
        });
        return Object.values(g);
    }, [state.cart]);

    const total = useMemo(() => grouped.reduce((s, i) => s + i.price * i.quantity, 0), [grouped]);

    return (
        <div style={{ padding: 16 }}>
            <h2>Your Cart</h2>
            {grouped.length === 0 ? <p>Empty</p> : (
                <>
                    <ul>
                        {grouped.map(it => (
                            <li key={it.id}>
                                <img src={it.image} alt="" width={60} style={{ marginRight: 8 }} />
                                {it.name} x {it.quantity} — ₹{it.price * it.quantity}
                                <button style={{ marginLeft: 8 }} onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: it.id })}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ₹{total}</h3>
                </>
            )}
        </div>
    );
}
