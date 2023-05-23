import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartContextProvider children={<NavBar />} />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={<h2 style={{ textAlign: "center"}}>Productos</h2>}/>} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContextProvider children={<Cart />}/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
