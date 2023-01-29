import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="product Image" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p className="price">${price}</p>
      </div>
      <button className="cartBtn" onClick={() => addToCart(id)}>
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
