import React, {useMemo, useState, useRef} from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassComponent";
// Импортируем цсс стили
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
  //const [likes, setLikes] = useState(8)
  // двустороннее связывание (связывание состояния со значением, которое находится в инпуте)
  //const [value,setValue] = useState('текст в инпуте')

  // Состояние с массивом постов
  // в useState передаем массив объектов
  const [posts,setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Первый пост'},
    {id: 2, title: 'JavaScript 2', body: '2 пост'},
    {id: 3, title: 'JavaScript 3', body: 'Третий пост'}
  ])
    
    const [filter, setFilter] = useState({sort: '', query: ''})
    
    const sortedPosts = useMemo(() =>{
        if(filter.sort) {
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
        
    }, [filter.sort, posts])
    
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])  
    }
    // Получаем Post из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))  
    }

  /*const [posts2,setPosts2] = useState([
    {id: 1, title: 'Pyton', body: 'Description'},
    {id: 2, title: 'Pyton 2', body: 'Description'},
    {id: 3, title: 'Pyton 3', body: 'Description'}
  ])*/
  
  //function increment() {
  //  setLikes (likes + 1);
  //}

  //function decrement() {
   // setLikes (likes - 1);
  //}
  //   const [title, setTitle] = useState('')
  //   const [body, setBody] = useState('')
    
    /* const bodyInputRef = useRef();
    const addNewPost = (e) => {
         e.preventDefault()
         console.log(title)
         console.log(bodyInputRef.current.value)
        
        // =====  создаем новый объект, передаем заголовок и тело =====
         const newPost = {
        // айди формируем как текущую дату
              id: Date.now(),
             title,
             body
         }
        // ===== передаем старый массив и в конец добавляем новый пост =====
         setPosts([...posts, newPost])
        // создаем новый объект прямо в массиве, развернуть в него инф. из поста и добавить айди
        setPosts([...posts, {...post, id: Date.now()}])
        // ===== очищение инпутов после добавления поста (обнуление состояния) ====
         setTitle('')
         setBody('')
        setPost({title: '', body: ''})
    }*/
  return (
    //  <div className="App">
    //  <h1>{likes}</h1>
    //  <h1>{value}</h1>
    //  <input type = 'text' 
    //   value = {value}
    //  onChange={event => setValue(event.target.value)}/>
    //  <button onClick={increment}>Increment</button>
    //   <button onClick={decrement}>Decrement</button>    
    //  </div>
    //
    // <div className="App">
    //  <Counter/>
    // </div>
    //
    // <div className="App">
    //  <ClassCounter/>
    // </div>
    //
    // <div className="App">
    //  <ClassCounter/>
    // </div>
    //
    // -----  Добавляем класс на элемент
    // передаем в него данные с помощью пропсов
    // <div className="App">
    //  <PostItem post = {{id: 1, title: 'JavaScript', body: 'Description'}}/>  
    // </div>
    //
    // -----  Преобразуем массив обычных элементов в массив react - объектов с помощью функции .map()
    // получаем новый массив
    // .map() передаем колбэк, где каждый объект поста преобразовываем в react-элемент
    // для каждого поста в массиве отрисовываем <PostItem/> и как пропс передаем туда объект
    // <div className="App">
    //  <h1 style = {{textAlign: "center"}}>Список постов</h1>
    //  {posts.map(post => 
    //    <PostItem post = {post} key = {post.id}/>
    //    )} 
    // </div>
      
    <div className="App">
        <PostForm create = {createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        
        <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = {"Посты про JS"}/>
        
    </div>
  );
}
export default App;

