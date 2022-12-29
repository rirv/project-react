import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a Mundo Estampilla!"/>
      </div>
      
    </div>
  );
}

export default App;
