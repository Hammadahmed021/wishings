import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Pages,
  TemplatePage,
  SignUp,
  SignIn,
  Profile,
  CheckOutPage,
  Contact,
  OrderDetail,
  Blogs,
  BlogSingle,
} from "../pages/index.js";
import Layout from "../components/Layout";
import AuthLayout from "../components/AuthLayout.jsx";
import App from "../App.jsx";
import SummaryPage from "../pages/SummaryPage.jsx";
import AllOrderPage from "../pages/AllOrderPae.jsx";
import Thankyou from "../pages/ThankyouPage.jsx";
import ServicePage from "../pages/ServicePage.jsx";
import AboutUs from "../pages/AboutUs.jsx";

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
        path: "/service/:serviceName",
        element: <ServicePage/>,
      },
      {
        path: "/other/:serviceName",
        element: <ServicePage/>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <BlogSingle />,
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
        path: "/order/:id",
        element: (
          <AuthLayout authentication={true} >
            <OrderDetail/>
          </AuthLayout>
        )
      },
      {
        path: "/summary",
        element: 
            <SummaryPage />
      },
      {
        path: "/thankyou",
        element: 
            <Thankyou />
      },
      {
        path: "/about",
        element: 
            <AboutUs />
      },
      {
        path: "*",
        element: <div className="container mx-auto my-12 text-center">Not Found</div>,
      },
    ],
  },
]);




export default router;
