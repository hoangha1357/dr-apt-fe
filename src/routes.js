import HomePage from "./component/Home";
import Page from "./component/Page1";
import NotFound from "./component/NotFound";
import Sidebar from "./layouts/SideBar";
import Signup from "./layouts/Signup/Signup";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "page1",
    element: <Sidebar />,
    children: [
      {
        path: "page2",
        element: <Page num={2} />,
      },
    ],
  },

  {
    path: "signup",
    element: <Signup />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
];
export default routes;
