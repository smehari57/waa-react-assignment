import React, {useRef} from "react";
import "./NewPost.css"
import axios from "axios";


const NewPost = (props) => {

const newPostForm = useRef();

    const addButtonClicked = () => {
        const form = newPostForm.current;
        const post = {
            title: form['title'].value,
            content: form['content'].value,
            author: form['author'].value
        }

        axios.post("http://localhost:9090/api/v3/posts", post)
            .then(response => {
                props.changeFetchFlag();
            })
            .catch(error => console.log(error.message))

    }
    return (
        <div className="NewPost">
            <form ref={newPostForm}>
                            <h1> Add Post</h1>

                            <label>Title</label>
                            <input type="text" label={'title'} name={'title'} />
                            <br/> <br/>
                            <label>Content</label>
                            <input type="text" label={'content'} name={'content'} />
                            <br/>  <br/>
                            <label>Author</label>
                            <input type="text" label={'author'} name={'author'} />

                        </form>
                  <br/> <br/>
                <button onClick={addButtonClicked}> Add Post </button>

            </div>
    )

}

export default NewPost;