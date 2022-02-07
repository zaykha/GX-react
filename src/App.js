import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Productspage from './pages/productspage/productspage';


function App() {
 
  return (
    <Router>
      
       <Routes>
          <Route path='/' element={<Homepage/>}/>
           <Route path='/productspage' element={<Productspage/>}/>
       </Routes>
    </Router>
  );
}

export default App;


// primary #fbae1a yellowish
// secondary #2a2a2a chacoal
// sets, Chicken, fish, pork, mutton , beef, prawn, crab, vegs