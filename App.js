import React, {useState} from "react";
import Counter from "./components/counter";

function App() {
  //const [likes, setLikes] = useState(8)
  // двустороннее связывание (связывание состояния со значением, которое находится в инпуте)
  const [value,setValue] = useState('текст в инпуте')
  
  //function increment() {
  //  setLikes (likes + 1);
  //}

  //function decrement() {
   // setLikes (likes - 1);
  //}
  return (
     //<div className="App">
     // <h1>{likes}</h1>
     // <h1>{value}</h1>
     // <input type = 'text' 
      //value = {value}
     // onChange={event => setValue(event.target.value)}/>
     // <button onClick={increment}>Increment</button>
      //<button onClick={decrement}>Decrement</button>    
     //</div>
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;