import React from "react";
import "./Comment.css"

const Comment = (props) => {

    return (
        <div className="Content">
            {props.comment}
        </div>
    )

}

export default Comment;