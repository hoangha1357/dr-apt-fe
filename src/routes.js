import HomePage from "./pages/Home";
import Page from "./component/Page1";
import NotFound from "./component/NotFound";
import Sidebar from "./layouts/SideBar";
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
    path: "*",
    element: <NotFound />,
  },
];
export default routes;
