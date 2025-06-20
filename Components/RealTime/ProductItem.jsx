import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="bg-white  p-4 shadow-2xl rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="text-l font-bold text-gray-700  p-2 ml-2">
        {product.title}
      </h3>
      <p className="text-md font-bold text-black  p-3">{product.price}</p>
      <button onClick={() =>addToCart(product)} className="bg-cyan-600 font-bold text-white flex gap-3 p-3 ml-2 rounded hover:bg-cyan-950 ">
        <AiOutlineShoppingCart />
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItem;
