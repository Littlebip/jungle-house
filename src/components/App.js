import '../App.css';
import Banner from './Banner';
import Cart from './Cart';
import Category from './Category';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const [chosenCategory, changeCategory] = useState('');

  return (<div>
            <Banner />
            <div className='main-content'>
              <Category chosenCategory={chosenCategory} changeCategory={changeCategory}/>
              <ShoppingList cart={cart} updateCart={updateCart} chosenCategory={chosenCategory} changeCategory={changeCategory} />
              <Cart cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
          </div>)
}

export default App;
