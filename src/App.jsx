import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS
import { Home, Pages } from "./pages/index.js";
import Header from "./components/common/Header/Header.jsx";
import Footer from "./components/common/Footer/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/Wishing",
    element: (
      <div>
        <Header />,
        <Home />,
        <Footer />,
      </div>
    ),
  },
  {
    path: "/Wishing/pages",
    element: (
      <div>
        <Header />,
        <Pages />,
        <Footer />,
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
