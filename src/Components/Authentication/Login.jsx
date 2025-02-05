import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {loggedIn,setLoggedIn} = useAuth()
  const handleLogin = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const users = response.data;

      const user = users.find((u) => u.email === email);

      if (user) {
        toast.success("Login Successful!")
        setLoggedIn(true)
        navigate("/");
      } else {
        setError("Invalid email. Please try again.");
      }
    } catch (err) {
      setError("Failed to fetch user data. Please try again later.");
    }
  };

  return (
    <div className="py-10">
      <div className="border-2 border-black w-2/5 mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center text-black mt-5">
          Let's login!
        </h1>

        <label className="rounded-none input input-bordered flex border-black w-4/5 mx-auto mt-10 mb-5 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#000000"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="flex justify-center">
          <button
            className="w-4/5 mb-5 btn bg-black text-white rounded-none"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
