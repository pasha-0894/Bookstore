import { RouterProvider } from "react-router-dom";
import { router } from "router";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
