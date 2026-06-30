import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/login",
        {
          email: form.email,
          password: form.password,
        }
      );

      alert(res.data.message);

      // Save user information
      localStorage.setItem(
  "user",
  JSON.stringify({
    name: res.data.name,
    email: res.data.email,
  })
);

      navigate("/");

    } catch (err) {

      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Server Error");
      }

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-xl w-[420px]">

        <h1 className="text-3xl font-bold text-center mb-2">
          FabTwin AI
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sign in to continue
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-6"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-5 text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;