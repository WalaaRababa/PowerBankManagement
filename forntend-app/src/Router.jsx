import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Stations from "./pages/Stations";
import CreatePowerBank from "./components/CreatePowerBank";
import UserLayout from "./layout/UserLayout";
import UserDashboard from "./pages/UserPanel/UserDashboard";
import PowerBankUser from "./pages/UserPanel/PowerBankUser";
import Profile from "./pages/UserPanel/Profile";
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
      { path: "stations", element: <Stations /> },
      { path: "create", element: <CreatePowerBank /> },

    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {path:'',element:<UserDashboard/>},
      { path:'powerbank',element:<PowerBankUser/>},
      { path:'profile',element:<Profile/>}

    ]
  }
]);
