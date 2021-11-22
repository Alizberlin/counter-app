import React, {useState} from 'react';
import './App.css';



function App(){
  const [count, changeCount] = useState('0');
  return (
    <div className='container'>

    <h1>The count is {count}</h1>
    <div>
    <button onClick={() => changeCount(parseInt(count) + 1)}>Increment</button>
    <button onClick={() => changeCount(count - 1)}>Decrement</button>
    </div>
</div>
  )
}


export default App;
