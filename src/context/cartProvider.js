import { useState } from "react";
import { cartContext } from "./cartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)){
      alert("El producto ya se agrego al carrito");
    } else {
    const newProduct = {
      id: item.id,
      name: item.title,
      price: item.price,
      quantity: quantity,
      description: item.description,
      category: item.categoryId,
      image: item.imageId,
    };
    setCart([...cart, newProduct]);
  }
  };

  const removeItem = (productId) => {
    setCart(cart.filter((product) => product.id !== productId))

  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider value={{ cart, addItem, clear, removeItem }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
