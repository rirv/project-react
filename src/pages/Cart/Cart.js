import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

const Cart = () => {
    const {cart} = useContext(cartContext);

  return (
  <div>
    {cart.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
    ))}
    </div>
  );
}

export default Cart;