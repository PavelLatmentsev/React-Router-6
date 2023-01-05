import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const UsersLayouts = () => {

    return (
        <div>
            <h1>UsersLayouts</h1>
            <NavLink to={"/"}>  <h3> Main Page</h3></NavLink>
            <Outlet />
        </div>
    );
}

export default UsersLayouts;
