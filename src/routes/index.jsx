import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./Routes";
import App from "../pages/App";
import Mobile from "../pages/mobile";
import Settings from "../pages/profile/settings";
import Portfolio from "../pages/profile/portfolio";
import Auction from "../pages/profile/auction";
import Wallet from "../pages/profile/wallet";
import Profile from "../pages/profile";
import AdminPage from "../pages/admin";
import AdminDashboard from "../pages/admin/dashboard";
import AdminHome from "../pages/admin/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    caseSensitive: false,

  },
  {
    path: "/admin",
    element: <AdminPage />,
    caseSensitive: false,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
        caseSensitive: false
      },
      {
        path: "home",
        element: <AdminHome />,
        caseSensitive: false
      },
      {
        path: "market",
        element: <AdminHome />,
        caseSensitive: false
      },
      {
        path: "guide",
        element: <AdminDashboard />,
        caseSensitive: false
      },
      {
        path: "*",
        element: <AdminDashboard />,
        caseSensitive: false
      },
    ]
  },
  {
    path: "/profile",
    element: <Profile />,
    caseSensitive: false,
    children: [
      {
        index: true,
        element: <Wallet />,
      },
      {
        path: "auction",
        element: <Auction />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/mobile",
    element: <Mobile />,
    caseSensitive: false,
    //children: [
    //  {
    //    index: true,
    //    element: <Wallet />,
    //  },
    //  {
    //    path: "auction",
    //    element: <Auction />,
    //  },
    //  {
    //    path: "portfolio",
    //    element: <Portfolio />,
    //  },
    //  {
    //    path: "settings",
    //    element: <Settings />,
    //  },
    //],
  },
  {
    path: "/mobile/auction",
    element: <Auction />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
