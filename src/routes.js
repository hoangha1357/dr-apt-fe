import HomePage from './component/Home';
import Page from './component/Page1';
import NotFound from './component/NotFound';
import Sidebar from './layouts/SideBar'
import UserInfo from './pages/UserInfo';
import Login from './pages/Login';

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },{
        path: "page1",
        element: <Sidebar/>,
        children: [
            {
                path: "page2",
                element: <Page num={2}/>,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound/>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/user-profile",
        element: <UserInfo />

    },
    
]
export default routes;