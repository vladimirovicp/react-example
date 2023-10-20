import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="nav-links">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/page/1'>Page 1</Link></li>
                <li><Link to='/page/2'>Page 2</Link></li>
                <li><Link to='/page/3'>Page 3</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;
