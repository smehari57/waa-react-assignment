import React from "react";
import Posts from "../Containers/Posts/Posts";
import {Navigate, Route, Routes} from "react-router";
import NewPost from "../Components/NewPost/NewPost";
import PostDetails from "../Components/PostDetails/PostDetails";


const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/posts"/>}/>
            <Route path="posts" element={<Posts/>}> <Route path=":id" element={<PostDetails/>}/>
            </Route>
            <Route path="create-post" element={<NewPost/>}/>

        </Routes>

    );
}

export default PageRoutes;