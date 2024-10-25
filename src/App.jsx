import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import router from "./router/router"; 


function App() {


  return <RouterProvider router={router} />;
}

export default App;