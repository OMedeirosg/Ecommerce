import React, { createContext, useState, useEffect } from "react";
import { Product } from "../pages/shop/product";
export const ShopContext = createContext(null);
//Aqui e o endereço  da api para pegar os dados
const apiUrl = "https://dummyjson.com/products";

export const ShopProvider = (props) => {
  const [cartItems, setCartItems] = useState();
  //aqui e para guarda o estado que vem da api
  const [products, setProducts] = useState([]);

  console.log("socrro", apiUrl);
  //aqui e o useEffet que faz a chamada da api rodar e buscar os dados
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        //aqui transformei os dados da api em json(formato de dados)
        return res.json();
      })
      .then((data) => {
        //aqui eu pego os dados ja em Json e coloco eles no estado para mostrar na tela
        console.log("help", data);
        // seto o carrinho com a lista de produtos
        const cart = getDefaultCart(data.products);
        setCartItems(cart);
        setProducts(data.products);
      });
  }, []);

  const getDefaultCart = (products) => {
    let cart = {};
    for (let i = 1; i < products.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const getTotalCartAmount = (products) => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const contextValue = {
    cartItems,
    products,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getDefaultCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
