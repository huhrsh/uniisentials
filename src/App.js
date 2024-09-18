import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./component/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  const childRoutes = [
    {
      index:true,
      element: <HomePage />,
    },
    {
      path: "product",
      element: <ProductPage/>,
    },
    {
      path: "about",
      element: <h2>About Page</h2>,
    },
    {
      path: "contact",
      element: <h2>Contact Page</h2>,
    },
    {
      path: "services",
      element: <h2>Services Page</h2>,
    },
  ];

  // Creating the router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />, 
      children: childRoutes.map((route) => route), 
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;