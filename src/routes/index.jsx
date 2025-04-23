import App from "../App";
import Main from "../pages/Main";

import Menu1 from "../pages/Menu1/Index";
import Menu1Sub1 from "../pages/Menu1/Sub1";
import Menu1Sub2 from "../pages/Menu1/Sub2";

import Menu2 from "../pages/Menu2/Index";
import Menu2Sub1 from "../pages/Menu2/Sub1";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Main /> },

      {
        path: "menu1",
        element: <Menu1 />,
        children: [
          { path: "sub1", element: <Menu1Sub1 /> },
          { path: "sub2", element: <Menu1Sub2 /> },
        ],
      },
      {
        path: "menu2",
        element: <Menu2 />,
        children: [
          { path: "sub1", element: <Menu2Sub1 /> },
        ],
      },
    ],
  },
];