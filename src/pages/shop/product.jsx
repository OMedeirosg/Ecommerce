import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, title, price, images } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  console.log("kct", cartItems);

  return (
    <div className="product">
      <img src={images[0]} alt="product Image" />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p className="price">${price}</p>
      </div>
      <button className="cartBtn" onClick={() => addToCart(id)}>
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
