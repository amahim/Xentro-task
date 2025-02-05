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
