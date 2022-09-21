import './App.css';
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      < Navbar />
      <ItemListConteiner greeting={"Nuestros Productos"}/>
    </div>
  );
}

export default App;
