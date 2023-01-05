import MainPage from './page/mainPage';
import UsersLayouts from './layouts/userLayouts';
import { Navigate, Outlet } from "react-router-dom"
import UsersProfilePage from './page/userProfilePage';
import UsersEditPage from './page/userEditPage';
import UsersListPage from './page/usersListPage';
const routes = [
    {
        path: "/", element: <MainPage />
    },
    {
        path: "users", element: <UsersLayouts />, children: [
            {
                path: "", element: <UsersListPage />
            },
            {
                path: ":userId", element: <Outlet />, children: [
                    {
                        path: "profile", element: <UsersProfilePage />,
                    },
                    {
                        path: "edit", element: <UsersEditPage />,
                    },
                    {
                        index: true, element: <Navigate to="profile" />,
                    },
                    {
                        path: "*", element: <Navigate to="profile" />
                    }
                ]
            },

        ]
    },
    {
        path: "*", element: <Navigate to={"/"} />
    }
];

export default routes;