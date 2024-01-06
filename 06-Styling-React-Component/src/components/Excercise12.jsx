import './Excercise12.css'
import { useState } from 'react';
export default function SwithButton() {
    const [colorCode, setColorCode]= useState('white')
    function handleButtonChange(color){
        setColorCode(color)
    }
  return (
    <div id="app">
      <h1 style={{
        color:colorCode
      }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={()=> handleButtonChange('green')}>Yes</button>
        </li>
        <li>
          <button onClick={()=> handleButtonChange('red')}>No</button>
        </li>
      </menu>
    </div>
  );
}
