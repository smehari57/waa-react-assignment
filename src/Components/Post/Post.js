import React, {useContext} from "react";
import "./Post.css"
import {Selected} from "../../store/Selected";

const Post = (props) => {

    const setSelected = useContext(Selected);
    return (
        <div className="Content" onClick= {() => setSelected(props.id)}>
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