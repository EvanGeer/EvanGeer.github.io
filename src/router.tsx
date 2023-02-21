import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import { Bio } from "./routes/Bio";
import { ErrorNotFound } from "./routes/ErrorNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorNotFound />
  },
  {
    path: "/Bio",
    element: <Bio />,
  },
  // {
  //   path: "/Portfolio",
  //   element: <Portfolio />,
  // },
  // {
  //   path: "/Resume",
  //   element: <Resume />,
  // },
  // {
  //   path: "/Books",
  //   element: <Books />,
  // },
]);
