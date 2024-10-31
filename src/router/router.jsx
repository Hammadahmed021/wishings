import { createBrowserRouter } from "react-router-dom";
import { Home, Pages, TemplatePage, SignUp, SignIn, Profile } from "../pages/index.js";
import Layout from "../components/Layout";
import AuthLayout from "../components/AuthLayout.jsx";
import App from "../App.jsx";

// Determine base path based on environment
const baseURL = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_BASE_URL_PRODUCTION
  : import.meta.env.VITE_BASE_URL_LOCAL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/template/:id",  
        element: <TemplatePage />,     
      },
      {
        path: "/signin",
        element: (
          <AuthLayout authentication={false}>
            <SignIn />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthLayout authentication={true}>
            <Profile />
          </AuthLayout>
        ),
      },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
    ],
  },
]);




export default router;
