import React from "react";
import restaurants from "../data/restaurants";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div style={{ padding: 16 }}>
            <h1>Restaurants</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                {restaurants.map(r => (
                    <Link key={r.id} to={`/restaurant/${r.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
                            <img src={r.image} alt="" style={{ width: "100%", borderRadius: 6 }} loading="lazy" />
                            <h3>{r.name}</h3>
                            <p>{r.cuisine} • ⭐ {r.rating}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
