// Item.jsx
import { useState } from "react";
import Heart from "./Heart";

function Item({ p = {}, showModal }) {
    const { name = "Unknown Item", prices = {}, desc = "", img = "default.jpg" } = p;
    const [price] = useState(prices.default || 0);
    const [quant, setQuant] = useState(1);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white relative">
            <div className="rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5">
                <Heart />
            </div>
            <img className="w-full" src={img} alt={name} />
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-700 mb-4">{desc}</p>
                <h5 className="text-lg font-semibold mb-4">{quant * price}₼</h5>
                <div className="flex items-center justify-between mb-3">
                    <button
                        onClick={() => setQuant(quant > 1 ? quant - 1 : quant)}
                        className="px-3 py-1 bg-gray-200 rounded"
                    >
                        -
                    </button>
                    <span className="px-3 py-2">{quant}</span>
                    <button
                        onClick={() => setQuant(quant + 1)}
                        className="px-3 py-1 bg-gray-200 rounded"
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => showModal(true)}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Ye məni
                </button>
            </div>
        </div>
    );
}

export default Item;
