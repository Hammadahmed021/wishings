import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Pages,
  TemplatePage,
  SignUp,
  SignIn,
  Profile,
  CheckOutPage,
  AboutUs,
  Contact
} from "../pages/index.js";
import Layout from "../components/Layout";
import AuthLayout from "../components/AuthLayout.jsx";
import App from "../App.jsx";
import SummaryPage from "../pages/SummaryPage.jsx";
import AllOrderPage from "../pages/AllOrderPae.jsx";

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
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
      {
        path: "/checkout",
        element: (
            <CheckOutPage />
        ),
      },
      {
        path: "/ordes",
        element: (
          <AuthLayout authentication={true} >
            <AllOrderPage/>
          </AuthLayout>
        )
      },
      {
        path: "/summary",
        element: 
            <SummaryPage />
      },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
    ],
  },
]);




export default router;
