import React, {useEffect, useState} from "react";
import "./PostDetails.css"
import axios from "axios";
import Comment from "../Comment/Comment";

const PostDetails = (props) => {
    const [postDetail, setPostDetail] = useState({});

    useEffect(() => {
        axios.get("http://localhost:9090/api/v3/posts/" + props.id)
            .then(response => setPostDetail(response.data))
            .catch(error => console.log("Error fetching data!"));
    }, [props.id]);


    const  deletButtonClicked = () => {
        axios.delete("http://localhost:9090/api/v3/posts/" + props.id)
            .then(response => {props.changeFetchFlag();})
            .catch(error => console.log(error.message))
    };
    // useEffect(() => {
    //     deletButtonClicked();
    // }, [props.id]);

    let postDetailDisplay = null;
    postDetailDisplay =
        <div className="postdetails">
            <div>
                Post Detail
            </div>
            <h1>{postDetail.title}</h1>
            <div>
                Comments
                {postDetail.comments != null? postDetail.comments.map(comment => <Comment comment={comment.name} key={comment.id}/>) : null}
            <br/><br/>
               <button onClick={() => {deletButtonClicked()}}> Delete Post</button>
            </div>
        </div>

    return (
        <div>
            {postDetailDisplay}
        </div>
    )

}

export default PostDetails;