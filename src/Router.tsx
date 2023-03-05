import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Analyze from "./pages/Analyze/Analyze";
import PortfolioAdd from "./components/PortfolioAdd/PortfolioAdd";

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
        children: [
          {
            path: "add",
            element: <PortfolioAdd />,
          },
        ],
      },
      {
        path: "analyze",
        element: <Analyze />,
      },
    ],
  },
]);

export default router;
