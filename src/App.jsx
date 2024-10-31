import { Outlet, RouterProvider, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import router from "./router/router";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import { useSelector } from "react-redux";


function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = ["/signin", "/signup"];
  const userData = useSelector((state) => state.auth.userData);
  console.log(userData, 'app js');

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(
    location.pathname
  );
  return (
    <>

      {/* <ScrollToTop /> */}
      {!shouldHideHeaderFooter && <Header />}
      <main className="relative">
        <Outlet />
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default App;