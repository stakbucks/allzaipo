import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Analyze from './pages/Analyze';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
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
