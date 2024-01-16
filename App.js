import React, {useState} from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassComponent";
// Импортируем цсс стили
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
  //const [likes, setLikes] = useState(8)
  // двустороннее связывание (связывание состояния со значением, которое находится в инпуте)
  //const [value,setValue] = useState('текст в инпуте')

  // Состояние с массивом постов
  // в useState передаем массив объектов
  const [posts,setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])

  const [posts2,setPosts2] = useState([
    {id: 1, title: 'Pyton', body: 'Description'},
    {id: 2, title: 'Pyton 2', body: 'Description'},
    {id: 3, title: 'Pyton 3', body: 'Description'}
  ])
  
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
    //<div className="App">
    //  <PostItem post = {{id: 1, title: 'JavaScript', body: 'Description'}}/>  
    //</div>

    // -----  Преобразуем массив обычных элементов в массив react - объектов с помощью функции .map()
    // получаем новый массив
    // .map() передаем колбэк, где каждый объект поста преобразовываем в react-элемент
    // для каждого поста в массиве отрисовываем <PostItem/> и как пропс передаем туда объект
    //<div className="App">
    //  <h1 style = {{textAlign: "center"}}>Список постов</h1>
    //  {posts.map(post => 
    //    <PostItem post = {post} key = {post.id}/>
    //    )} 
    //</div>

    <div className="App">
      <PostList posts = {posts} title = {"Посты про JS"}/> 
      <PostList posts = {posts2} title = {"Посты про Pyton"}/> 
    </div>
  );
}

export default App;
