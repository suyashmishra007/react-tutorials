import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/root",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      // { path: "", element: <Home /> }, SAME AS ABOVE
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// const routesDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />}></Route>
//   </Route>
// );
// const router = createBrowserRouter(routesDefination);
