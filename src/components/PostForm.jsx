import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        // ===== очищение инпутов после добавления поста (обнуление состояния) ====
        setPost({title: '', body: ''})
    }
    return (
        <form>
            {/* === это управляемый компонент! === */}
            <MyInput
                value={post.title}
                // onChange={e => setTitle(e.target.value)}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            {/* === это НЕ управляемый компонент! === */}
            <MyInput
                // ref = {bodyInputRef} 
                value={post.body}
                // onChange={e => setBody(e.target.value)}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
// 1:00:48