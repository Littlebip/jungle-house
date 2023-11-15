import '../styles/Cart.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSnowplow, faCartShopping } from '@fortawesome/free-solid-svg-icons';


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

        {/* display the cart content only if it is not empty */}
        {cart.length > 0 ? (
          <div>
            <div className='jh-cart-header'>
              <button className='jh-cart-toggle-button' onClick={() => setOpen(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <h2>Cart</h2>
            </div>

            <ul className='jh-cart-items-list'>
              {cart.map(({name, price, amount}, index) => (
                <li key={`item-${index}`}><span className='jh-cart-item-name'>{name}</span> {price}€ x {amount}</li>
              ))}
            </ul>
            <h3>Total: {total}€</h3>
            <button onClick={() => updateCart([])}><FontAwesomeIcon icon={faSnowplow} /></button>
          </div>
        ) : (
          <div>
            <button className='jh-cart-toggle-button' onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div>You cart is empty.</div>
          </div>
        )}

      </div>
    ) : (
    <div className='jh-cart-closed'>
      <button
        className='jh-cart-toggle-button'
        onClick={() => setOpen(true)}
      >
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
    )
}

export default Cart
