const restaurants = [
    {
        id: 1,
        name: "Dominos Pizza",
        cuisine: "Italian",
        rating: 4.5,
        image: "https://source.unsplash.com/400x300/?pizza",
        menu: [
            { id: "m1", name: "Margherita", price: 199 },
            { id: "m2", name: "Pepperoni", price: 249 },
            { id: "m3", name: "Chicken", price: 200 }
        ]
    },
    {
        id: 2,
        name: "Biryani Hub",
        cuisine: "Indian",
        rating: 4.2,
        image: "https://source.unsplash.com/400x300/?biryani",
        menu: [
            { id: "m4", name: "Hyderabadi Biryani", price: 299 },
            { id: "m5", name: "Zafar Biryani", price: 150 },
            { id: "m6", name: "Delux Biryani", price: 180 }
        ]
    },
];
export default restaurants;