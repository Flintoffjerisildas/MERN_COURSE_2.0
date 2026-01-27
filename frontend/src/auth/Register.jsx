import React, { useState } from "react";
import { register, login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await login(formData);
        localStorage.setItem("token", res.data.token);
        toast.success("Login successful");
        navigate("/task");
      } else {
        await register(formData);
        toast.success("Registered successfully");
        setIsLogin(true); // switch to login after register
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="hidden md:flex w-1/2 bg-gray-900 justify-end items-center">
        <div className="w-3/4 h-3/4 border-2 border-r-0 border-gray-200 rounded-l-2xl"></div>
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-4"
        >
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-gray-900 font-semibold hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;