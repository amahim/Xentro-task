import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Homepage/Home";
import Login from "./Components/Authentication/Login";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeLayout from "./Components/Homepage/HomeLayout";
import { AuthProvider } from "./Components/Authentication/AuthContext";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import AllUsers from "./Components/Dashboard/AllUsers";
import AllProducts from "./Components/Dashboard/AllProducts";

const queryClient = new QueryClient();

const Main = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>Error!!!</h1>,
      children: [
        {
          path: "/",
          element: <HomeLayout />, 
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },


    // dashboard routes
    {
      path: "dashboard",
      element: (
        <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
          element: <PrivateRoute>
            <AllUsers />
          </PrivateRoute>,
        },
        {
            path: "all-products",
            element: <PrivateRoute>
            <AllProducts />
          </PrivateRoute>,
        },
        
      ]
    }
  ]);

  return (
    <StrictMode>
       <AuthProvider>
        <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
      </QueryClientProvider>
       </AuthProvider>
      
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
