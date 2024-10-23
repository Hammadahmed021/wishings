import { createBrowserRouter } from "react-router-dom";
import { Home, Pages } from "../pages/index.js";
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
    ],
  },
]);

export default router;
