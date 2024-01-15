import React, {useState} from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassComponent";
// Импортируем цсс стили
import './styles/App.css'
import PostItem from "./components/PostItem";

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

    //<div className="App">
    //  <Counter/>
    //</div>

    //<div className="App">
    //  <ClassCounter/>
    //</div>

    //<div className="App">
    //  <ClassCounter/>
    //</div>

    // -----  Добавляем класс на элемент
    // передаем в него данные с помощью пропсов
    <div className="App">
      <PostItem post = {{id: 1, title: 'JavaScript', body: 'Description'}}/>  
    </div>

  );
}

export default App;
