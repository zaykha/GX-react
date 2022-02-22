import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Productspage from './pages/productspage/productspage';
import About from './pages/About/About';
import Cart from './pages/Cart/cart';
import { useState } from 'react';


function App() {
 
  const [basket, setBasket] = useState([]);
  const onAdd = (product)=>{
    const exist = basket.find((x) => x.id === product.id);
    if(exist){
      setBasket(
        basket.map((x)=> x.id === product.id ? {...exist, qty: exist.qty + 1 }: x)
      );
    } else {
      setBasket([...basket, {...product, qty:1}]);
    }
  };
  const onRemove = (product) => {
    const exist = basket.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setBasket(basket.filter((x) => x.id !== product.id));
    } else {
      setBasket(
       basket.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const ondelete = (product) =>{
    const exist = basket.find((x) => x.id === product.id);
    if (exist.qty >= 1) {
      setBasket(basket.filter((x) => x.id !== product.id));
    } 
  }
  return (
    <Router>
      
       <Routes>
          <Route path='/' element={<Homepage/>}/>
           <Route path='/productspage' element={<Productspage ondelete={ondelete} basket={basket} onAdd={onAdd} onRemove={onRemove}/>}/>
           <Route path='/About' element={<About />}/>
           <Route path='/cart' element={<Cart ondelete={ondelete} basket={basket} onAdd={onAdd} onRemove={onRemove}/>}/>
           
       </Routes>
    </Router>
  );
}

export default App;


// primary #fbae1a yellowish
// secondary #2a2a2a chacoal
// sets, Chicken, fish, pork, mutton , beef, prawn, crab, vegs