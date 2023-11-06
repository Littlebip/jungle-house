import { useState } from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const [inputValue, setInputValue] = useState('Type your email here')
  const isCorrectEmail = inputValue.includes('@')
  function checkEmail(value) {
    if(!isCorrectEmail) {
      alert('Error: no @ has been entered.')
    } else {
      setInputValue(value)
    }
  }

  return (
    <footer className='jh-footer'>
      <div className='jh-footer-elem'>
        For plant enthusiasts 🪴🪴🪴
      </div>
      <div className='jh-footer-elem'>
        Subscribe to our newsletter:
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={(e) => checkEmail(e.target.value)}
        />
        <button>Subscribe!</button>
      </div>
    </footer>
  )
}
