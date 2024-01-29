import React from "react";
import MyButton from "./UI/button/MyButton";

// Компонент может принимать в себя входные данные - "props"
const PostItem = (props) => {
    console.log(props);
    return (
        <div className = "post">
        <div className = "post__content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => props.remove(props.post)}>
              Удалить
          </MyButton>
        </div>
      </div>
    )
}

export default PostItem;
