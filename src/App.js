import React , {useState, createContext} from 'react'
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from './Components/Cart';



export const CartItemsContext = createContext()

function App() {
  const [cart ,setCart] = useState([])
  console.log(cart,'inside app')
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path='/cart' element={<Cart cart ={cart} setCart={setCart} />}/>
          <Route path='/' element={<Home cart ={cart} setCart={setCart}/>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
