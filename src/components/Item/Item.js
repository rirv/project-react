import "./style.css";
const Item = ({ producto }) => {
  return (
    <li width="200" className="product">
      <img
        alt={producto.title}
        src={`/images/${producto.imageId}`}
        width="200"
      />
      <h2>{producto.title}</h2>
      <h3>{producto.categoryId}</h3>
      <h3>{producto.description}</h3>
    </li>
  );
};

export default Item;
