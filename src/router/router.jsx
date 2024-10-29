import { createBrowserRouter } from "react-router-dom";
import { Home, Pages, TemplatePage, SignUp, SignIn } from "../pages/index.js";
import Layout from "../components/Layout";


const router = createBrowserRouter([
  {
    path: "/",
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
      {
        path: "/Wishing/signin",  
        element: <SignIn />,     
      },
      {
        path: "/Wishing/signup",  
        element: <SignUp />,     
      },
    ],
  },
]);

export default router;
