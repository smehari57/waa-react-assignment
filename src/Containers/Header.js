import React from "react";
import {Link} from "react-router-dom";


const Header = () => {

    return (
           <div>
            <nav>
                <ul>
                    <li> <Link to="/posts"> Posts </Link></li>
                    <li> <Link to="/create-post"> New Post </Link></li>
                </ul>
            </nav>
           </div>

    );


}

export default Header;