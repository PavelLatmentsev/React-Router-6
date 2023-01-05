import React from 'react';
import { NavLink } from 'react-router-dom';
const UsersListPage = () => {
    const usersArray = new Array(7).fill("user");
    return (<div><h1>
        UsersListPage</h1>
        <ul>
            {usersArray.map((user, index) => <NavLink to={index + "/profile"} key={index}><li><h3>{user + index}</h3></li> </NavLink>)}
        </ul>

    </div>);
}

export default UsersListPage;