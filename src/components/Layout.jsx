import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header.jsx";
import Footer from "../components/common/Footer/Footer.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  );
}

export default Layout;