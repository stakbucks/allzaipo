import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Analyze from "./pages/Analyze/Analyze";
import LoginModal from "./components/Modal/LoginModal/LoginModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "analyze",
        element: <Analyze />,
      },
    ],
  },
]);

export default router;
