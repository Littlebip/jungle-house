import '../styles/Cart.css';
import { useState, useEffect } from 'react';

function Cart({ cart, updateCart}) {
  const [isOpen, setOpen] = useState(false);
  const total = cart.reduce((accumulator, {price, amount}) => (
    accumulator + (price * amount)
  ), 0)

  useEffect(() => {
    document.title = `${total}€ to pay`
  }, [total])

  return isOpen ? (
      <div className='jh-cart'>
        <button className='jh-cart-toggle-button' onClick={() => setOpen(false)}>Close cart</button>

        {/* display the cart content only if it is not empty */}
        {cart.length > 0 ? (
          <div>
            <h2>Cart</h2>
            <ul className='jh-cart-items-list'>
              {cart.map(({name, price, amount}, index) => (
                <li key={`item-${index}`}><span className='jh-cart-item-name'>{name}</span> {price}€ x {amount}</li>
              ))}
            </ul>
            <h3>Total: {total}€</h3>
            <button onClick={() => updateCart([])}>Clear cart</button>
          </div>
        ) : (
          <div>You cart is empty.</div>
        )}

      </div>
    ) : (
    <div className='jh-cart-closed'>
      <button
        className='jh-cart-toggle-button'
        onClick={() => setOpen(true)}
      >
        Open cart
      </button>
    </div>
    )
}

export default Cart
