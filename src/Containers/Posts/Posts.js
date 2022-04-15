import React, {useEffect, useState} from "react";
import "./Posts.css"
import axios from "axios";
import Post from "../../Components/Post/Post";

const Posts = (props) => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get("http://localhost:9090/api/v3/posts")
            .then(response => setPosts(response.data))
            .catch(error => console.log(error.message))
    };
    useEffect(() => {
        fetchPosts();
    }, [props.fetchFlag]);

    const postList = posts.map(pos => <Post
         id={pos.id}
         title={pos.title}
         content={pos.content}
         author={pos.author}
         key={pos.id}
         setSelected={() => {props.setSelected(pos.id)}}
    />)

    return (
        <>
            {postList}
        </>
    );
}

export default Posts;