import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < Navbar />
        <Routes>
          <Route path="/" element= {<ItemListConteiner greeting={"Nuestros Productos"}/>} />
          <Route path="/category/:categoryId" element= {<ItemListConteiner/>} />
          <Route path= "/detail/:productoId" element = {<ItemDetailContainer/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
