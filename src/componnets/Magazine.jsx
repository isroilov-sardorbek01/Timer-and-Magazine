import React, { useState } from "react";
import allMenu from "../menu.json";

function Magazine() {
    const [quantity, setQuantity] = useState({});
    const [cart, setCart] = useState([]);

    function handlePlus(id) {
        setQuantity((prev) => {
            const newQuantity = { ...prev };
            newQuantity[id] = (newQuantity[id] || 0) + 1;
            return newQuantity;
        });

        const item = allMenu.find((item) => item.id === id);
        if (item) {
            setCart((prevCart) => {
                const existingItem = prevCart.find(
                    (cartItem) => cartItem.id === id
                );
                if (existingItem) {
                    return prevCart.map((cartItem) =>
                        cartItem.id === id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    );
                }
                return [...prevCart, { ...item, quantity: 1 }];
            });
        }
    }

    function handleMinus(id) {
        setQuantity((prev) => {
            const newQuantity = { ...prev };
            if (newQuantity[id] > 0) {
                newQuantity[id] -= 1;
            }
            return newQuantity;
        });

        setCart((prevCart) => {
            return prevCart
                .map((cartItem) => {
                    if (cartItem.id === id && cartItem.quantity > 1) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 }; // Sonni kamaytirish
                    }
                    return cartItem;
                })
                .filter((cartItem) => cartItem.quantity > 0);
        });
    }

    return (
        <div className="mt-20">
            <div className="container1">
                <h1 className="mb-4 text-3xl">Welcome to our Restaurant</h1>
                <div className="flex justify-around mt-5 mb-20 allSame">
                    {allMenu.length > 0 &&
                        allMenu.map((data) => {
                            return (
                                <div className="p-4 text-center text-white bg-blue-400 rounded-md menu-item" key={data.id}>
                                    <h2 className="text-[50px]">{data.name}</h2>
                                    <p className="">Price: ${data.price}</p>
                                    <div className="quantity-controls">
                                        <button
                                            onClick={() => handleMinus(data.id)}
                                        >
                                            -
                                        </button>
                                        <span>{quantity[data.id] || 0}</span>
                                        <button
                                            onClick={() => handlePlus(data.id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="cart">
                    <h2 className="text-[30px]">Cart</h2>
                    {cart.length > 0 ? (
                        <div>
                            <ul className="flex flex-wrap gap-4">
                                {cart.map((item) => (
                                    <li key={item.id} className="w-[150px] p-4 rounded-md bg-blue-400">
                                        <span>{item.name}</span>
                                        <span> x{item.quantity}</span>
                                        <span>
                                            {" "}
                                            = ${item.price * item.quantity}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>Your cart is yet</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Magazine;
