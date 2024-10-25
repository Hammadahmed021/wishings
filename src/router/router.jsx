import { createBrowserRouter } from "react-router-dom";
import { Home, Pages, TemplatePage } from "../pages/index.js";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/Wishing",
    element: <Layout />,
    children: [
      {
        path: "/Wishing",
        element: <Home />,
      },
      {
        path: "/Wishing/pages",
        element: <Pages />,
      },
      {
        path: "/Wishing/template/:id",  
        element: <TemplatePage />,     
      },
    ],
  },
]);

export default router;
