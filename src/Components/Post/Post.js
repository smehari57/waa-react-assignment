import React from "react";
import "./Post.css"

const Post = (props) => {
    return (
        <div className="Content" onClick={props.setSelected}>
            <p>Id: {props.id}</p>
            <p>Title: {props.name}</p>
            <p>Content: {props.content}</p>
            <p>Author: {props.author}</p>
        </div>
    );
}

export default Post;
// to install router
//npm install react-router-dom
//npx create-react-app my-first-react// for react
//npm install axios // for axios