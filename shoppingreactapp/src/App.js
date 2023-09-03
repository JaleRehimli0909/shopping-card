import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
            <Header/>

            <Routes>
              <Route path='/' element={  <Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
            

           
            </Routes>


    
    </BrowserRouter>
  );
}

export default App;
