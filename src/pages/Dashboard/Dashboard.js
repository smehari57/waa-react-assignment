import React, {useState} from "react";
import "./Dashboard.css";
import Posts from "../../Containers/Posts/Posts";
import PostDetails from "../../Components/PostDetails/PostDetails";
import NewPost from "../../Components/NewPost/NewPost";
import {Selected} from "../../store/Selected";

const Dashboard = () => {
    const  [selectedState, setSelectedState] = useState(0);
    const [fetchFlag, setFetchFlag] = useState(true);

    const setSelected = (id) => {
        setSelectedState(id);
    }
    const changeFetchFlag = () => {
        setFetchFlag(!fetchFlag);
    }
    return(
        <div>
            <Selected.Provider value={setSelected}>
            <div className="post">
                <Posts fetchFlag={fetchFlag}/>
            </div>

            <div>
                <PostDetails
                    id={selectedState} changeFetchFlag={changeFetchFlag}/>
            </div>

            <div>
                <NewPost changeFetchFlag={changeFetchFlag   }/>
            </div>
            </Selected.Provider>
        </div>
    )
}

export default Dashboard;