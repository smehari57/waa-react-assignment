import React, {useEffect, useState} from "react";
import "./Posts.css"
import axios from "axios";
import PostDetails from "../../Components/PostDetails/PostDetails";
import {Link} from "react-router-dom";
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
    }, []);

    const postList = posts.map(pos => {
        return (
            <Link to={`${pos.id}`} key={pos.id}>
                <Post
                id={pos.id}
                title={pos.title}
                content={pos.content}
                author={pos.author}
                key={pos.id}

                />
            </Link>
        );
    });

    return (
        <div className="post">
            {postList}
            <PostDetails/>
        </div>
    );
}

export default Posts;