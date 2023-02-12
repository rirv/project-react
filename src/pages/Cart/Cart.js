import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../context/cartContext";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(cartContext);
  const [order, setOrder] = useState({});
  const db = getFirestore();

  useEffect(() => {
    setOrder({
      buyer: {
        name: "diego Machado",
        phone: "3145124514",
        email: "Testttt@test.com",
      },
      items: cart.map((product) => {
        const { name, price, id } = product;
        return { name, price, id };
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    });
  }, [cart]);

  if (cart.lenght === 0) {
    return <h1>No hay productos en tu carrito</h1>;
  }

  const creatOrder = () => {
    const querySnapshot = collection(db, "orders");

    addDoc(querySnapshot, order)
      .then((response) => {
        console.log(response.id);
        updateStockProducts();
        alert("Orden Creada con Exito, id " + response.id);
      })
      .catch((error) => console.log(error));
  };

  const updateStockProducts = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, "items", product.id);

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then(() => {
          console.log ("el producto actualizo su stock");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div style={{ padding: "40px", width: "500px" }}>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <img
                alt={product.id}
                src={`/images/${product.image}`}
                width="50px"
              />
              <h3>{product.name}</h3>
              <h4>{product.category}</h4>
              <h4>{product.quantity}</h4>
              <h4>{product.price}</h4>
              <button
                onClick={() => removeItem(product.id)}
                style={{ height: "30px" }}
              >
                Eliminar del Carrito
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "150px" }}>
        <button onClick={() => clear()}>Vaciar Carrito</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => creatOrder()}>Crear Orden</button>
      </div>
    </div>
  );
};

export default Cart;
