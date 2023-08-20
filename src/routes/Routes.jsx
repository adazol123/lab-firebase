import App from "../pages/App";
import Profile from "../pages/profile";
import Wallet from "../pages/profile/wallet";
import Auction from "../pages/profile/auction";
import Portfolio from "../pages/profile/portfolio";
import Settings from "../pages/profile/settings";
import Mobile from "../pages/mobile";

export const routes = [

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
    path: "/mobile/auction",
    element: <Auction />,
  },
  {
    path: "/",
    element: <App />,
    caseSensitive: false,
  },
];
