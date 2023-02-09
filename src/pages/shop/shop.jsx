import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const { products } = useContext(ShopContext);
  return (
    <div className="shop">
      <h1>MarreteiroShop</h1>
      <div className="products">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
