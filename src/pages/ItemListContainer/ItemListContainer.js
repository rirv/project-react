import ItemCount from "../../components/ItemCount/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
const arreglo = [
    {name: 'producto 1', id: '1'},
    {name: 'producto 2', id: '2'},
    {name: 'producto 3', id: '3'},
    {name: 'producto 4', id: '4'},
    {name: 'producto 5', id: '5'},
    {name: 'producto 6', id: '6'},
    {name: 'producto 7', id: '7'},
]

const ItemListContainer = ({greeting}) => {
    const [ products, setProducts ] = useState ([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { category } = useParams ();

/*     const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arreglo);
        }, 2000);
    }); */


    const getProducts = fetch("https://fakestoreapi.com/products", {
        method: 'GET',
        headers: {
            'content-type': 'json'
        }
    });

    useEffect (() =>{
        getProducts
            .then((res) => {
                return res.json();
            })
        .then((response) => {
            setProducts (response);
        })
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if (category){
        const removeCharacters = category.includes('%20') ? category.replace('%20?', '') : category
        const filterProducts = products.filter((product) => product.category === removeCharacters);
        setFilteredProducts(filterProducts);
        }
    }, [category]);

  return (
  <div>
    {greeting}
    <ItemCount />
    <ItemList productos={category ? filteredProducts : products}/>
    
    </div>);
  
}

export default ItemListContainer;