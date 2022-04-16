import React from "react";
import "./Dashboard.css";
import Header from "../../Containers/Header";
import "../../Containers/Header.css";
import PageRoutes from "../PageRoutes";


const Dashboard = () => {

    return (
        <React.Fragment>
            <div className="header">
                <Header/>
            </div>
            <div className="post">
            <PageRoutes/>
            </div>
        </React.Fragment>

    );
}

export default Dashboard;