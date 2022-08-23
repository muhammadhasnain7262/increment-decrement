import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [inputValue, setInputValue] = useState(0);

  const btnStyle = {
    backgroundColor: 'light',
    padding: 20,
    border: 'none',
    margin: 10,
  }

  const decrement = () => {
    setInputValue(inputValue - 1);
  }

  const increment = () => {
    setInputValue(inputValue + 1);
  }


  return (
    <div>
      <input
        style={{backgroundColor: '#f1f1f1', padding: 20, }}
        type='number'
        placeholder='Enter Something'
        value={inputValue}
      />

      <button style={btnStyle} onClick={decrement}>-</button>
      <button style={btnStyle} onClick={increment}>+</button>
    </div>    
  )
}

export default Home