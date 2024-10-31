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

  console.log("Current Path:", pathname);

  const noHeaderFooterPaths = ['/signIn', '/signUp'];

  const shouldShowHeaderFooter = !noHeaderFooterPaths.includes(pathname);

  return (
    <>
      {shouldShowHeaderFooter && <Header />}
      <Outlet />
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}

export default Layout;