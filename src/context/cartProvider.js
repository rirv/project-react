import { useState } from "react";
import { cartContext } from "./cartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newProduct = {
        id: item.id,
        name: item.title,
        price: item.price,
        quantity: quantity,
        category: item.category,
    };
    setCart([...cart, newProduct])
  };

  const removeItem = (id) => {

  };




const clear = () => {
    setCart([]);
}

  return (
    <cartContext.Provider value={{ cart, addItem }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
