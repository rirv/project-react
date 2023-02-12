import "./style.css";
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
/* import { Link} from "react-router-dom"; */

const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "items", id);

    getDoc(querySnapshot)
      .then((response) => {
        setSingleProduct({id: response.id, ...response.data()});
      })
      .catch((error) => {
        console.log(error);
      });
  };
 

  useEffect(() => {
    getProduct ();
  
  }, []);
  return (
    <div>
      <ItemDetail product={singleProduct} />
    </div>
  );
};

export default ItemDetailContainer;
