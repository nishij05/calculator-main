import React, {useState} from 'react'; 
import './App.css';


const App= () => {
  const [state,setState]= useState('');

const handleClick = (e) => {
  setState(state.concat(e.target.name));
}  
const clear= () => {
  setState("");
}
const backspace= () => {
  setState();
}
const result= () => {
  setState(eval(state))
};
return (
    <div className='app'>
  
     <div className='container'>  
     <p>{state}</p>   
     </div>
     <div className=''>
      <button className='btn' onClick={clear} id='clear'>Clear</button>
      <button onClick={backspace} id='backspace'>C</button>
      <button name='/' onClick={handleClick}>/</button>
     
     </div>
     
     <div className=''>
     <button className='btn btn-primary' name='7' onClick={handleClick}>7</button> 
     <button name='8' onClick={handleClick}>8</button> 
     <button name='9' onClick={handleClick}>9</button> 
     <button name='+' onClick={handleClick}>+</button>
     </div>
     
     <div className=''>
     <button name='4' onClick={handleClick}>4</button> 
     <button name='5' onClick={handleClick}>5</button> 
     <button name='6' onClick={handleClick}>6</button> 
     <button name='-' onClick={handleClick}>-</button>
     </div>

     <div className=''>
     <button name='1' onClick={handleClick}>1</button> 
     <button name='2' onClick={handleClick}>2</button> 
     <button name='3' onClick={handleClick}>3</button> 
     <button name='*' onClick={handleClick}>*</button> 
     </div> 
     
     <div className=''>
     <button name='0' onClick={handleClick}>0</button>
     <button name='.' onClick={handleClick}>.</button>
     <button onClick={result} id='result'>=</button> 
     </div>
     
    </div>
  );
}

export default App;
