import './style.css';

const ItemCount = ({contador, actualizaValor, stock, getNumeroCualquiera}) => {
  const numeroCualquiera = 10;
    const OnAdd = () =>{
        if (stock === contador) {
            return;
        }
        actualizaValor(contador + 1);
        getNumeroCualquiera(numeroCualquiera)
    };
    const restar = () =>{
        if (contador === 0){
            return;
        }
        actualizaValor(contador - 1)
    };

  return (
    <div className="counter">
      <div className="controllers">
        <button onClick={restar}>-</button>
        <div>
          <span>{contador}</span>
        </div>
        <button onClick={OnAdd}>+</button>
      </div>
    </div>
  );
};
export default ItemCount;
