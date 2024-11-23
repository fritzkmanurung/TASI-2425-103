import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Untuk navigasi

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      // Arahkan ke halaman Dashboard
      navigate("/dashboard");
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center">Register</h1>
      <form
        onSubmit={handleRegister}
        className="max-w-md mx-auto mt-6 bg-white p-4 shadow-md rounded-md"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
      {message && <p className="text-center mt-4 text-red-600">{message}</p>}
    </div>
  );
};

export default Register;
