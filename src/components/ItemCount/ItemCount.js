import './style.css';
import { useState } from 'react';

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    const stock = 10;
    const sumar = () =>{
        if (stock === contador) {
            return;
        }
        setContador(contador + 1)
    };
    const restar = () =>{
        if (contador === 0){
            return;
        }
        setContador(contador - 1)
    };

  return (
    <div className="counter">
      <div className="controllers">
        <button onClick={restar}>-</button>
        <div>
          <span>{contador}</span>
        </div>
        <button onClick={sumar}>+</button>
      </div>
      <div>
        <button>Agregar al Carrito</button>
      </div>
    </div>
  );
};
export default ItemCount;
