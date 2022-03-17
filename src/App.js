import React , {useState, createContext} from 'react'
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from './Components/Cart';
import Checkout from './Components/Checkout'



export const CartItemsContext = createContext()

function App() {
  const [cart ,setCart] = useState([])
  const [FinalOrder ,setFinalOrder] = useState([])

  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path='/cart' element={<Cart cart ={cart} setCart={setCart} finalOrder={FinalOrder} changeFinalOrder={setFinalOrder} />}/>
          <Route path='/' element={<Home cart ={cart} setCart={setCart}/>}/>
          <Route path='/checkout' element={<Checkout cart ={cart} setCart={setCart} finalOrder={FinalOrder}/>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
