import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { cartContext } from "../../context/cartContext";

const ItemDetail = ({ product }) => {
  const { addItem} = useContext (cartContext);
  const [contador, setContador] = useState(1);
  const stock = 10;
  const getNumeroCualquiera = (numero) => {
    console.log("el numero es " + numero);
  };
  return (
    <div width="200" className="product">
      <img alt={product.title} src={`/images/${product.imageId}`} width="200" />
      <h2>Estos productos estan listos para tu carrito {contador}</h2>
      <h2>{product.title}</h2>
      <h3>{product.categoryId}</h3>
      <h3>{product.description}</h3>
      <ItemCount
        contador={contador}
        actualizaValor={setContador}
        stock={product.stock}
        getNumeroCualquiera={getNumeroCualquiera}
      />
      <div>
        <button onClick= {() => addItem (product, contador)}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
