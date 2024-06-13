import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Warehouse from "./pages/Warhouse";
import CreatePowerBank from "./components/CreatePowerBank";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <RootLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "user", element: <User /> },
      { path: "warehouse", element: <Warehouse /> },
      { path: "create", element: <CreatePowerBank /> },

    ],
  },
]);
