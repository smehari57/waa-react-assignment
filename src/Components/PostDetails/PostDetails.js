import React, {Fragment, useEffect, useState} from "react";
import "./PostDetails.css"
import axios from "axios";
import Comment from "../Comment/Comment";
import {useNavigate, useParams} from "react-router";

const PostDetails = (props) => {
    const [postDetail, setPostDetail] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(params.id) {
            axios.get("http://localhost:9090/api/v3/posts/" + props.id)
                .then(response => setPostDetail(response.data))
                .catch(error => console.log("Error fetching data!"));
        }
    }, [params.id]);


    const  deletButtonClicked = () => {
        axios.delete("http://localhost:9090/api/v3/posts/" + params.id)
            .then(response => navigate("/"))
            .catch(error => console.log(error.message))
    };
    // useEffect(() => {
    //     deletButtonClicked();
    // }, [props.id]);
    const space = <Fragment>&nbsp;&nbsp</Fragment>
    let postDetailDisplay = null;
    if(params.id) {
        postDetailDisplay =
            <div className="postdetails">
                <div>
                    Post Detail
                </div>
                <h1>{postDetail.title}</h1>
                <div>
                    Comments
                    {postDetail.comments != null ? postDetail.comments.map(comment => <Comment comment={comment.name}
                                                                                               key={comment.id}/>) : null}
                    <br/><br/>
                    <button onClick={() => {
                        deletButtonClicked()
                    }}> Delete Post
                    </button>
                </div>
            </div>
    }

    return (
        <div>
            {postDetailDisplay}
        </div>
    )

}

export default PostDetails;